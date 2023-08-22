import { Alert } from "react-native";
import { IAccount } from "../home/accounts/types";
import { collection, doc, getDoc, getDocs, limit, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../../firebase";

export const handleTransfer = async (fromAccount: IAccount, cardNumber: string, sum: number) => {

    // Alert.prompt doesn't work on Android, so just to test I send sum 200
    Alert.alert('Sum transfer', 'Enter the transfer amount:', [
        {
            text: 'Cancel',
            style: "cancel",
        },
        {
            text: 'OK',
            onPress: async () => {
                try {
                    
                    let toAccountId = '';
                    let toCurrentBalance = '';
        
                    const querySnapshot = await getDocs(
                        query(collection(db, 'accounts'),
                        where('cardNumber', '==', cardNumber),
                        limit(1))
                    );
        
                    querySnapshot.docs.forEach(doc => {
                        toAccountId = doc.id;
                    })
        
                    const docRefTo = doc(db, 'accounts', toAccountId);
                    const docSnapTo = await getDoc(docRefTo);
        
                    if (docSnapTo.exists()) {
                        toCurrentBalance = docSnapTo.data().balance;
                    } else {
                        Alert.alert('The card where you are sending money was not found');
                        return;
                    }
                
                    await updateDoc(docRefTo, {
                        balance: toCurrentBalance + Number(sum)
                    })
        
                    const docRefFrom = doc(db, 'accounts', fromAccount._id);
        
                    await updateDoc(docRefFrom, {
                        balance: fromAccount.balance - Number(sum)
                    })
        
                    return;
                } catch (error: any) {
                    Alert.alert('Error transfer', error.message);
                }
            }
        }
    ]);
}
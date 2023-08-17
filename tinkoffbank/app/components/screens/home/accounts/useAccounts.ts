import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../../firebase";
import { IAccount } from "./types";
import { useAuth } from "../../../../hooks/useAuth";

export const useAccounts = () => {
    const {user} = useAuth();

    const [accounts, setAccounts] = useState<IAccount[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => onSnapshot(query(collection(db, 'accounts'),
        where('userId', '==', user?.uid)), snapshot => {
            const accs = snapshot.docs.map(d => ({
                _id: d.id,
                ...d.data(),
            } as IAccount));
            setAccounts(accs);

            setIsLoading(false);
    }), []);

    return {accounts, isLoading};
}
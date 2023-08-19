import { View, ScrollView } from "react-native";
import React, { FC } from "react";
import { useContacts } from "./useContacts";
import SubHeading from "../../../ui/SubHeading";
import Loader from "../../../ui/Loader";
import tw from "twrnc";
import ContactItem from "./ContactItem";

const Contacts: FC = () => {
    const { contacts, isLoading } = useContacts();

    return (
        <View style={tw`my-8`}>
            <SubHeading text="Phone transfers" />
            {isLoading ? (
                <Loader />
            ) : (
                <ScrollView
                    style={tw`mt-5`}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                >
                    {contacts.map((c) => (
                        <ContactItem contact={c} key={c._id} />
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

export default Contacts;

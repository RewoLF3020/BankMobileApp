import { Text, Pressable } from "react-native";
import React, { FC, useState } from "react";
import { IContact } from "./types";
import tw from "twrnc";
import Avatar from "../../../ui/Avatar";
import { handleTransfer } from "../handleTransfer";
import { useAccounts } from "../../home/accounts/useAccounts";

const ContactItem: FC<{ contact: IContact }> = ({ contact }) => {
    const { accounts } = useAccounts();

    return (
        <Pressable
            style={tw`ml-4 mr-1 items-center`}
            onPress={handleTransfer.bind(this, accounts[0], contact.cardNumber, 200)}
        >
            <Avatar name={contact.displayName} size='large' />
            <Text style={tw`mt-1 text-xs`}>
                {contact.displayName}
            </Text>
        </Pressable>
    );
};

export default ContactItem;

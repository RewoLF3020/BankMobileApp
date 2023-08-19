import { Text, Pressable } from "react-native";
import React, { FC } from "react";
import { IContact } from "./types";
import tw from "twrnc";
import Avatar from "../../../ui/Avatar";

const ContactItem: FC<{ contact: IContact }> = ({ contact }) => {
    return (
        <Pressable style={tw`ml-4 mr-1 items-center`}>
            <Avatar name={contact.displayName} size='large' />
            <Text style={tw`mt-1 text-xs`}>
                {contact.displayName}
            </Text>
        </Pressable>
    );
};

export default ContactItem;

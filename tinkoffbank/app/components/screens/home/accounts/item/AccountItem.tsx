import { View, Text } from "react-native";
import React, { FC } from "react";
import { IAccount } from "../types";

const AccountItem: FC<{ account: IAccount }> = ({ account }) => {
    return (
        <View>
            <Text>{account.name}</Text>
        </View>
    );
};

export default AccountItem;

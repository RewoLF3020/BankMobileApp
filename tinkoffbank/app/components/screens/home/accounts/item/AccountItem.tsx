import { View } from "react-native";
import React, { FC } from "react";
import { IAccount } from "../types";
import tw from 'twrnc';
import Currency from "./Currency";
import Balance from "./Balance";
import ItemCard from "./ItemCard";

const AccountItem: FC<{ account: IAccount }> = ({ account }) => {
    return (
        <View style={tw`flex-row items-center justify-between mb-7`}>
            <Currency currency={account.currency} />
            <Balance account={account} />
            <ItemCard account={account} />
        </View>
    );
};

export default AccountItem;

import { Text, Pressable } from "react-native";
import React, { FC } from "react";
import { IOtherItem } from "../types";
import tw from "twrnc";
import Icon from "./Icon";
import { BOX_SHADOW } from "../../../../../styles";

const OtherItem:FC<{item: IOtherItem}> = ({ item }) => {
    return (
        <Pressable
            style={{
                ...tw`ml-4 rounded-xl p-2 w-24 h-24 bg-white`,
                ...BOX_SHADOW
            }}
        >
            <Icon iconName={item.iconName} />
            <Text style={{...tw`text-xs`, marginTop: 6}}>
                { item.title }
            </Text>
        </Pressable>
    );
};

export default OtherItem;

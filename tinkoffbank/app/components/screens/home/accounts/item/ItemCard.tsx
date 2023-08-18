import { Text, ImageBackground, ImageSourcePropType } from "react-native";
import React, { FC } from "react";
import { IAccount } from "../types";
import tw from "twrnc";

const ItemCard:FC<{account: IAccount}> = ({ account: {name, cardNumber} }) => {
    const imageBlack:ImageSourcePropType = require('../../../../../../assets/cards/black.png');
    const imageAirlines:ImageSourcePropType = require('../../../../../../assets/cards/airlines.png');


    return (
        <ImageBackground
            source={name === 'Tinkoff Black' ? imageBlack : imageAirlines}
            resizeMode="contain"
            style={{...tw`justify-end w-14 h-10`, padding: 4.5}}
        >
            <Text style={{...tw`text-white font-medium`, fontSize: 11}}>
                {cardNumber.slice(-4)}
            </Text>
        </ImageBackground>
    );
};

export default ItemCard;

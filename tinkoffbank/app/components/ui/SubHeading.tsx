import { Text } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import Padding from "./Padding";

const SubHeading: FC<{ text: string }> = ({ text }) => {
    return (
        <Padding>
            <Text style={tw`text-xl font-bold text-gray-800`}>
                {text}
            </Text>
        </Padding>
    );
};

export default SubHeading;

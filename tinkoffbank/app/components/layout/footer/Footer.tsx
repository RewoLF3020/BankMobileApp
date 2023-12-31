import { View, Text } from "react-native";
import React, { FC } from "react";
import Padding from "../../ui/Padding";
import tw from "twrnc";
import { menu } from "./menu";
import NavItem from "./NavItem";
import { TypeRootStackParamList } from "../../../navigation/types";

interface IFooter {
    navigate: (screenName: keyof TypeRootStackParamList) => void;
    currentRoute: string;
}

const Footer: FC<IFooter> = ({ navigate, currentRoute }) => {
    return (
        <Padding
            style={{
                ...tw`flex-row justify-between items-center w-full
                    bg-gray-50 px-0 pb-5 pt-2`,
                borderTopColor: '#E1E1E1',
                borderTopWidth: 1,
            }}
        >
            {menu.map(item => (
                <NavItem
                    item={item}
                    key={item.title}
                    navigate={navigate}
                    currentRoute={currentRoute}
                />
            ))}
        </Padding>
    );
};

export default Footer;

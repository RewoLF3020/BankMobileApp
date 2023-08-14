import { Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import Padding from "../../ui/Padding";
import Avatar from "../../ui/Avatar";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const Header: FC = () => {
    const {navigate} = useNavigation()

    return (
        <Padding style={tw`flex-row items-center`}>
            <Avatar name='Buben' />
            <TouchableOpacity
                onPress={() => navigate('Profile')}
                style={tw`flex-row items-end`}
            >
                <Text style={tw`text-2xl text-gray-800 font-bold`}>Buben</Text>
                <Entypo
                    name='chevron-small-right'
                    size={28}
                    style={tw`text-gray-800`}    
                />
            </TouchableOpacity>
        </Padding>
    );
};

export default Header;

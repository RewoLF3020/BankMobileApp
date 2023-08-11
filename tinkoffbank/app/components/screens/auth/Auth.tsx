import { View, Text } from "react-native";
import React, { FC, useState } from "react";
import tw from 'twrnc';
import { styleCenter } from "../../layout/Layout";
import { useAuth } from "../../../hooks/useAuth";
import Loader from "../../ui/Loader";
import Field from "../../ui/Field";
import Button from "../../ui/Button";

interface IData {
    email: string;
    password: string;
}

const Auth: FC = () => {
    const {isLoading} = useAuth();

    const [data, setData] = useState<IData>({} as IData)
    const [isReg, setIsReg] = useState(false);

    const authHandler = () => {}

    return (
        <View style={styleCenter}>
            <View style={tw`mx-5 justify-center items-center h-full`}>
                <View style={tw`w-9/12`}>
                    <Text style={tw`text-center text-gray-800
                    text-2xl font-bold mb-2`}>
                        {isReg ? 'Sign Up' : 'Sign In'}
                    </Text>

                    {isLoading ? <Loader /> : <>
                        <Field 
                            val={data.email}
                            placeholder="Enter email"
                            onChange={val => setData({...data, email: val})}
                        />
                        <Field 
                            val={data.password}
                            placeholder="Enter password"
                            onChange={val => setData({...data, password: val})}
                            isSecure={true}
                        />
                        <Button onPress={authHandler} title={"Let's go"} />
                    </>}
                </View>
            </View>
        </View>
    );
};

export default Auth;

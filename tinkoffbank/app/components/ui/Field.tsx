import { TextInput } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";

interface IField {
    onChange: (val: string) => void;
    val: string;
    placeholder: string;
    isSecure?: boolean;
}

const Field: FC<IField> = ({ onChange, placeholder, val, isSecure }) => {
    return (
		<TextInput
			showSoftInputOnFocus={false}
			placeholder={placeholder}
			onChangeText={onChange}
			value={val}
			secureTextEntry={isSecure}
			autoCapitalize="none"
			style={[tw`rounded-xl bg-gray-100 mt-3 pt-3 w-full`, { textAlignVertical: 'center', paddingLeft: 10, paddingBottom: 10 }]}
		/>
	)
};

export default Field;

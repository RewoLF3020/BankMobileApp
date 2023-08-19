import { View, ScrollView } from "react-native";
import React, { FC } from "react";
import SubHeading from "../../../ui/SubHeading";
import tw from "twrnc";
import { otherItems } from "./data";
import OtherItem from "./item/OtherItem";

const Other: FC = () => {
    return (
        <View>
			<SubHeading text="Important transfers" />
            <ScrollView
				style={tw`py-5`}
				showsHorizontalScrollIndicator={false}
				horizontal
			>
				{otherItems.map(item => (
					<OtherItem item={item} key={item.title} />
				))}
			</ScrollView>
        </View>
    );
};

export default Other;

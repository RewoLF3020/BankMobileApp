import { View, Text, ScrollView } from "react-native";
import React, { FC } from "react";
import { useStories } from "./useStories";
import tw from 'twrnc';
import Loader from "../../../ui/Loader";
import StoryItem from "./StoryItem";

const Stories: FC = () => {
    const {stories, isLoading} = useStories();

    return (
        <View style={tw`my-7`}>
            {isLoading ? <Loader /> : (
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {stories.map(story => (
                        <StoryItem story={story} key={story._id}/>
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

export default Stories;

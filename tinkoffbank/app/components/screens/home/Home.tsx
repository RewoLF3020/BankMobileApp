import { Text } from "react-native";
import React, { FC } from "react";
import Layout from "../../layout/Layout";
import Header from "./Header";
import Stories from "./stories/Stories";

const Home: FC = () => {
    return (
        <Layout>
            <Header />
            <Stories />
            <Text>Home</Text>
        </Layout>
    );
};

export default Home;

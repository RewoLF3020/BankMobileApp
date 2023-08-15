import { Text } from "react-native";
import React, { FC } from "react";
import { useProfile } from "./useProfile";
import Layout from "../../layout/Layout";
import Heading from "../../ui/Heading";
import Padding from "../../ui/Padding";
import Loader from "../../ui/Loader";
import Field from "../../ui/Field";
import Button from "../../ui/Button";
import { useAuth } from "../../../hooks/useAuth";

const Profile: FC = () => {
    const {logout} = useAuth()
    const {isLoading: isProfileLoading, name, setName} = useProfile();

    return (
        <Layout>
            <Heading text="Profile" isCenter={true} />
            <Padding>
                {isProfileLoading ? <Loader /> : <>
                    <Field onChange={setName} val={name} placeholder="Enter name" />
                    <Button onPress={() => {}} title="Update profile" />
                    <Button onPress={logout} title="Logout" colors={['bg-gray-200', '#D6D8D8']} />
                </>}
            </Padding>
        </Layout>
    );
};

export default Profile;

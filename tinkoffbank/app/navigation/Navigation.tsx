import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";
import Auth from "../components/screens/auth/Auth";
import Home from "../components/screens/home/Home";
import Profile from "../components/screens/profile/Profile";
import Payments from "../components/screens/payments/Payments";
import Services from "../components/screens/services/Services";
import Support from "../components/screens/support/Support";
import More from "../components/screens/more/More";

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
    const {user} = useAuth()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {user ? (
					<>
						<Stack.Screen name="Home" component={Home}></Stack.Screen>
						<Stack.Screen name="Profile" component={Profile}></Stack.Screen>
						<Stack.Screen name="Payments" component={Payments}></Stack.Screen>
						<Stack.Screen name="Services" component={Services}></Stack.Screen>
						<Stack.Screen name="Support" component={Support}></Stack.Screen>
						<Stack.Screen name="More" component={More}></Stack.Screen>
					</>
				) : (
						<Stack.Screen name="Auth" component={Auth}></Stack.Screen>
					)}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;

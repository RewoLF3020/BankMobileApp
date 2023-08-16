import { AuthProvider } from "./app/providers/AuthProvider";
import Navigation from "./app/navigation/Navigation";
import { DataProvider } from "./app/providers/DataProvider";
import StoryContainer from "./app/components/screens/home/stories/StoryContainer";
// import { LogBox } from "react-native";

export default function App() {
    return (
        <AuthProvider>
            <DataProvider>
                <StoryContainer />
                <Navigation />
            </DataProvider>
        </AuthProvider>
    );
}

// LogBox.ignoreAllLogs()
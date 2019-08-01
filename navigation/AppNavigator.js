import { createStackNavigator, createAppContainer} from "react-navigation";

import HomeScreen from '../screens/HomeScreen';
import SectionScreen from "../screens/SectionScreen";
import TabNavigation from "./TabNavigator";
import CoursesScreen from "../screens/CoursesScreen";

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Section: SectionScreen
},
    {
        mode: "modal"
    });
export default createAppContainer(TabNavigation);
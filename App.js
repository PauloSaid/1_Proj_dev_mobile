import Main from "./src/components/pages/MainPage/index";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./src/components/pages/LoginPage";

const Stack = createStackNavigator();


export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "MainPage" component={Main}/>
        <Stack.Screen name = "LoginPage" component={LoginPage}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

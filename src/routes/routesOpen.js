import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login/login.js";
import Account from "../screens/account/account.js";


const Stack = createNativeStackNavigator();

function RoutesOpen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={Login} options={{
                headerShown: false
            }} />
            <Stack.Screen name="account" component={Account} options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    )
    
}

export default RoutesOpen;
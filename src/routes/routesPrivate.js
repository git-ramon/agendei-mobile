import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/main/main.js";
import Services from "../screens/services/services.js";
import Schedule from "../screens/schedule/schedule.js";
import { COLORS } from "../constants/theme.js";

const Stack = createNativeStackNavigator();

function RoutesPrivate() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="main" component={Main} 
                options={{headerShown: false}} />
            
            <Stack.Screen name="services" component={Services} 
                options={{
                    headerTitle: "Serviços",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTintColor: COLORS.white,
                    headerStyle: {
                        backgroundColor: COLORS.blue
                    }
                    }} />

            <Stack.Screen name="schedule" component={Schedule} 
                options={{
                    headerTitle: "Fazer uma reserva",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTintColor: COLORS.blue
                    }} />
          
        </Stack.Navigator>
    )
    
}

export default RoutesPrivate;
import RoutesPrivate from "./routesPrivate";
import RoutesOpen from "./routesOpen";
import { View } from 'react-native';
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import ApresentationScreen from "../screens/apresentation/ApresentationScreen.js";
import Login from "../screens/login/login";
import { createStackNavigator } from "@react-navigation/stack";
import { useState, useEffect } from "react";
import AbaHome from "../screens/abahome/abahome.js";

/*
function Routes(){

    const {user} = useContext(AuthContext);

    return user.id_user ? <RoutesPrivate/> : <RoutesOpen/>
}

export default Routes;*/


function Routes() {
    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar a splash screen

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Oculta a tela de apresentação após 3 segundos
        }, 5000); // Ajuste o tempo conforme necessário

        return () => clearTimeout(timer); // Limpa o temporizador
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ApresentationScreen /> 
            </View>
        );
    }

    return user.id_user ? <RoutesPrivate /> : <RoutesOpen />; // Exibe rotas privadas ou abertas
}

export default Routes;


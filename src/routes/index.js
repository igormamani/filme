import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screan/Home';
import Details from '../screan/Details';
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function Routes(){
    const stack = createStackNavigator();

        // Função para personalizar o botão de retorno
        const voltar = (navigation) => (
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ flexDirection: 'row', alignItems: 'center', marginLeft:15, backgroundColor:'rgba(0, 0, 0, 0.27)', borderRadius:30, }}
            >
                <Ionicons name="arrow-back" size={30} color="white" /> {/* Ícone de seta */}
            </TouchableOpacity>
        );
    

    return(

        <NavigationContainer>
            <stack.Navigator>

                <stack.Screen
                    options={{
                        title:'',
                        headerTransparent: true,
                        headerStyle : {
                        },
                    }}
                    name = 'home'
                    component={Home}/>
                <stack.Screen
                    options={({ navigation }) => ({
                        title: '',
                        headerTransparent: true,
                        headerLeft: () => voltar(navigation), // Aplica o botão personalizado
                    })}
                    name = 'details'
                    component={Details}/>

            </stack.Navigator>

        </NavigationContainer>

    );
}
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screan/Home';
import Details from '../screan/Details';

export default function Routes(){
    const stack = createStackNavigator();

    return(

        <NavigationContainer>
            <stack.Navigator>

                <stack.Screen name = 'home' component={Home}/>
                <stack.Screen name = 'details' component={Details}/>

            </stack.Navigator>

        </NavigationContainer>

    );
}
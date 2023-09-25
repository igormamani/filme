import React from 'react'
import styles from './style'
import {Text, View, Image} from 'react-native'
import { useRoute } from '@react-navigation/native';


export default function Details(){

    const routes = useRoute();

    return(
    
        <View style={styles.container}>
            <View>
                <Image style ={styles.images} source={require (`../../Img/${routes.params.images}`) } />
                <Text style ={styles.titulo} >{routes.params.titulo} </Text>
                <Text style={styles.textpreco} >{routes.params.preco} / 10 </Text>
                        
            </View>

        </View>
        
    )
}
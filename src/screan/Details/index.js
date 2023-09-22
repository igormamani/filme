import React from 'react'
import styles from './style'
import {Text, View, Image} from 'react-native'
import { useRoute } from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';


export default function Details(){

    const routes = useRoute();
    const  [ rating ,  setRating ]  =  useState ( 0 ) ; 

    return(
    
        <View style={styles.container}>
            <View>
                <Image style ={styles.images} source={require (`../../Img/${routes.params.images}`) } />
                <Text style ={styles.titulo} >{routes.params.titulo} </Text>
                <Text style={styles.textpreco} >{routes.params.preco} / 10 </Text>
                        
            </View>
            {/* <StarRating
                    rating={rating}
                    onChange={setRating}
                /> */}
        </View>
        
    )
}


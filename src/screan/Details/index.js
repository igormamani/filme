import React from 'react'
import styles from './style'
import {Text, View, Image} from 'react-native'
import { useRoute } from '@react-navigation/native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Details(){

    const routes = useRoute();

    return(
    
        <View style={styles.container}>
            <View>
                <Image style ={styles.images} source={require (`../../Img/${routes.params.images}`) } />
                <Text style ={styles.titulo} >{routes.params.titulo} </Text>
                <Text style={styles.textpreco} >{routes.params.preco} / 10 </Text>
                <Stars
                    default={routes.params.preco}
                    count={10}
                    half={true}
                    starSize={150}
                    fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                    emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                    halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
                />
                        
            </View>

        </View>

        
        
    )
}
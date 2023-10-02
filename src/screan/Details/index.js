import React from 'react'
import styles from './style'
import {Text, View, Image} from 'react-native'
import { useRoute } from '@react-navigation/native';
import Stars from 'react-native-stars';
import DATA from '../../data/filmes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Details(){

    const routes = useRoute();

    console.log("routes.params.titulo:", routes.params.titulo);

    const filmeSelecionado = DATA.find(filme => filme.nome === routes.params.titulo);
    console.log(filmeSelecionado);

    return(
    
        <View style={styles.container}>
                <Image style ={styles.images} source={require (`../../Img/${routes.params.images}`) } />
                <View  style={styles.til}>
                    <Text style ={styles.titulo} >{routes.params.titulo} </Text>
                </View>
                <View style={styles.pont}>
                    <View style={{ marginLeft:20 }}>
                        <Stars
                        style={styles.star}
                        disabled
                        default={parseInt(routes.params.preco)}                    count={10}
                        half={true}
                        fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                        emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                        halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
                    />
                    </View>
                        <Text style={styles.textpreco} >{routes.params.preco} / 10 </Text>
                </View>
                <View style ={styles.desc}>
                    <Text style ={styles.sinopse}>Sinopse:</Text>
                </View>
                <View style ={styles.descfilme}>
                    <Text style={{color:'#fff',marginLeft:15}}>{filmeSelecionado.desc}</Text>
                </View>
                
        </View>

        
        
    )
}
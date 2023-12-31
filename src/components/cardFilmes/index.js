import React from 'react'
import {Image, Text, TouchableOpacity} from 'react-native'
import styles from './style'
import { useNavigation } from '@react-navigation/native';

export default function cardFilmes({titulo, imagem, preco }){

    const navigation = useNavigation();

    return(



        <TouchableOpacity onPress={ () => navigation.navigate('details', {titulo:titulo, preco:preco, images:imagem})} style = {styles.containerJogos}>
        <Image style ={styles.images} source={require (`../../Img/${imagem}`) } />
        <Text style ={styles.titulo}>{titulo}</Text>
        <Text style={styles.textpreco} >{preco}</Text>
    </TouchableOpacity>




    );



    
    }
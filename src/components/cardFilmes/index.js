import React from 'react'
import {Image, Text,View, TouchableOpacity} from 'react-native'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

export default function cardFilmes({titulo,preco,images}){

    const navigation = useNavigation();

    return(

        <TouchableOpacity onPress= { () => navigation.navigate('details')} style = {styles.containerJogos}>

        <Image style={styles.images} source ={require(`../../img2/${images}`)}/>
        <Text style={styles.titulo}>{titulo}</Text>

        <Text style={styles.textpreco}>{preco}</Text>


     
    </TouchableOpacity>




    );



    
    
    
    
    }


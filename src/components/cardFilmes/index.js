import React from 'react'
import {Image, Text, TouchableOpacity} from 'react-native'
import styles from './style'
export default function cardFilmes({titulo, imagem, autor, editora, preco, quantidade}){

    return(



        <TouchableOpacity style = {styles.containerJogos}>
        <Image style ={styles.images} source={require (`../../Img/${imagem}`) } />
        <Text style ={styles.titulo}>{titulo}</Text>
        <Text style={styles.textautor} >{autor}</Text>
        <Text style={styles.texteditora} >{editora}</Text>
        <Text style={styles.textpreco} >{preco}</Text>
        <Text style={styles.textquantidade} >{quantidade}</Text>
    </TouchableOpacity>




    )



    
    
    
    
    }


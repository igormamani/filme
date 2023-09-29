import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    containerJogos:{
        paddingTop:20,
        paddingBottom:16,
        paddingRight:16,
        width:140,
    },
    titulo:{
        color:'#fff',
        fontSize:12,
        paddingTop:8
    },
    textpreco:{
        fontSize:10,
        color:'#fff',
        paddingLeft:4
    },
    images:{
        widht:'95%',
        height:400,
        borderRadius:40
    },

    container: {
        backgroundColor: '#141A29',
        widht:'100%',
        height:'100%'
        
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
      },
      myEmptyStarStyle: {
        color: 'white',
      }




})

export default styles;
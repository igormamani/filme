import { StyleSheet } from "react-native"

const styles = StyleSheet.create({


    til:{
        // borderWidth: 3,
        // borderColor: 'white',
        alignItems:'center',
        widht:'100%',
        height:50,
        // paddingBottom:20
    },
    pont:{
        // borderWidth: 3,
        // borderColor: 'white',
        flexDirection:'row'
    },
    titulo:{
        color:'#fff',
        fontSize:25,
        paddingTop:3
    },
    textpreco:{
        fontSize:15,
        color:'#fff',
        paddingLeft:50,
    },
    images:{
        width:'100%',
        height:350,
        borderRadius:40,
    },

    container: {
        backgroundColor: '#141A29',
        widht:'100%',
        height:'100%'
        
    },
    myStarStyle: {
        fontSize:22,
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 5, height: 5},
        textShadowRadius: 2,
      },
      myEmptyStarStyle: {
        color: 'white',
        fontSize:22,

      },
      desc:{
        // borderWidth: 3,
        // borderColor: 'white',
        width:'100%',
        height:70,
      },
      sinopse:{
        color:'#fff',
        fontSize:25,
        paddingTop:3,
        marginLeft:30,
        marginTop:10
      },
      descfilme:{
        // borderWidth: 3,
        // borderColor: 'white',
        width:'100%',
        height:400
      }

})

export default styles;
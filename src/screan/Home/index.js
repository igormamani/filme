
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../../src/components/header';
import Search from '../../../src/components/searchBar';
import Banner from '../../../src/components/bannerMovies';
// import Filmes from '../../../src/data/filmes';
import React,{useState, useEffect} from 'react';
import Series from '../../../src/data/series';
import CardFilmes from '../../../src/components/cardFilmes';
import CardSeries from '../../../src/components/cardSeries';



export default function App() {


const [movies, setMovies] = useState([]);

useEffect(() => {

  async function buscarFilmes(){


    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=e321d32f7c82226ef8c44d9a8af35fb5&language=pt-BR');
    const data = await response.json();

    console.log(data.results);
    setMovies(data.results);
  } 

  buscarFilmes();



}, [])

  return (
    <View style={styles.container}>
      <Header></Header>
      <Search></Search>
      <Banner></Banner>
     

    <View style={{width:'90%'}}>
    <FlatList 
    showsHorizontalScrollIndicator = {false}
    horizontal ={true}
    data  ={''} 
    keyExtractor = {(item) => item.id}
    renderItem = { ({item})  =>(

     <CardFilmes

      titulo = {item.nome}
      imagem = {item.imagem}
      preco = {item.preco}
      // autor = {item.autor}
      // editora = {item.editora}
      // quantidade = {item.quantidade}
      
      >
     </CardFilmes>

      

      )} 

      
      
    />

<FlatList 
    showsHorizontalScrollIndicator = {false}
    horizontal ={true}
    data ={Series} 
    keyExtractor = {(item) => item.id}
    renderItem = { ({item})  =>(

     <CardSeries

      titulo = {item.nome}
      imagem = {item.imagem}
      nota = {item.nota}
      // preco = {item.preco}
      // autor = {item.autor}
      // editora = {item.editora}
      // quantidade = {item.quantidade}
      
      >
     </CardSeries>

      

      )} 

      
      
    />
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A29',
    alignItems: 'center',
    
  },
});

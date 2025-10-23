import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';

export default function CoffeeShop() {
  const [dataInState, setData] = useState(null);

  const getData = async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await resp.json();
    setData(data);
  };

  //on first fetch data.
  useEffect(() => {
    getData();
  }, []);

  const renderIngredients = ({item, index}) => {
    return (
        <Text>- {item}</Text>
      );
  }

  const renderRecipe = ({ item, index }) => {
    return (
        <View style={styles.coffeeRecipe}>
          <Image style={styles.coffeeImage} source={{uri: item.image}}/>
          <Text style={{fontWeight: '500'}}>
            {index + 1}. {item.title}
          </Text>
          <Text style={{}}>
            <Text style={{fontStyle: 'italic'}}>Description: </Text>
            <Text>{item.description}</Text>
          </Text>
          <Text style={styles.coffeeIngredients}>Ingredient: </Text>
          <FlatList 
            data={item.ingredients} 
            renderItem={renderIngredients}>
          </FlatList>
        </View>
      );
  }; 

  return (
    <ScrollView>
      {dataInState && (
        <FlatList
          data={dataInState}
          renderItem={renderRecipe}
          keyExtractor= {(item) => item.id}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  coffeeRecipe: {
    marginBottom: 30,
  },
  coffeeImage:{
    height: 150,
    borderRadius: 10,
    marginBottom: 5
  },
  coffeeIngredients: {
    marginTop: 5, textAlign: 'justify'
  },
});
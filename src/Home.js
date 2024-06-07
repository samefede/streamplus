import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, StatusBar, SafeAreaView, ScrollView } from "react-native";
import Carrousel from "./components/carrousel/Carrousel.js";
import SearchBar from "./components/searchBar/SearchBar.js";
import { categories } from "./mocks/categories.js";

//ESTE ES EL HOME DE LA APLICACION
//SI SE QUIERE CAMBIAR EL CONTENIDO DE LA PANTALLA PRINCIPAL SE DEBE MODIFICAR ESTE ARCHIVO
const Home = ({ user }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.categoryView}>
        <Text style={styles.category}>{item.category}</Text>
        <Carrousel category={item} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.data}>
        <TouchableOpacity
          style={styles.perfilButton}
          onPress={() => console.log("pressed")}
        >
          <Image
            style={styles.image}
            source={{
              uri: "https://www.pinclipart.com/picdir/middle/496-4968268_profile-icon-png-white-clipart.png",
            }}
          />
        </TouchableOpacity>
        <Text style={styles.welcome}>Welcome {user.name}</Text>
      </View>

      <Text style={styles.title2}>STREAM+</Text>
      {/* <Text style={styles.title}>
        S<Text style={styles.t}>T</Text>REAM<Text style={styles.plus}>+</Text>
      </Text> */}
      <SearchBar />
      <FlatList data={categories} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 50,
    fontFamily: "sans-serif-medium",
    marginBottom: 20,
  },
  title2: {
    color: "white",
    fontSize: 72,
    fontFamily: "Helvetica",
    marginBottom: 20,
    fontWeight: "bold",
  },
  t: {
    color: "#AD92F1",
  },
  plus: {
    color: "#FCA82B",
  },
  category: {
    fontSize: 32,
    alignSelf: "flex-start",
    marginLeft: 20,
    color: "white",
  },
  categoryView: {
    marginBottom: 20,
  },
  movie: {
    width: 60,
    height: 100,
    backgroundColor: "grey",
    borderRadius: 5,
    margin: 14,
  },
  container: {
    flex: 1,
    backgroundColor: "#14111C",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    color: "white",
    fontSize: 50,
    fontFamily: "sans-serif-medium",
    marginBottom: 20,
  },
  t: {
    color: "#AD92F1",
  },
  plus: {
    color: "#FCA82B",
  },
  form: {
    backgroundColor: "#332B47",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  formField: {
    width: "90%",
    marginBottom: 20,
  },
  label: {
    color: "white",
    fontSize: 20,
    fontFamily: "sans-serif-light",
    fontWeight: "400",
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    fontFamily: "sans-serif-light",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#D9D9D9",
  },
  button: {
    backgroundColor: "#AD92F1",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 140,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "sans-serif-medium",
  },
  tyc: {
    color: "black",
    fontSize: 16,
    fontFamily: "sans-serif-medium",

    position: "absolute",
    bottom: 15,
    left: 20,
  },
  wave: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  perfilButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10,
  },
  data: {
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-start",
  },
  welcome: {
    color: "white",
    fontSize: 20,
    fontFamily: "sans-serif-medium",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    },
});

export default Home;

import React, {Component} from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Image,} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Regis = () => {
  const navigation = useNavigation();
    return (
      
      <View style={styles.viewContainer}>
        <Image source={{uri:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjN0M1LUu-0CxWLpawF7ZBPQ_NfDMWYuK7vQStFexO3X8YGMQonRBMZHdmiO0ZPC-FBuEwPjLmwCEdXwzzD7pqJ7PSuLFq1gCeLbBDYWbm6FK_yHEpteTanSPGpfQ96MNmdXN0iAhwUAf3SacubLjdLFS9lwdL9M5Ad6H99BkDWNz4Ukkk3g2lidhY5/s320/dsads.png'}}
            style={styles.imageLogin}
          />
        <View style={styles.viewWrapper}>
          
          <Text style={styles.textTitle}>DAFTAR</Text>
        </View>
        <TextInput placeholder=" Email" style={styles.textInput} />
        <TextInput placeholder=" Password" style={styles.textInput} secureTextEntry />
        <TextInput placeholder=" Re-Password" style={styles.textInput} secureTextEntry />

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View style={styles.viewButton}>
          <Text style={styles.textLogin}>DAFTAR</Text>
        </View>
        </TouchableOpacity>

      </View>
    );
  }
export default Regis

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#62ccb7',
    justifyContent: 'center',
  },
  textInput: {
    width: 200,
    height: 30,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10,
  },
  viewButton: {
    width: 200,
    height: 30,
    alignItems: 'center',
    backgroundColor: '#43B2EC',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 5,
  },
  textLogin: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 15,
  },
  imageLogin: {
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  viewWrapper: {
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
});
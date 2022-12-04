import React, {Component} from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Image,} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
    return (
      
      <View style={styles.viewContainer}>
        <Image source={{uri:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjN0M1LUu-0CxWLpawF7ZBPQ_NfDMWYuK7vQStFexO3X8YGMQonRBMZHdmiO0ZPC-FBuEwPjLmwCEdXwzzD7pqJ7PSuLFq1gCeLbBDYWbm6FK_yHEpteTanSPGpfQ96MNmdXN0iAhwUAf3SacubLjdLFS9lwdL9M5Ad6H99BkDWNz4Ukkk3g2lidhY5/s320/dsads.png'}}
            style={styles.imageLogin}
          />
        <View style={styles.viewWrapper}>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={styles.viewButton}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Regis")}>
        <View style={styles.viewButton}>
          <Text style={styles.textLogin}>REGISTER</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
export default Menu

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
    height: 40,
    alignItems: 'center',
    backgroundColor: '#43B2EC',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 7,
  },
  textLogin: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 15,
  },
  imageLogin: {
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  viewWrapper: {
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#43B2EC',
  },
});
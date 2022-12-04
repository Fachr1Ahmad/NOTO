import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Keyboard, Pressable, Image ,Switch, } from 'react-native'
import React, {useState,  useEffect, useContext} from 'react'
import {firebase} from '../config';
import { Feather, FontAwesome, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from "../config/themeconteks";


const Home = () => {
  const [todos, setTodos] = useState([]);
  const todoRef = firebase.firestore().collection('todos');
  const [addData, setAddData] = useState('');
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const[mode, setMode]=useState(false);

  
  useEffect(() =>{
    todoRef
    .orderBy('createdAt','desc')
    .onSnapshot(
      querySnapshot => {
        const todos =[]
        querySnapshot.forEach((doc)=>{
          const {heading}= doc.data()
          todos.push({
            id: doc.id,
            heading,
          })
        })
        setTodos(todos)
      }
    )
  },[])
  //delete a todo from firestore db
  const deleteTodo = (todos) => {
    todoRef
      .doc(todos.id)
      .delete()
      .then(()=> {
        //pemberitahuan berhasil menghapus
        alert("berhasil menghapus")
      })
      .catch (error => {
        alert(error);
      })
  }
  //add todo
  const addTodo = () => {
    //mengecek jika kita punya todo
    if (addData && addData.length > 0 ){
      //get the timestamp
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        heading : addData,
        createdAt : timestamp
      };
      todoRef
        .add(data)
        .then(() => {
          setAddData(' ');
          //release keyboard
          Keyboard.dismiss();
        })
        .catch ((error) => {
          alert(error);
        })
    }
  };
  return (
    <View style = {[{flex:1, backgroundColor:theme.background }]}>
      <Image source={require('../assets/noto5.png')} 
           style={styles.imageLogin}
          />
      <View style = {styles.container}>
      
          <TextInput
            style ={styles.input}
            placeholder='Isi kegiatan'
            placeholderTextColor= '#aaaaaa'
            onChangeText={(heading) => setAddData(heading)}
            value={addData}
            underlineColorAndroid='transparent'
          />
          <TouchableOpacity style ={styles.button} onPress={addTodo}>
              <Text style ={styles.buttonText}>Save</Text>
          </TouchableOpacity>
      </View>
      <FlatList
          data={todos}
          numColumns={1}
          renderItem={({item}) => (
            <View>
              <Pressable style ={styles.container} >
              <Feather
                  name='edit-3'
                  color='Green'
                  onPress={() => navigation.navigate('Edit', {item})}
                  style ={styles.todoIcon2}/>
              <FontAwesome 
                  name='trash-o'
                  color='red'
                  onPress={() => deleteTodo(item)}
                  style ={styles.todoIcon}
                  />
                  <View style={styles.innerContainer}>
                      <Text style={styles.itemHeading}>
                        {item.heading[0].toUpperCase() + item.heading.slice(1)}
                      </Text>
                  </View>
              </Pressable>
            </View>
            
          )}
      /><View>
        <Octicons
                  name='moon'
                  color='white'
                  style ={styles.todoIcon5}/>
         <Feather
                  name='sun'
                  color='yellow'
                  style ={styles.todoIcon4}/>
          
        <Switch  style={styles.switch} value = {mode} onValueChange = {(value) => { setMode(value); EventRegister.emit("changeTheme",value); }}/>
      </View>
    </View>
  )
}
export default Home 
const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    padding:15,
    borderRadius:10,
    margin:5,
    elevation:10,
    marginHorizontal:10,
    flexDirection: 'row',
    alignItems: 'center',
  },innerContainer:{
    alignItems:'center',
    flexDirection:'column',
    marginLeft:10,
  },itemHeading:{
    fontWeight:'bold',
    fontSize:18,
    marginRight:22,
  },formContainer:{
    flexDirection:'row',
    height:80,
    marginLeft:10,
    marginRight:10,
    marginTop:100,
  },input:{
    height: 48,
    borderRadius:5,
    overflow:'hidden',
    backgroundColor:'#e0e0e0',
    paddingLeft:16,
    flex:1,
    marginRight:5,
  },button:{
    height:47,
    borderRadius:5,
    backgroundColor:'#788eec',
    width:80,
    alignItems:'center',
    justifyContent:'center',
  },buttonText:{
    color:'white',
    fontSize:20,
  },todoIcon:{
    marginTop:5,
    fontSize: 20,
    marginLeft:10,
  },todoIcon2:{
    marginTop:5,
    fontSize: 20,
  },imageLogin: {
    alignSelf: 'center',
    width: 150,
    height: 150,    
  },switch:{
    justifyContent:'center',
    right :'42%',
  },todoIcon4:{
    top : '35%',
    fontSize :30,
    left :'35%',
  },todoIcon5:{
    top : '62%',
    fontSize :30,
    left :'60%',
  }
})
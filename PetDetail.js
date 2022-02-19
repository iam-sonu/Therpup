import React from 'react';
import { Text, View,Image,TouchableOpacity,StyleSheet,TextInput } from 'react-native';

const PetDetail = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#1E1E1E', alignItems: 'center'}}>
       <View
       style={{
       //backgroundColor: 'pink',
       height: 30,
       width: 18,
       marginTop: 70,
       flexDirection:'row',
       marginLeft: 15,
       alignSelf: '',
       }}>
       <TouchableOpacity onPress={()=> navigation.navigate("HireProcess")}>
       <Image
       style={{
        height: 25,
        width: 17,
       }}
       source={require('../src/Assets/images/arrowback.png')}
       />
       </TouchableOpacity>
      <View style={{
       //backgroundColor:'pink',
       height:28,width:98,marginLeft:18,alignItems:'center',justifyContent:'center'}}>
       <Text style={{fontSize:20,fontWeight:'500',color:'#FFFFFFF5'}}>Pet Details</Text>
       </View>
       </View>


        <View style={{
            //backgroundColor:'red',
            height:25,width:80,marginTop:35,marginLeft:15,alignSelf:'',justifyContent:'center'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFFF5'}}>Pet Breed</Text>
        </View>

        <TextInput
        style={style.TextInput}
        placeholder="Select breed"
        placeholderTextColor="#FFFFFFA8"
        autoCapitalize="none"
        autoCorrect={false}
      />


      <View
      style={{position: 'absolute', alignSelf: 'flex-end', marginTop: 208}}>
     <TouchableOpacity>
      <Image
        style={{height: 10, width: 17, marginRight: 30}}
        source={require('../src/Assets/images/down.png')}
      />
      </TouchableOpacity>
    </View>

      <View style={{
          //backgroundColor:'red',
          height:25,width:65,marginTop:40,marginLeft:15,alignSelf:'',justifyContent:'center'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFFF5'}}>Pet Age</Text>
        </View>

        <TextInput
        style={style.TextInput}
        placeholder="Select Age"
        placeholderTextColor="#FFFFFFA8"
        autoCapitalize="none"
        autoCorrect={false}
      />


      <View
      style={{position: 'absolute', alignSelf: 'flex-end', marginTop: 350}}>
     <TouchableOpacity>
      <Image
        style={{height: 10, width: 17, marginRight: 30}}
        source={require('../src/Assets/images/down.png')}
      />
      </TouchableOpacity>
    </View>

      <TouchableOpacity onPress={()=> navigation.navigate("DateTime")}>
      <View style={{backgroundColor:'#F16836',height:45,width:360,marginTop:70,borderRadius:8,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize: 18, fontWeight: '500', color: '#000000'}}>NEXT</Text>
      </View>
      </TouchableOpacity>

      <View style={{
        //backgroundColor:'pink',
        height:5,width:90,marginTop:70,justifyContent:'space-between',flexDirection:'row'}}>
    <Image
    style={{ height: 5,width: 18,}}
    source={require('../src/Assets/images/fillr.png')}
    />
    <Image
    style={{ height: 5,width: 18,}}
    source={require('../src/Assets/images/fillr.png')}
    />
    <Image
    style={{ height: 5,width: 18,}}
    source={require('../src/Assets/images/fillr.png')}
    />
    <Image
    style={{ height: 5,width: 18,}}
    source={require('../src/Assets/images/r.png')}
    />
    </View>




    </View>
  )
}
export default PetDetail;

const style = StyleSheet.create({
    TextInput: {
        height: 48,
        width: 366,
        borderWidth: 0.5,
        borderRadius: 8,
        fontSize: 14,
        fontWeight: '400',
        padding: 19,
        borderColor: '#FFFFFFCC',
        marginTop: 30,
      },

});
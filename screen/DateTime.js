import React from 'react';
import { Text, View,Image,TouchableOpacity } from 'react-native';

const DateTime = ({navigation}) => {
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
    <TouchableOpacity onPress={()=> navigation.navigate("PetDetail")}>
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
    height:28,width:200,marginLeft:18,alignItems:'center',justifyContent:'center'}}>
    <Text style={{fontSize:20,fontWeight:'500',color:'#FFFFFFF5'}}>Date, Time & Address</Text>
    </View>
    </View>


     <View style={{
         //backgroundColor:'red',
         height:25,width:80,marginTop:35,marginLeft:15,alignSelf:'',justifyContent:'center'}}>
     <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFFF5'}}>Date</Text>
     </View>


    </View>
  )
}
export default DateTime;
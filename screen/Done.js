import React from 'react';
import { Text, View,Image,TouchableOpacity } from 'react-native';

const Tracking = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#1E1E1E', alignItems: 'center'}}>
     
    
    <View style={{
        backgroundColor:'red',
        height:160,width:160,marginTop:134}}>
    <Image
    style={{height: 160,width: 160,}}
    source={require('../src/Assets/images/done.png')}
    />
    </View>

    <Text style={{fontSize:26,fontWeight:'500',color:'#FFFFFF',marginTop:30}}>Done</Text>


    <View style={{
        //backgroundColor:'red',
        height:85,width:360,marginTop:12,alignItems:'center',justifyContent:'center'}}>

        <Text style={{fontSize:16,fontWeight:'400',color:'#FFFFFFB2',letterSpacing:1,lineHeight:30,}}>Your booking confirmed for more details,</Text>
        <Text style={{fontSize:16,fontWeight:'400',color:'#FFFFFFB2',letterSpacing:1,lineHeight:30}}>check your booking page or just skip</Text>
   
    </View>


    <TouchableOpacity onPress={()=> navigation.navigate("Tracking")}>
    <View style={{backgroundColor:'#F16836',height:45,width:360,marginTop:60,borderRadius:8,alignItems:'center',justifyContent:'center'}}>
    <Text style={{fontSize: 18, fontWeight: '500', color: '#000000'}}>Bookings</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate("Vendor")}>
    <Text style={{fontSize:16,fontWeight:'400',color:'#FFFFFF99',marginTop:35}}>Back To Home</Text>
    </TouchableOpacity>


    </View>
  )
}
export default Tracking;
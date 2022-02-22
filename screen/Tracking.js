import React from 'react';
import { Text, View,Image,TouchableOpacity } from 'react-native';

const Tracking = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#1E1E1E', alignItems: 'center'}}>
      
     <Text style={{fontSize:18,fontWeight:'500',color:'#FFFFFFF5',marginTop:65}}>Walking now</Text>


     
     <View style={{position:'absolute',alignSelf:'',marginTop:65,marginLeft:340,}}>
     <TouchableOpacity onPress={()=> navigation.navigate("Vendor")}>
     <Image
        style={{height: 18,width: 18,}}
        source={require('../src/Assets/images/close.png')}
        />
        </TouchableOpacity>
     </View>
     


      <View style={{
        backgroundColor:'#373737',
        height:375,width:350,marginTop:60,alignItems:'center',justifyContent:'center',borderRadius:8}}>
        <Image
        style={{height: 345,width: 325,borderRadius:8}}
        source={require('../src/Assets/images/mape.png')}
        />
      </View>


      <View style={{
        //backgroundColor:'#373737',
        height:25,width:350,marginTop:15,alignItems:'center',flexDirection:'row'}}>
        <Text style={{fontSize:14,fontWeight:'400',color:'#FF8C62'}}>30 minutes </Text>
        <Text style={{fontSize:14,fontWeight:'400',color:'#FFFFFF99'}}>(0.08 miles)</Text>
      </View> 

      <View style={{
        //backgroundColor:'#373737',
        height:25,width:350,marginTop:20,justifyContent:'center'}}>
        <Text style={{fontSize:12,fontWeight:'400',color:'#FFFFFFB2'}}>Now </Text>
      </View> 


      <View style={{
        //backgroundColor:'#373737',
        height:25,width:350,justifyContent:'center',}}>
        <Text style={{fontSize:14,fontWeight:'400',color:'#FFFFFFCC'}}>1825, Jawaharnagar, shivajinagar, Pune </Text>
      </View> 




      <View style={{
        //backgroundColor:'red',
        height:50,width:350,marginTop:60,alignItems:'center',justifyContent:'space-between',borderRadius:8,flexDirection:'row'}}>

         <View style={{
            backgroundColor:'#3C3C3C',
            height:50,width:165,alignItems:'center',justifyContent:'center',borderRadius:8,flexDirection:'row'}}>
            <Image style={{height: 17,width: 17,}}
            source={require('../src/Assets/images/call.png')}
            />
           <Text style={{fontSize:14,fontWeight:'400',color:'#FFFFFFCC',marginLeft:10}}>+81 235 6325 20</Text>
          </View> 


          <View style={{
            backgroundColor:'#3C3C3C',
            height:50,width:165,alignItems:'center',justifyContent:'center',borderRadius:8,flexDirection:'row'}}>
            <Image style={{height: 19,width: 14,}}
            source={require('../src/Assets/images/place2.png')}
            />
           <Text style={{fontSize:14,fontWeight:'400',color:'#FFFFFFCC',marginLeft:25}}>Location</Text>
          </View> 

      </View> 






    </View>
  )
}
export default Tracking;
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
         height:25,width:80,marginTop:45,marginLeft:15,alignSelf:'',justifyContent:'center'}}>
         <TouchableOpacity onPress={()=> navigation.navigate("DateTimePicker")}>
         <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFFF5'}}>Date</Text>
         </TouchableOpacity>
     </View>
     
     <View style={{
         //backgroundColor:'red',
         height:48,width:360,marginTop:16,flexDirection:"row",justifyContent:'space-between'}}>

     <View style={{
        // backgroundColor:'grey',
         height:48,width:170,flexDirection:"row",borderWidth:0.5,borderColor:'#FFFFFFCC',borderRadius:8,alignItems:"center",justifyContent:"space-between"}}>
         <Text style={{fontSize:14,fontWeight:"400",color:'#FFFFFFA8',marginLeft:12}}>Start date</Text>

         <View style={{
             //backgroundColor:'red',
             height:10,width:17,marginRight:12}}>
          <Image
          style={{height: 10, width: 17,}}
          source={require('../src/Assets/images/down.png')}
          />
         </View>
     </View>
     

     <View style={{
         //backgroundColor:'grey',
         height:48,width:170,marginTop:0,flexDirection:"row",borderWidth:0.5,borderColor:'#FFFFFFCC',borderRadius:8,alignItems:'center',justifyContent:'space-between'}}>
         <Text style={{fontSize:14,fontWeight:"400",color:'#FFFFFFA8',marginLeft:12}}>End date</Text>
         <View style={{
             //backgroundColor:'red',
             height:10,width:17,marginRight:12}}>
          <Image
          style={{height: 10, width: 17,}}
          source={require('../src/Assets/images/down.png')}
          />
         </View>
     </View>
     </View>


     <View style={{
        //backgroundColor:'red',
        height:25,width:80,marginTop:45,marginLeft:15,alignSelf:'',justifyContent:'center'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFFF5'}}>Time</Text>   
    </View>


    <View style={{
        // backgroundColor:'grey',
         height:48,width:360,flexDirection:"row",borderWidth:0.5,borderColor:'#FFFFFFCC',borderRadius:8,alignItems:"center",justifyContent:"space-between",marginTop:16,}}>
         <Text style={{fontSize:14,fontWeight:"400",color:'#FFFFFFA8',marginLeft:12}}>Start date</Text>

         <View style={{
             //backgroundColor:'red',
             height:10,width:17,marginRight:12}}>
          <Image
          style={{height: 10, width: 17,}}
          source={require('../src/Assets/images/down.png')}
          />
         </View>
     </View>

     <View style={{
        //backgroundColor:'red',
        height:25,width:260,marginTop:45,marginLeft:15,alignSelf:'',justifyContent:'center'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFFF5'}}>Where do you need the services?</Text>   
    </View>


    <View style={{
        // backgroundColor:'grey',
         height:48,width:360,flexDirection:"row",borderWidth:0.5,borderColor:'#FFFFFFCC',borderRadius:8,alignItems:"center",justifyContent:"space-between",marginTop:16,}}>
         <Text style={{fontSize:14,fontWeight:"400",color:'#FFFFFFA8',marginLeft:12}}>Enter location</Text>

         <View style={{
             //backgroundColor:'red',
             height:10,width:17,marginRight:12}}>
          <Image
          style={{height: 10, width: 17,}}
          source={require('../src/Assets/images/down.png')}
          />
         </View>
     </View>

     <TouchableOpacity onPress={()=> navigation.navigate("PaymentDetail")}>
     <View style={{backgroundColor:'#F16836',height:45,width:360,marginTop:80,borderRadius:8,alignItems:'center',justifyContent:'center'}}>
     <Text style={{fontSize: 18, fontWeight: '500', color: '#000000'}}>DONE</Text>
     </View>
     </TouchableOpacity>

     <View style={{
        //backgroundColor:'pink',
        height:5,width:90,marginTop:100,justifyContent:'space-between',flexDirection:'row'}}>
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
    source={require('../src/Assets/images/fillr.png')}
    />
    </View>


     
    </View>
  )
}
export default DateTime;
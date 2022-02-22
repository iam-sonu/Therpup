import React from 'react';
import { Text, View,TouchableOpacity ,Image} from 'react-native';

const HireProcess = ({navigation}) => {
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
    <TouchableOpacity onPress={()=> navigation.navigate("Hire")}>
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
   height:28,width:80,marginLeft:18,alignItems:'center',justifyContent:'center'}}>
   <Text style={{fontSize:20,fontWeight:'500',color:'#FFFFFFF5'}}>Pet Type</Text>
   </View>
  </View>

  <TouchableOpacity onPress={()=> navigation.navigate("PetDetail")}>
  <View style={{
    // backgroundColor:'grey',
      height:150,width:120,justifyContent:'center',alignItems:'center',marginTop:52}}>
   <View style={{
       //backgroundColor:'pink',
   height:120,width:120,}}>
   <Image
   style={{
     height: 120,
     width: 120,
     borderRadius:120
   }}
   source={require('../src/Assets/images/dog.png')}
 />
   </View>
    <View style={{
        //backgroundColor:'pink',
    height:22,width:55,justifyContent:'center',alignItems:'center',marginTop:10}}>
    <Text style={{fontSize:14,fontWeight:'400',color:'#FFFFFFE5'}}>Dog</Text>
    </View>
 </View>
 </TouchableOpacity>

 <TouchableOpacity onPress={()=> navigation.navigate("PetDetail")}>
 <View style={{
    // backgroundColor:'grey',
      height:150,width:120,justifyContent:'center',alignItems:'center',marginTop:52}}>
   <View style={{
       //backgroundColor:'pink',
   height:120,width:120,}}>
   <Image
   style={{
     height: 120,
     width: 120,
     borderRadius:120
   }}
   source={require('../src/Assets/images/cat.png')}
 />
   </View>
    <View style={{
        //backgroundColor:'pink',
    height:22,width:55,justifyContent:'center',alignItems:'center',marginTop:10}}>
    <Text style={{fontSize:14,fontWeight:'400',color:'#FFFFFFE5'}}>Cat</Text>
    </View>
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
source={require('../src/Assets/images/r.png')}
/>
<Image
style={{ height: 5,width: 18,}}
source={require('../src/Assets/images/r.png')}
/>
</View>

      
    </View>
  )
}
export default HireProcess;
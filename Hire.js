import React from 'react';
import { Text, View,Image,TouchableOpacity } from 'react-native';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

const Hire = ({navigation}) => {
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
        <TouchableOpacity onPress={()=> navigation.navigate("Detail")}>
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
       <Text style={{fontSize:20,fontWeight:'500',color:'#FFFFFFF5'}}>Services</Text>
       </View>
      </View>

      <View style={{
          //backgroundColor:'red',
            height:150,width:260,marginTop:52,flexDirection:'row',justifyContent:'space-between'}}>
        
        <TouchableOpacity onPress={()=> navigation.navigate("HireProcess")}>
            <View style={{
           // backgroundColor:'grey',
             height:150,width:120,justifyContent:'center',alignItems:'center'}}>
          <View style={{
              //backgroundColor:'pink',
          height:120,width:120,}}>
          <Image
          style={{
            height: 120,
            width: 120,
            borderRadius:120
          }}
          source={require('../src/Assets/images/image6.png')}
        />
          </View>
           <View style={{
               //backgroundColor:'pink',
           height:22,width:55,justifyContent:'center',alignItems:'center',marginTop:5}}>
           <Text style={{fontSize:14,fontWeight:'400',color:'#FFFFFFE5'}}>Walking</Text>
           </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate("HireProcess")}>
      <View style={{
          //backgroundColor:'grey',
          height:150,width:120,justifyContent:'center',alignItems:'center'}}>
      <View style={{
          //backgroundColor:'pink',
          height:120,width:120,justifyContent:'center',alignItems:'center'}}>
      <Image
          style={{
            height: 120,
            width: 120,
            borderRadius:120
          }}
          source={require('../src/Assets/images/image7.png')}
        />
          </View>
           <View style={{
               //backgroundColor:'pink',
               height:22,width:55,justifyContent:'center',alignItems:'center',marginTop:5}}>
           <Text style={{fontSize:14,fontWeight:'400',color:'#FFFFFFE5'}}>Training</Text>
           </View>
      </View>
      </TouchableOpacity>
      </View>

      <View style={{
          //backgroundColor:'red',
          height:150,width:260,marginTop:65,flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity onPress={()=> navigation.navigate("HireProcess")}>
        <View style={{
           // backgroundColor:'grey',
            height:150,width:120,justifyContent:'center',alignItems:'center'}}>
          <View style={{
              //backgroundColor:'pink',
              height:120,width:120,justifyContent:'center',alignItems:'center'}}>
              <Image
          style={{
            height: 120,
            width: 120,
            borderRadius:120
          }}
          source={require('../src/Assets/images/image8.png')}
        />
          </View>
           <View style={{
               //backgroundColor:'pink',
               height:22,width:55,justifyContent:'center',alignItems:'center',marginTop:5}}>
           <Text style={{fontSize:14,fontWeight:'400',color:'#FFFFFFE5'}}>Grooming</Text>
           </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate("HireProcess")}>
      <View style={{
          //backgroundColor:'grey',
          height:150,width:120,justifyContent:'center',alignItems:'center'}}>
      <View style={{
          //backgroundColor:'pink',
          height:120,width:120,justifyContent:'center',alignItems:'center'}}>
          <Image
          style={{
            height: 120,
            width: 120,
            borderRadius:120
          }}
          source={require('../src/Assets/images/image9.png')}
        />
          </View>
           <View style={{
               //backgroundColor:'pink',
               height:22,width:55,justifyContent:'center',alignItems:'center',marginTop:5}}>
           <Text style={{fontSize:14,fontWeight:'400',color:'#FFFFFFE5'}}>Boarding</Text>
           </View>
      </View>
      </TouchableOpacity>
      </View>
      

      <View style={{
          //backgroundColor:'pink',
          height:5,width:90,marginTop:70,justifyContent:'space-between',flexDirection:'row'}}>
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
    <Image
      style={{ height: 5,width: 18,}}
      source={require('../src/Assets/images/r.png')}
    />
      </View>
      
    </View>
  )
}
export default Hire;
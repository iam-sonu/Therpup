import React from 'react';
import { Text, View,Image,TouchableOpacity } from 'react-native';

const PaymentDetail = ({navigation}) => {
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
    <TouchableOpacity onPress={()=> navigation.navigate("DateTime")}>
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
    height:28,width:150,marginLeft:18,alignItems:'center',justifyContent:'center'}}>
    <Text style={{fontSize:20,fontWeight:'500',color:'#FFFFFFF5'}}>Payment Details</Text>
    </View>
    </View>


    <View style={{backgroundColor:'#3C3C3C',height:265,width:360,marginTop:40,borderRadius:8,}}>

    <View style={{
        //backgroundColor:'red',
        height:62,width:360,marginTop:15,alignItems:'center',flexDirection:'row'}}>

        <View style={{backgroundColor:'grey',height:60,width:60,borderRadius:60,margin:20}}>
        <Image
    style={{
     height: 60,
     width: 60,
     borderRadius:60
    }}
    source={require('../src/Assets/images/dp.png')}
    />
        </View>

        <Text style={{fontSize: 16, fontWeight: '500', color: '#FFFFFFF5'}}>Andrew Smith</Text>

    </View>

    <Text style={{fontSize: 12, fontWeight: '400', color: '#FFFFFFCC',marginTop:30,marginLeft:20}}>Start Date:   22 Jan 2021</Text>
    <Text style={{fontSize: 12, fontWeight: '400', color: '#FFFFFFCC',margin:20}}>End Date:     26 Jan 2021</Text>
    <Text style={{fontSize: 12, fontWeight: '400', color: '#FFFFFFCC',marginLeft:20}}>Time:            10 am</Text>
    <Text style={{fontSize: 12, fontWeight: '400', color: '#FFFFFFCC',margin:20}}>Address:       Jawaharnagar,Shivajinagar,Pune </Text>


    </View>



    <View style={{backgroundColor:'#3C3C3C',height:160,width:360,marginTop:25,borderRadius:8,}}>
    <Text style={{fontSize: 12, fontWeight: '500', color: '#FFFFFFCC',marginLeft:20,marginTop:20}}>PRICE DETAILS</Text>
   
    <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between'}}>
    <Text style={{fontSize: 10, fontWeight: '400', color: '#FFFFFFCC',marginLeft:20}}>Vendor Charges</Text>
    <Text style={{fontSize: 10, fontWeight: '400', color: '#FFFFFFCC',marginRight:20}}>$40</Text>
    </View>

    <View style={{flexDirection:'row',marginTop:12,justifyContent:'space-between'}}>
    <Text style={{fontSize: 10, fontWeight: '400', color: '#FFFFFFCC',marginLeft:20}}>Coupen Discount</Text>
    <Text style={{fontSize: 10, fontWeight: '400', color: '#F16836',marginRight:20}}>Apply Coupon</Text>
    </View>

        <View style={{borderBottomColor:'#FFFFFF1A',borderBottomWidth:0.5,width:322,alignSelf:'center',marginTop:15}}/>

    <View style={{flexDirection:'row',marginTop:12,justifyContent:'space-between'}}>
    <Text style={{fontSize: 10, fontWeight: '500', color: '#FFFFFFCC',marginLeft:20}}>Total Amount</Text>
    <Text style={{fontSize: 10, fontWeight: '400', color: '#FFFFFFCC',marginRight:20}}>$40</Text>
    </View>
     
   
    </View>



    <TouchableOpacity onPress={()=> navigation.navigate("Payment")}>
    <View style={{backgroundColor:'#F16836',height:45,width:360,marginTop:80,borderRadius:8,alignItems:'center',justifyContent:'center'}}>
    <Text style={{fontSize: 18, fontWeight: '500', color: '#000000'}}>Pay Now</Text>
    </View>
    </TouchableOpacity>

    </View>
  )
}
export default PaymentDetail;
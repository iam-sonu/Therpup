import React from 'react';
import { Text, View ,Image,TouchableOpacity} from 'react-native';

const Payment = ({navigation}) => {
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
    <TouchableOpacity onPress={()=> navigation.navigate("PaymentDetail")}>
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
    <Text style={{fontSize:20,fontWeight:'500',color:'#FFFFFFF5'}}>Payment</Text>
    </View>
    </View>


    <TouchableOpacity onPress={()=> navigation.navigate("Done")}>
    <View style={{backgroundColor:'#3C3C3C',height:65,width:360,marginTop:35,alignItems:'center',flexDirection:'row',borderRadius:8}}>

        <View style={{height:30,width:35,margin:20}}>
          <Image
          style={{height: 30,width: 35,}}
          source={require('../src/Assets/images/card.png')}
          />
        </View>
        <Text style={{fontSize: 16, fontWeight: '500', color: '#FFFFFFE5'}}>CREDIT/DEBIT CARD</Text>
    </View>
    </TouchableOpacity>


    <View style={{backgroundColor:'#3C3C3C',height:65,width:360,marginTop:25,alignItems:'center',flexDirection:'row',borderRadius:8}}>

        <View style={{height:30,width:35,margin:20,alignItems:'center',justifyContent:'center'}}>
          <Image
          style={{height: 24,width: 35,}}
          source={require('../src/Assets/images/upi.png')}
          />
        </View>
        <Text style={{fontSize: 16, fontWeight: '500', color: '#FFFFFFE5'}}>PHONEPE/GPAY/BHIM UPI</Text>
    </View>


    <View style={{backgroundColor:'#3C3C3C',height:65,width:360,marginTop:25,alignItems:'center',flexDirection:'row',borderRadius:8}}>

    <View style={{height:30,width:35,margin:20,alignItems:'center',justifyContent:'center'}}>
      <Image
      style={{height: 30,width: 35,}}
      source={require('../src/Assets/images/bank.png')}
      />
    </View>
    <Text style={{fontSize: 16, fontWeight: '500', color: '#FFFFFFE5'}}>NET BANKING</Text>
</View>





    </View>
  )
}
export default Payment;
import React from 'react';
import {Text, View, Image,TouchableOpacity,ScrollView} from 'react-native';


const Details = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#1E1E1E', alignItems: 'center'}}>
      <View
        style={{
          //backgroundColor: 'pink',
          height: 30,
          width: 18,
          marginTop: 70,
          marginLeft: 15,
          alignSelf: '',
        }}>
        <TouchableOpacity onPress={()=> navigation.navigate("Vendor")}>
        <Image
          style={{
            height: 28,
            width: 17,
          }}
          source={require('../src/Assets/images/arrowback.png')}
        />
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: 'pink',
          height: 255,
          width: 360,
          marginTop: 20,
          borderRadius: 8,
        }}>
        <Image
          style={{
            height: 255,
            width: 360,
            borderRadius: 8,
          }}
          source={require('../src/Assets/images/fullimage1.png')}
        />
        <View
          style={{
            //backgroundColor: 'red',
            height: 26,
            width: 26,
            marginTop: 20,
            marginLeft: 320,
            position: 'absolute',
          }}>
          <Image
            style={{
              height: 24,
              width: 24,
            }}
            source={require('../src/Assets/images/save.png')}
          />
        </View>

        <View
          style={{
            backgroundColor: '#3C3C3C',
            height: 79,
            width: 327,
            marginTop: 215,
            marginLeft: 20,
            position: 'absolute',
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{height: 24, width: 117, marginLeft: 15}}>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#FFFFFFF5'}}>
              Andrew Smith
            </Text>
          </View>

          <View
            style={{
              // backgroundColor: 'red',
              height: 50,
              width: 117,
              marginLeft: 65,
              alignItems: 'center',
            }}>
            <View
              style={{
                // backgroundColor: 'grey',
                height: 20,
                width: 75,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 10,
                  width: 70,
                }}
                source={require('../src/Assets/images/review.png')}
              />
            </View>

            <View
              style={{
                //backgroundColor: 'grey',
                height: 20,
                width: 90,
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '500',
                  color: '#FFFFFFF5',
                  padding: 4,
                }}>
                3.0
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '300',
                  color: '#FFFFFFB2',
                  padding: 3.2,
                }}>
                (12 reviews)
              </Text>
            </View>
          </View>
        </View>
      </View>


      <View
        style={{
          //backgroundColor: 'red',
          height: 370,
          width: 360,
          marginTop: 72,
        }}>
        <View style={{
            //backgroundColor: 'pink',
            height: 22, width: 132}}>
          <Text style={{fontSize: 16, fontWeight: '500', color: '#FFFFFFF5'}}>
            ABOUT ANDREW
          </Text>
        </View>
        <View style={{
            //backgroundColor:'grey',
            height:60,width:327,marginTop:8,}}>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#FFFFFFCC'}}>
        I'm a pet owner and animal lover, I've worked with many animal and am comfortable grooming, walking and playing with them.
        </Text>
        </View>

        <View style={{
           // backgroundColor:'grey',
            height:22,width:100,marginTop:20}}>
        <Text style={{fontSize: 15, fontWeight: '500', color: '#FFFFFFF5'}}>REVIEWS (12)</Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{
            //backgroundColor:'pink',
            height:153,width:600,marginTop:15,flexDirection:'row'}}>

             <View style={{backgroundColor:'#3C3C3C',height:153,width:152,borderRadius:8}}>
              <View style={{
               // backgroundColor:'red',
                height:37,width:127,marginTop:8,marginLeft:12,justifyContent:'center'}}>
               <Text style={{fontSize: 11, fontWeight: '500', color: '#FFFFFFE5'}}>My dog loved Andrew! Highly recommended</Text>
              </View>
              <View style={{
                //backgroundColor:'red',
                 height:10,width:70,marginTop:8,marginLeft:15}}>
               <Image
              style={{
                height: 8,
                width: 58,
              }}
              source={require('../src/Assets/images/review.png')}
              />
              </View>
              <View style={{
                  //backgroundColor:'red',
                    height:54,width:127,marginTop:8,marginLeft:12}}>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#FFFFFFCC'}}>Andrew is very kind. Rufus loved him from the first moment.</Text>
              </View>

             </View>


             <View style={{backgroundColor:'#3C3C3C',height:153,width:152,borderRadius:8,marginLeft:12}}>
             <View style={{
              // backgroundColor:'red',
               height:37,width:127,marginTop:8,marginLeft:12,justifyContent:'center'}}>
              <Text style={{fontSize: 11, fontWeight: '500', color: '#FFFFFFE5'}}>My dog loved Andrew! Highly recommended</Text>
             </View>
             <View style={{
               //backgroundColor:'red',
                height:10,width:70,marginTop:8,marginLeft:15}}>
              <Image
             style={{
               height: 8,
               width: 58,
             }}
             source={require('../src/Assets/images/review.png')}
             />
             </View>
             <View style={{
                 //backgroundColor:'red',
                   height:54,width:127,marginTop:8,marginLeft:12}}>
             <Text style={{fontSize: 12, fontWeight: '400', color: '#FFFFFFCC'}}>Andrew is very kind. Rufus loved him from the first moment.</Text>
             </View>

            </View> 


            <View style={{backgroundColor:'#3C3C3C',height:153,width:152,borderRadius:8,marginLeft:12}}>
              <View style={{
               // backgroundColor:'red',
                height:37,width:127,marginTop:8,marginLeft:12,justifyContent:'center'}}>
               <Text style={{fontSize: 11, fontWeight: '500', color: '#FFFFFFE5'}}>My dog loved Andrew! Highly recommended</Text>
              </View>
              <View style={{
                //backgroundColor:'red',
                 height:10,width:70,marginTop:8,marginLeft:15}}>
               <Image
              style={{
                height: 8,
                width: 58,
              }}
              source={require('../src/Assets/images/review.png')}
              />
              </View>
              <View style={{
                  //backgroundColor:'red',
                    height:54,width:127,marginTop:8,marginLeft:12}}>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#FFFFFFCC'}}>Andrew is very kind. Rufus loved him from the first moment.</Text>
              </View>

             </View>


      </View>
      </ScrollView>

      <TouchableOpacity onPress={()=> navigation.navigate("Hire")}>
      <View style={{backgroundColor:'#F16836',height:45,width:360,marginTop:24,borderRadius:8,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize: 18, fontWeight: '500', color: '#000000'}}>HIRE</Text>
      </View>
      </TouchableOpacity>

      </View>
      
      
    </View>
  );
};

export default Details;

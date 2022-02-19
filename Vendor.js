import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const Vendor = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#1E1E1E', alignItems: 'center'}}>
      <View
        style={{
          height: 32,
          width: 352,
          marginTop: 66,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{height: 27, width: 78}}>
          <Text style={{fontSize: 18, fontWeight: '500', color: '#FFFFFFF5'}}>
            Vendors
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#373737',
            height: 38,
            width: 148,
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 9,
          }}>
          <TouchableOpacity>
            <View
              style={{
                height: 28,
                width: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 19, width: 14}}
                source={require('./src/Assets/images/place.png')}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 17.7,
              width: 105,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 10, fontWeight: '400', color: '#FFFFFFCC'}}>
              Shivajinagar,Pune
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
         //backgroundColor: 'red',
          width: 352,
          height: 181,
          marginTop: 22,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{width: 170, height: 181}}>
          <View style={{height: 124, width: 170}}>
            <Image
              style={{
                height: 124,
                width: 170,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
              source={require('./src/Assets/images/image1.png')}
            />
          </View>
          <View
            style={{
              height: 57,
              width: 170,
              backgroundColor: '#3C3C3C',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#FFFFFFF5'}}>
              Andrew Smith
            </Text>
            <View
              style={{
                height: 10,
                width: 60,
                marginTop: 7,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/blankstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/blankstar.png')}
              />
            </View>
          </View>
        </View>

        <View style={{ width: 170, height: 181}}>
        <View style={{height: 124, width: 170}}>
            <Image
              style={{
                height: 124,
                width: 170,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
              source={require('./src/Assets/images/image1.png')}
            />
          </View>
          <View
            style={{
              height: 57,
              width: 170,
              backgroundColor: '#3C3C3C',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#FFFFFFF5'}}>
              Andrew Smith
            </Text>
            <View
              style={{
                height: 10,
                width: 60,
                marginTop: 7,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/blankstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/blankstar.png')}
              />
            </View>
          </View>
          
        </View>
        


      </View>

      <View
        style={{
          //backgroundColor: 'red',
          width: 352,
          height: 181,
          marginTop: 22,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{width: 170, height: 181}}>
          <View style={{height: 124, width: 170}}>
            <Image
              style={{
                height: 124,
                width: 170,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
              source={require('./src/Assets/images/image1.png')}
            />
          </View>
          <View
            style={{
              height: 57,
              width: 170,
              backgroundColor: '#3C3C3C',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#FFFFFFF5'}}>
              Andrew Smith
            </Text>
            <View
              style={{
                height: 10,
                width: 60,
                marginTop: 7,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/blankstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/blankstar.png')}
              />
            </View>
          </View>
        </View>

        <View style={{ width: 170, height: 181}}>
        <View style={{height: 124, width: 170}}>
            <Image
              style={{
                height: 124,
                width: 170,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
              source={require('./src/Assets/images/image1.png')}
            />
          </View>
          <View
            style={{
              height: 57,
              width: 170,
              backgroundColor: '#3C3C3C',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#FFFFFFF5'}}>
              Andrew Smith
            </Text>
            <View
              style={{
                height: 10,
                width: 60,
                marginTop: 7,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/blankstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/blankstar.png')}
              />
            </View>
          </View>
          
        </View>
        


      </View>

      <View
        style={{
         // backgroundColor: 'red',
          width: 352,
          height: 181,
          marginTop: 22,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{width: 170, height: 181}}>
          <View style={{height: 124, width: 170}}>
            <Image
              style={{
                height: 124,
                width: 170,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
              source={require('./src/Assets/images/image1.png')}
            />
          </View>
          <View
            style={{
              height: 57,
              width: 170,
              backgroundColor: '#3C3C3C',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#FFFFFFF5'}}>
              Andrew Smith
            </Text>
            <View
              style={{
                height: 10,
                width: 60,
                marginTop: 7,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/blankstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/blankstar.png')}
              />
            </View>
          </View>
        </View>

        <View style={{ width: 170, height: 181}}>
        <View style={{height: 124, width: 170}}>
            <Image
              style={{
                height: 124,
                width: 170,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
              source={require('./src/Assets/images/image1.png')}
            />
          </View>
          <View
            style={{
              height: 57,
              width: 170,
              backgroundColor: '#3C3C3C',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#FFFFFFF5'}}>
              Andrew Smith
            </Text>
            <View
              style={{
                height: 10,
                width: 60,
                marginTop: 7,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/blankstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/blankstar.png')}
              />
            </View>
          </View>
          
        </View>
        


      </View>

      <View
        style={{
         // backgroundColor: 'red',
          width: 352,
          height: 181,
          marginTop: 22,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{width: 170, height: 181}}>
          <View style={{height: 124, width: 170}}>
            <Image
              style={{
                height: 124,
                width: 170,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
              source={require('./src/Assets/images/image1.png')}
            />
          </View>
          <View
            style={{
              height: 57,
              width: 170,
              backgroundColor: '#3C3C3C',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#FFFFFFF5'}}>
              Andrew Smith
            </Text>
            <View
              style={{
                height: 10,
                width: 60,
                marginTop: 7,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/blankstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/blankstar.png')}
              />
            </View>
          </View>
        </View>

        <View style={{ width: 170, height: 181}}>
        <View style={{height: 124, width: 170}}>
            <Image
              style={{
                height: 124,
                width: 170,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
              source={require('./src/Assets/images/image1.png')}
            />
          </View>
          <View
            style={{
              height: 57,
              width: 170,
              backgroundColor: '#3C3C3C',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#FFFFFFF5'}}>
              Andrew Smith
            </Text>
            <View
              style={{
                height: 10,
                width: 60,
                marginTop: 7,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/fillstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/blankstar.png')}
              />
              <Image
                style={{
                  height: 10,
                  width: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
                source={require('./src/Assets/images/blankstar.png')}
              />
            </View>
          </View>
          
        </View>
        


      </View>
    </View>
  );
};

export default Vendor;

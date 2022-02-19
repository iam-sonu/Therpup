import React from 'react';
import {Text, View, Image, TextInput, StyleSheet,TouchableOpacity} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#1E1E1E', alignItems: 'center'}}>
      <View style={{height: 113, width: 158, marginTop: 113}}>
        <Image
          style={{height: 113, width: 158}}
          source={require('./src/Assets/images/logo.png')}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          color: '#FFFFFFF5',
          marginTop: 21,
          fontWeight: '600',
        }}>
        LOGIN
      </Text>
      <TextInput
        style={style.TextInput}
        placeholder="Email"
        placeholderTextColor="#FFFFFFA8"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={style.TextInput}
        placeholder="Password"
        placeholderTextColor="#FFFFFFA8"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View
        style={{position: 'absolute', alignSelf: 'flex-end', marginTop: 397}}>
       <TouchableOpacity>
        <Image
          style={{height: 14, width: 21, marginRight: 19}}
          source={require('./src/Assets/images/eye.png')}
        />
        </TouchableOpacity>
      </View>

      
      <View
        style={{
          height: 18,
          width: 182,
          alignSelf: 'flex-end',
          marginRight: 14,
          marginTop: 14,
        }}>
        <TouchableOpacity>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#FFFFFFA8',
            marginLeft: 50,
          }}>
          Forgot your password?
        </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={()=> navigation.navigate("Vendor")}>
      <View
        style={{
          backgroundColor: '#F16836',
          height: 48,
          width: 366,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 26,
        }}>
        <Text style={{fontSize: 18, fontWeight: '400'}}>Login</Text>
      </View>
      </TouchableOpacity>

      <View
        style={{
          height: 18,
          width: 182,
          marginTop: 44,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 12, fontWeight: '300', color: '#FFFFFF99'}}>
          Or connect using
        </Text>
      </View>

      <View
        style={{
          height: 34,
          width: 100,
          marginTop: 28,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>

        <TouchableOpacity>
        <View
          style={{
            height: 34,
            width: 34,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 35, width: 35}}
            source={require('./src/Assets/images/fb.png')}
          />
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View
          style={{
            height: 34,
            width: 34,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 30, width: 30}}
            source={require('./src/Assets/images/google.png')}
          />
        </View>
        </TouchableOpacity>
      </View>

      <View
        style={{height: 30, width: 230, marginTop: 66, flexDirection: 'row'}}>
        <View style={{height: 30, width: 137, justifyContent: 'center'}}>
          <Text style={{fontSize: 12, fontWeight: '400', color: '#FFFFFF99'}}>
            Don't have an account?
          </Text>
        </View>

        <View style={{height: 30, width: 93, justifyContent: 'center'}}>
        <TouchableOpacity>
          <Text style={{fontSize: 12, fontWeight: '400', color: '#F16836'}}>
            Register Now
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  TextInput: {
    height: 48,
    width: 366,
    borderWidth: 0.5,
    borderRadius: 8,
    fontSize: 14,
    fontWeight: '400',
    padding: 19,
    borderColor: '#FFFFFFCC',
    marginTop: 30,
  },
});

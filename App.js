import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './screen/home'
import Vendor from './screen/Vendor'
import Detail from './screen/Details'
import Hire from './screen/Hire'
import HireProcess from './screen/HireProcess'
import PetDetail from './screen/PetDetail'
import DateTime from './screen/DateTime'
import DateTimePicker from './screen/DateTimePicker'
import PaymentDetail from './screen/PaymentDetail'
import Payment from './screen/Payment'
import Done from './screen/Done'
import Tracking from './screen/Tracking'

const stack= createStackNavigator();

const App=()=>{
  return(
    <NavigationContainer>
    <stack.Navigator initialRouteName='home'>
    <stack.Screen name='home' component={home} options={{ headerShown: false }}/>
    <stack.Screen name='Vendor' component={Vendor} options={{ headerShown: false }}/>
    <stack.Screen name='Detail' component={Detail} options={{ headerShown: false }}/>
    <stack.Screen name='Hire' component={Hire} options={{ headerShown: false }}/>
    <stack.Screen name='HireProcess' component={HireProcess} options={{ headerShown: false }}/>
    <stack.Screen name='PetDetail' component={PetDetail} options={{ headerShown: false }}/>
    <stack.Screen name='DateTime' component={DateTime} options={{ headerShown: false }}/>
    <stack.Screen name='DateTimePicker' component={DateTimePicker} options={{ headerShown: false }}/>
    <stack.Screen name='PaymentDetail' component={PaymentDetail} options={{ headerShown: false }}/>
    <stack.Screen name='Payment' component={Payment} options={{ headerShown: false }}/>
    <stack.Screen name='Done' component={Done} options={{ headerShown: false }}/>
    <stack.Screen name='Tracking' component={Tracking} options={{ headerShown: false }}/>
    </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
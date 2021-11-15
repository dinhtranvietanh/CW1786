import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Index from './Add/index'
import CreateHome from './Add/create'
import DetailRentalz from './Add/detailrentalz'
import Showrentalz from './Add/showrentalz'
import UpdateRentailz from './Add/updaterentalz'
import Searchrentailz from './Add/searchrentailz'
import Searchdetail from './Add/searchdetail'


const CT = createStackNavigator();

function CtNavigator() {
  return (
    <CT.Navigator>
      <CT.Screen
      name="Index" 
      component={Index} 
      />
      <CT.Screen 
      options={{
      title: "Create infor",
      }}
      name="Create" 
      component={CreateHome} 
      />
       <CT.Screen  
      options={{
      title: "Detail",
      }}
      name="DetailRentalz" 
      component={DetailRentalz} 
      />
      <CT.Screen
      name="Showrentalz" 
      component={Showrentalz}
      />
       <CT.Screen
      name="Update" 
      component={UpdateRentailz}
      />
      <CT.Screen
      name="Searchrentailz" 
      component={Searchrentailz}
      />
       <CT.Screen
      name="SearchDetail" 
      component={Searchdetail}
      />
    </CT.Navigator>
  
  );
  
}

export default function App() {
  return (
    <NavigationContainer>
      <CtNavigator/>
    </NavigationContainer>
  );
}

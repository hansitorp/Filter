<template>
  <root>
    <AppNavigation/>
  </root>
</template>

<script>
//Login
import Login from "./Login/login";

// Shop
import Shop1 from "./Shop/shop1";
import Shop2 from "./Shop/shop2";
import Shop3 from "./Shop/shop3";
import people from "./Shop/people";
import color from "./Shop/color";
import date from "./Shop/date";
import myFilter from "./Shop/myFilter";

//Profile
import Profile1 from "./Profile/profile1";
//Edit
import Edit1 from "./Edit/edit1";
import Edit2 from "./Edit/edit2";
import Edit3 from "./Edit/edit3";

import { Root } from "native-base";
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

const ShopStack = createStackNavigator(
  {
    Shop: Shop1,
    Shoptwo: Shop2
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const ShopStack2 = createStackNavigator(
  {
    Shopthree: Shop3
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);


const ProfileStack = createStackNavigator({
  Profile: Profile1
});

const EditStack = createStackNavigator({
  Edit: Edit1
});

const AuthStack = createStackNavigator({
  Login: Login,
  
},
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  })

const Drawer = createDrawerNavigator({
  Explore: {
    screen: ShopStack,
    //icon on name
    navigationOptions: ({
      drawerIcon: ({ focused, tintColor }) => {
        return <MaterialCommunityIcons name={focused ? "checkbox-blank-circle" : "checkbox-blank-circle-outline" } size={20} color={focused ? '#ffffff' : '#E3D8D4'}/>;
      },
    })
  },
  Categories: {
    screen: ShopStack2,
    navigationOptions: ({
      drawerIcon: ({ focused, tintColor }) => {
        return <MaterialCommunityIcons name={focused ? "checkbox-blank-circle" : "checkbox-blank-circle-outline" } size={20} color={focused ? '#ffffff' : '#E3D8D4'}/>;
      },
    })
  },
  People: {
    screen: people,
    navigationOptions: ({
      drawerIcon: ({ focused, tintColor }) => {
        return <MaterialCommunityIcons name={focused ? "checkbox-blank-circle" : "checkbox-blank-circle-outline" } size={20} color={focused ? '#ffffff' : '#E3D8D4'}/>;
      },
    })
  },
  Color: {
    screen: color,
    navigationOptions: ({
      drawerIcon: ({ focused, tintColor }) => {
        return <MaterialCommunityIcons name={focused ? "checkbox-blank-circle" : "checkbox-blank-circle-outline" } size={20} color={focused ? '#ffffff' : '#E3D8D4'}/>;
      },
    })
  },
  Date: {
    screen: date,
    navigationOptions: ({
      drawerIcon: ({ focused, tintColor }) => {
        return <MaterialCommunityIcons name={focused ? "checkbox-blank-circle" : "checkbox-blank-circle-outline" } size={20} color={focused ? '#ffffff' : '#E3D8D4'}/>;
      },
    })
  },
  'My filters': {
    screen: myFilter,
    navigationOptions: ({
      drawerIcon: ({ focused, tintColor }) => {
        return <MaterialCommunityIcons name={focused ? "checkbox-blank-circle" : "checkbox-blank-circle-outline" } size={20} color={focused ? '#ffffff' : '#E3D8D4'}/>;
      },
    })
  },
},
{
  drawerBackgroundColor: '#E3D8D4',
  contentOptions: {
    activeBackgroundColor: '#BBA7A1',
    activeTintColor: '#fff',
    inactiveTintColor: '#E3D8D4',
    inactiveBackgroundColor: '#BBA7A1',
    
    itemStyle: {
      marginTop: 20,
      marginLeft: 30,
      marginRight: 30,
      
    //Shadow on card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    },
    labelStyle: {
      fontSize: 20,
    }
  },
  

});

const TabNavigation = createBottomTabNavigator({
  Shop: {
    screen: Drawer,
    navigationOptions: ({
      header: null,
      tabBarIcon: ({ focused, tintColor }) => {
        return <MaterialCommunityIcons name="store" size={32} color={focused ? '#ffffff' : '#AE8D92'}/>;
      },
    })
  },
  Edit: {
    screen: EditStack,
    navigationOptions: ({
      header: null,
      tabBarIcon: ({ focused, tintColor }) => {
        return <MaterialCommunityIcons name="image-plus" size={32} color={focused ? '#ffffff' : '#AE8D92'}/>;
      },
    })
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: ({
      header: null,
      tabBarIcon: ({ focused, tintColor }) => {
        return <MaterialCommunityIcons name="account" size={32} color={focused ? '#ffffff' : '#AE8D92'}/>;
      },
    })
  },
  // Shop: Drawer,
  // Edit: EditStack,
  // Profile: ProfileStack,
  
},
{
  
  tabBarOptions: {
    activeTintColor: '#ffffff',
    inactiveTintColor: '#AE8D92',
    style: {
      backgroundColor: '#E3D8D4',
    },
    
  }
});

const AppNavigation = createAppContainer(createSwitchNavigator({
  // auth: AuthStack,
  tabs: TabNavigation,
  
}));

export default {
  components: {
    AppNavigation,
    Root
  }
};
</script>




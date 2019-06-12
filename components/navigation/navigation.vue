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
  Explore: ShopStack,
  Categories: ShopStack2,
  People: people,
  Color: color,
  Date: date,
  'My filters': myFilter,
});

const TabNavigation = createBottomTabNavigator({
  Shop: Drawer,
  Edit: EditStack,
  Profile: ProfileStack,
  
});

const AppNavigation = createAppContainer(createSwitchNavigator({
  auth: AuthStack,
  tabs: TabNavigation,
  
}));

export default {
  components: {
    AppNavigation,
    Root
  }
};
</script>




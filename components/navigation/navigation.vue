<template>
  <root>
    <AppNavigation/>
  </root>
</template>

<script>
import Shop1 from "./Shop/shop1";
import Shop2 from "./Shop/shop2";
import Shop3 from "./Shop/shop3";
import Profile1 from "./Profile/profile1";
import Edit1 from "./Edit/edit1";
import { Root } from "native-base";

import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
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

const Drawer = createDrawerNavigator({
  shopDrawerStack: ShopStack,
  shopDrawerStack2: ShopStack2
});

const TabNavigation = createBottomTabNavigator({
  Shop: Drawer,
  Profile: ProfileStack,
  Edit: EditStack
});

const AppNavigation = createAppContainer(TabNavigation);

export default {
  components: {
    AppNavigation,
    Root
  }
};
</script>




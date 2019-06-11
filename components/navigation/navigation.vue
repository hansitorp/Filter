<template>
    <root>
        <AppNavigation/>
    </root>
</template>

<script>
import Shop1 from "./Shop/shop1"
import Profile1 from "./Profile/profile1"
import Edit1 from "./Edit/edit1"
import { Root } from "native-base";

import { createStackNavigator, 
         createBottomTabNavigator,  
         createAppContainer } from "react-navigation"

const ShopStack = createStackNavigator({
    Shop: Shop1
})

const ProfileStack = createStackNavigator({
    Profile: Profile1
})

const EditStack = createStackNavigator({
    Edit: Edit1
})


const TabNavigation = createBottomTabNavigator({
    Shop: ShopStack,
    Profile: ProfileStack,
    Edit: EditStack
})

const AppNavigation = createAppContainer(TabNavigation)

export default {
    components: {
        AppNavigation,
        Root
    }
    
}
</script>




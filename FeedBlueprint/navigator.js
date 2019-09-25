import { createStackNavigator } from "react-navigation-stack";

import Feed from "./screens/feed";
import Home from "./screens";

export const FeedBlueprintNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Feed: { screen: Feed },
  },
  {
    initialRouteName: "Home"
  }
);

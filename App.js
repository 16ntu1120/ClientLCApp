import React from 'react';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import SignInpage from './src/pages/SignInPage';
import SignupPage from './src/pages/SignupPage';
import ClientDashboardPage from './src/pages/ClientDashboard';
import EditProfilePage from './src/pages/EditProfile';
import CreatePostPage from './src/pages/createPost';
import SideMenu from './src/components/SideMenu';

const appContainer = createDrawerNavigator({
  // stackApp: {
  //   screen: appContainer,
  //   navigationOptions: {
  //     drawerLockMode: 'locked-closed'
  //   }
  // },
  Dashboard: ClientDashboardPage,
  EditProfile: EditProfilePage,
  CreatePost: CreatePostPage,
},
  {
    contentComponent: (props) => (
      <SideMenu currentScreen={props.navigation.state.routeName} {...props} />),
    drawerBackgroundColor: "white",
    drawerWidth: 200,
    drawerType: "slide",
    contentOptions: {
      activeBackgroundColor: "red",
    }
  });

  const appContainer2 = createStackNavigator({
    SignIn: SignInpage,
    Signup: SignupPage,
    drawerApp : {
      screen: appContainer
    }
  },
    {
      initialRouteName: "SignIn",
      headerMode: "none"
    });
export default createAppContainer(appContainer2);
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './src/Profile';
import Contactus from './src/ContactUs';
import About from './src/About';
import Courses from './src/Courses';
import Home from './src/Home';
import ProductDetails from './src/ProductDetails';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}   options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ContactUs" component={Contactus} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />

        <Stack.Screen
          name="About"
          component={About}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="courses"
          component={Courses}
          options={{
            headerStyle: {
              backgroundColor: 'blue',  // Set the background color of the header
            },
            headerTintColor: 'white',  // Set the color of the header text/icons
            headerTitle: 'Get in Touch',  // Set custom title text for the header
            headerTitleStyle: {
              fontSize: 12,  // Decrease the font size
              fontWeight: 'bold',  // Optional: Make the title bold
              fontFamily: 'Arial',  // Optional: Set a custom font family
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

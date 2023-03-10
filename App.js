import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loggin from './Screens/LogginScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen
          name="Loggin"
          component={Loggin}
          options={{title: 'Iniciar sesión'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
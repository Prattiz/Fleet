import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles';

import { useFonts, Roboto_400Regular, Roboto_700Bold  } from '@expo-google-fonts/roboto';

import { SingIn } from './src/screens/Login/SignIn';
import { Loading } from './src/components/Loading';



export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded) {
    return (
      <Loading />
    )
  }
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <SingIn/>

    </ThemeProvider>
  );
}



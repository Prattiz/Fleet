import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles';

import { useFonts, Roboto_400Regular, Roboto_700Bold  } from '@expo-google-fonts/roboto';

import { SingIn } from './src/screens/Login/SignIn';



export default function App() {
  
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if(!fontsLoaded){
    return(
      <>loading screen</>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        style="auto" 
      />

      <SingIn/>

    </ThemeProvider>
  );
}



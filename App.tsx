import { StatusBar } from 'expo-status-bar';
import { SingIn } from './src/screens/SignIn';


export default function App() {
  return (
    <>
      <StatusBar 
        style="auto" 
      />

      <SingIn/>

    </>
  );
}



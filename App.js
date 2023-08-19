import { DarkModeProvider } from './providers/DarkModeContext';
import ThemedNavigationContainer from './components/ThemedNavigationContainer';

export default function App() {
  return (
    <DarkModeProvider>
      <ThemedNavigationContainer/>
    </DarkModeProvider>
  );
}


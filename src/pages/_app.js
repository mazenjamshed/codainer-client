import { useState } from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import lightTheme from './../components/theme/light'; // Import your light theme
import darkTheme from './../components/theme/dark'; // Import your dark theme

const App = ({ Component, pageProps }) => {
  const [themeMode, setThemeMode] = useState('light'); // Initial theme mode is light

  // Toggle theme mode
  const toggleThemeMode = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  // Get the theme based on the current theme mode
  const getTheme = () => (themeMode === 'light' ? lightTheme : darkTheme);

  return (
    <ChakraProvider theme={extendTheme(getTheme())}>
      <CSSReset />
      <Component {...pageProps} toggleThemeMode={toggleThemeMode} />
    </ChakraProvider>
  );
};

export default App;

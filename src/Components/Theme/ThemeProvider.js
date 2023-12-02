// src/components/ThemeProvider.js
import React, { useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme,darkTheme } from '../../theme';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme ===darkTheme? lightTheme : darkTheme));
  };

  return (
    <StyledThemeProvider theme={theme}>
      {children(toggleTheme)}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;

import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';

import MainWindow from './components/MainWindow';

const theme = createMuiTheme({
  // typography: {
  //   button: {
  //     fontStyle: 'italic'
  //   }
  // }
  palette: {
    primary: blue,
    secondary: green
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainWindow />
    </ThemeProvider>
  );
}

export default App;

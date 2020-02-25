import React, { Component } from 'react';

import { Button, Typography, Container, Box } from '@material-ui/core';

const lunchPlace = [
  'Arab',
  'Arabu u vody',
  'Oliva',
  'Vietnam - narohu',
  'Vietnam - u autobusaku',
  'Vietnam - nejstarsi',
  'Vietnamske bagety',
  'Pizza - LaFamilia',
  'Pizza - Altia',
  'Menza dole',
  'Vegie garden + albert',
  'Dhaba',
  'Indie velka',
  'Cina',
  'Burgr',
  'Reznik',
  'Opera',
  'Pivoklub',
  'Karlinsky mlyn',
  'Lahudky - autobusak',
  'Co albert dal',
  'Strelnice',
  'Najit neco noveho'
];

function selectRandom(lenght) {
  let randomValue = Math.floor(Math.random() * lenght);
  console.log(randomValue);
  return randomValue;
}
export class MainWindow extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedPlace: '' };
    this.selectRandomCallback = this.selectRandomCallback.bind(this);
  }
  selectRandomCallback() {
    const selecterNumber = selectRandom(lunchPlace.length);
    this.setState({ selectedPlace: lunchPlace[selecterNumber] });
  }

  render() {
    return (
      <Container>
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={this.selectRandomCallback}
          >
            Select place
          </Button>
        </Box>
        <Box>
          <Typography variant="h1">{this.state.selectedPlace}</Typography>
        </Box>
      </Container>
    );
  }
}

export default MainWindow;

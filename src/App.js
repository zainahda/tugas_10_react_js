import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import TagComponent from './components/TagComponent';
import MainText from './components/MainText';
import ButtonComponent from './components/ButtonComponent';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <TagComponent />
        <MainText />
        <ButtonComponent />
      </div>
    )
  }
}

export default App;

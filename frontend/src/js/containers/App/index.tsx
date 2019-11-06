import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Title from '../../components/Title';

class App extends Component {
  render() {
    const text = 'Quiz App';
    return (
      <Title text={text} />
    );
  }
}

export default App;

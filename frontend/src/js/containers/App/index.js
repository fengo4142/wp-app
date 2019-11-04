import React, { Component } from 'react';
import Title from '../../components/Title'

class App extends Component {
  render() {
    const text = 'django test for wip'
    return (
      <Title text={text} />
    )
  }
}

export default App
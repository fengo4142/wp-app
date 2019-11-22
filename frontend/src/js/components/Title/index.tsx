import React from 'react';
import { Header } from 'semantic-ui-react';
import './style.scss';

interface IProps {}
interface IState {}

class Title extends React.Component<IProps, IState> {
  render() {
    const text = 'Title Awesome';
    return (
      <div>
        <Header as='h2' content={text} className='title-header' textAlign='center' />
      </div>
    );
  }
}


export default Title;

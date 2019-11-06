import React from 'react';
import { Header } from 'semantic-ui-react';
import './style.scss';

interface IProps {
  text: string
}
interface IState {}

class Title extends React.Component<IProps, IState> {
  render() {
    const { text } = this.props;
    return (
      <div>
        <Header as='h2' content={text} className='title-header' textAlign='center' />
      </div>
    );
  }
}


export default Title;

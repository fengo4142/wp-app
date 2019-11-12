import React, { Component } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

interface IProps {
  animation: 'overlay' | 'push' | 'scale down' | 'uncover' | 'slide out' | 'slide along' | undefined,
  direction: 'top' | 'right' | 'bottom' | 'left' | undefined,
  visible: boolean,
  dimmed: boolean,
}
interface IState {}

class CustomSidebar extends Component<IProps, IState> {
  state = {
    animation: 'uncover',
    direction: 'left',
    dimmed: false,
    visible: true,
  }
  render() {
    const { animation, direction, visible, dimmed } = this.state;
    return (
      <Sidebar.Pushable as={Segment}>      
        <Sidebar
          as={Menu}
          animation='uncover'
          direction='left'
          icon='labeled'
          inverted
          vertical
          visible={visible}
          width='thin'
        >
          <Menu.Item as='a' href='/home'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item as='a' href='/game'>
            <Icon name='gamepad' />
            Games
          </Menu.Item>
          <Menu.Item as='a' href='camera'>
            <Icon name='camera' />
            Channels
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={dimmed && visible}>
          <Segment basic>
            <Header as='h3'>Application Content</Header>
            <Image src='/images/wireframe/paragraph.png' />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default CustomSidebar
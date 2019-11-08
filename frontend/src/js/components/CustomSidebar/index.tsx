import React, { Component } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

interface IProps {
  animation: "overlay" | "push" | "scale down" | "uncover" | "slide out" | "slide along" | undefined
  direction: "top" | "right" | "bottom" | "left" | undefined
  visible: boolean,
  dimmed: boolean,
}
interface IState {}

class CustomSidebar extends Component<IProps, IState> {
  state = {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: false,
  }
  render() {
    const { animation, direction, visible, dimmed } = this.props;
    return (
      <Sidebar.Pushable as={Segment}>      
        <Sidebar
          as={Menu}
          animation={animation}
          direction={direction}
          icon='labeled'
          inverted
          vertical
          visible={visible}
          width='thin'
        >
          <Menu.Item as='a'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='gamepad' />
            Games
          </Menu.Item>
          <Menu.Item as='a'>
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
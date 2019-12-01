import React from 'react';
import { Card, Icon, Item, Responsive, Segment } from 'semantic-ui-react';

class Hddportlet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = [
      { name: 'hdd-1', status: true, passed: true, },
      { name: 'hdd-2', status: false, passed: false, },
      { name: 'hdd-3', status: true, passed: true, },
      { name: 'hdd-4', status: false, passed: false, }
    ]
    const cards = data.map(item => {
      return (
        <Card key={item.name} color={item.status ? 'green' : 'red'}>
          <Card.Content header={item.name} />
          <Card.Content description={item.passed ? 'PASSED' : 'FAILED'} />
          <Card.Content extra>
            <Icon name='user' />4 users
          </Card.Content>
        </Card>
      )
    })
    return (
      <div>
        <Responsive maxWidth={992}>
          <Card.Group itemsPerRow={1}>
            {cards}
          </Card.Group>
        </Responsive>
        <Responsive maxWidth={1280} minWidth={992}>
          <Card.Group itemsPerRow={2}>
            {cards}
          </Card.Group>
        </Responsive>
        <Responsive maxWidth={1600} minWidth={1280}>
          <Card.Group itemsPerRow={3}>
            {cards}
          </Card.Group>
        </Responsive>
        <Responsive minWidth={1600}>
          <Card.Group itemsPerRow={4}>
            {cards}
          </Card.Group>
        </Responsive>
      </div>
    )
  }
}

export default Hddportlet;
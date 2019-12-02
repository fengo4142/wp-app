import React from 'react';
import { Card, Icon, Item, Responsive, Segment } from 'semantic-ui-react';

class Hddportlet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = [
      { name: 'hdd-1', serial: 'DF532S34', status: true, passed: true, },
      { name: 'hdd-2', serial: 'GK3436L3', status: false, passed: false, },
      { name: 'hdd-3', serial: 'SL3535L2', status: true, passed: true, },
      { name: 'hdd-4', serial: 'JK534K34', status: false, passed: false, }
    ]
    const cards = data.map(item => {
      return (
        <Card key={item.name} color={item.status ? 'green' : 'red'}>
          <Card.Content header={item.name} />
          <Card.Content description={item.serial} />
          <Card.Content extra>
            <Icon name={item.passed ? 'check' : 'close'} color={item.passed ? 'green' : 'red'} />{item.passed ? 'PASSED' : 'FAILED'}
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
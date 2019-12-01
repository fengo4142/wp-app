import React from 'react';
import { Step, Icon } from 'semantic-ui-react';
import './ProcessStep.scss';

export default function ProcessStep(props) {
  return (
    <div className='process-step'>
      <Step.Group fluid className='process-step__group'>
        <Step completed className='process-step__group--each'>
          <Icon name='check circle outline' />
          <Step.Content>
            <Step.Title>Audit</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
      <Step.Group fluid className='process-step__group'>
        <Step className='process-step__group--each'>
          <Icon name='check circle outline'/>
          <Step.Content>
            <Step.Title>Data Erasure</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
      <Step.Group fluid className='process-step__group'>
        <Step className='process-step__group--each'>
          <Icon name='check circle outline'/>
          <Step.Content>
            <Step.Title>Grading</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
      <Step.Group fluid className='process-step__group'>
        <Step className='process-step__group--each'>
          <Icon name='check circle outline'/>
          <Step.Content>
            <Step.Title>Diagnostics</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    </div>
  )
}
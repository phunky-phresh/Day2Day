import React from 'react';
import styled from 'styled-components';

import DragComp from './DragComp';
const tasks = 
  {title: 'task1',
  detail: 'this is the detail',
  time: 3,
  color: '#FF0000'}


const DaySorted: React.FC = () => {
  return(
    <Day>
      <Title>Day</Title>
      <DragComp 
      tasks={tasks}
      />
    </Day>
  )
};

const Day = styled.div`
  background-color: lavender;
  width: 50%;
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  text-align: center;
`

export default DaySorted;
import React, { useEffect } from 'react';
import styled from 'styled-components';

import DragComp from './DragComp';
// const tasks = 
//   {title: 'task1',
//   detail: 'this is the detail',
//   time: 3,
//   color: '#FF0000'}

export interface Package {
  name: string;
  detail: string;
  color: string;
}
export interface Props {
  list: Package[];
}

const DaySorted: React.FC<Props> = ({list}) => {
  return(
    <Day>
      <Title>Day</Title>
      <DragComp 
        tasks={list}
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
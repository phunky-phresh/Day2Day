import React,  {useState} from 'react';
import styled from 'styled-components';

import DragComp from './DragComp';
// const tasks = 
//   {title: 'task1',
//   detail: 'this is the detail',
//   time: 3,
//   color: '#FF0000'}

export interface Package {
  title: string;
  detail: string;
  color: string;
}
export interface Props {
  list: Package[];
}

const DaySorted: React.FC<Props> = ({list}) => {


if (list) {
  var listReturn = list.map( task => {
    return <DragComp 
              title={task.title}
              detail={task.detail}
              color={task.color}
            />
  })
  return(
    <Day>
      <Title>Plans</Title>
      
      {listReturn}
    </Day>
  )
} else {
  return(
    <Day>
      <Title>No plans</Title>
     </Day>
  )
}


  // }
 
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
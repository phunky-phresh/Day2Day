import React, { useState } from 'react';
import styled from 'styled-components';

import Form from '../components/Form';
import DaySorted from '../components/DaySorted';



const WorkSpace: React.FC = () => {

  const [ taskName, setName ] = useState('');
  const [ taskDetail, setDetail ] = useState('');
  const [ taskTime, setTime ] = useState('');
  const [ taskColor, setColor ] = useState<string | null>('');

  const [ taskList, setList ] = useState([])

  // const tasks = [
  //   {title: 'task1',
  //   detail: 'this is the detail',
  //   time: 3,
  //   color: '#FF0000'}
  // ]

  // TODO: create state handler for array of activities to be passed to day planner

  const _handleName = (e: React.FormEvent<HTMLInputElement>) => {
   const name = e.currentTarget.value;
   setName(name);
  };

  const _handleDetail = (e: React.FormEvent<HTMLInputElement>) => {
    const detail = e.currentTarget.value;
    setDetail(detail);
  };
  const _handleColor = (e: React.FormEvent<HTMLDivElement>) => {
    const color = e.currentTarget.getAttribute('color'); 
    setColor(color);
  }

  // TODO: set form submit to create new activity for day planner
  const _handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let obj = {title: taskName,
      detail: taskDetail,
      time: taskTime,
      color: taskColor}
    console.log('clicked3');
    // setList(obj);
  };

  return(
    <Bench>
      <Form 
          handleName={_handleName}
          handleDetail={_handleDetail}
          handleColor={_handleColor}
          handleAdd={_handleAdd}
      />
      <DaySorted />
      {/* pass array of tasks to DaySorted. */}
    </Bench>
  )
};

const Bench = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`

export default WorkSpace;
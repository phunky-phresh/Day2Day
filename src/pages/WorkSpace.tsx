import React, { useState } from 'react';
import styled from 'styled-components';

import Form from '../components/Form';
import DaySorted from '../components/DaySorted';



const WorkSpace: React.FC = () => {

  const [ taskName, setName ] = useState('');
  const [ taskDetail, setDetail ] = useState('');
  const [ tasTime, setTime ] = useState('');
  const [ tasColor, setColor ] = useState('');

  // TODO: create state handler for array of activities to be passed to day planner

  const _handleName = (e: React.FormEvent<HTMLInputElement>) => {
   const name = e.currentTarget.value;
   setName(name);
  };

  const _handleDetail = (e: React.FormEvent<HTMLInputElement>) => {
    const detail = e.currentTarget.value;
    setDetail(detail);
  };

  // TODO: set form submit to create new activity for day planner
  const _handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('clicked');
    
  };

  return(
    <Bench>
      <Form 
          handleName={_handleName}
          handleDetail={_handleDetail}
          handleAdd={_handleAdd }
      />
      <DaySorted />
    </Bench>
  )
};

const Bench = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`

export default WorkSpace;
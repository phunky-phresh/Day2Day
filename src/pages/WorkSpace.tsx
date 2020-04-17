import React, { useState } from 'react';
import styled from 'styled-components';

import Form from '../components/Form';
import DaySorted from '../components/DaySorted';



const WorkSpace: React.FC = () => {

  const [ taskName, setName ] = useState('');
  const [ taskDetail, setDetail ] = useState('');
  const [ tasTime, setTime ] = useState('');
  const [ tasColor, setColor ] = useState('');

  const _handleName = (e: React.FormEvent<HTMLInputElement>) => {
   const name = e.currentTarget.value;
   setName(name);
  };

  const _handleDetail = (e: React.FormEvent<HTMLInputElement>) => {
    const detail = e.currentTarget.value;
    setDetail(detail);
  };

  return(
    <Bench>
      <Form 
          handleName={_handleName}
          handleDetail={_handleDetail}
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
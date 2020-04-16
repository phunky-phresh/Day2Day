import React from 'react';
import styled from 'styled-components';

import Form from '../components/Form';
import DaySorted from '../components/DaySorted';



const WorkSpace: React.FC = () => {
  return(
    <Bench>
      <Form />
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
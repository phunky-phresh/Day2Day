import React from 'react';
import styled from 'styled-components';

const DaySorted: React.FC = () => {
  return(
    <Day>
      <Title>Day</Title>
    </Day>
  )
};

const Day = styled.div`
  background-color: lavender;
  width: 50%
`
const Title = styled.h1`
  text-align: center;
`

export default DaySorted;
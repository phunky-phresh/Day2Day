import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';


const marks = [
  {
    value: 0,
    label: '0h'
  },
  {
    value: 20,
    label: '2h'
  },
  {
    value: 40,
    label: '4h'
  },
  {
    value: 60,
    label: '6h'
  },
  {
    value: 80,
    label: '8h'
  },
  {
    value: 100,
    label: '10h'
  }
];

const valuetext = (value: number) => {
  return `${value}h`;
}
function valueLabelFormat(value: number) {
  // const m = marks.findIndex((mark) => mark.value === value) ;
  // console.log(value);
  const label = `${value/10}h`
  return label;
}


const Landing: React.FC = () => {

  // TODO: landing page needs hours of day. thinking a slider that snaps to an hour mark. max 10hours.
  // small blurb explaining the app as well.

  const [ timeValue, setTime ] = useState<number | number[]>(60);

  const _handleChange = (event: any, newValue: number | number[]) => {
    // console.log(newValue);
    
    setTime(newValue);
  }

  return(
    <Main>
    <Wrap>
      <Typography id="discrete-slider-restrict" gutterBottom>
       How long is your day?
      </Typography>
      <Slider
        value={timeValue}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={_handleChange}
      />
    </Wrap>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
`
const Wrap = styled.div`
  margin: 20px;
  width: 400px;
`

export default Landing;
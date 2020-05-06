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
  const m = marks.findIndex((mark) => mark.value === value) ;
  console.log(m);
  
  return m
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
    <Wrap>
      <Typography id="discrete-slider-restrict" gutterBottom>
        Restricted values
      </Typography>
      <Slider
        value={timeValue}
        // defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        // getAriaValueText={valuetext}
        // aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={_handleChange}
      />
    </Wrap>

    
  );
}
const Wrap = styled.div`
  margin: 20px;
  width: 300px;
`

export default Landing;
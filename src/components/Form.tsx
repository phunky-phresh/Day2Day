import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import Signify from './Signify';

const colorOptions = [
  {name: 'red', hex: '#FF0000'},
  {name: 'blue', hex: '#0000FF'},
  {name: 'green', hex: '#008000'},
  {name: 'yellow', hex: '#FFFF00'},
]

interface Props {
  handleName: (event: React.ChangeEvent<HTMLInputElement>) => string | void;
  handleDetail: (event: React.ChangeEvent<HTMLInputElement>) => string | void;
  handleColor: (event: React.MouseEvent<HTMLDivElement>) => string | void;
  handleAdd: (event: React.ChangeEvent<HTMLFormElement>) => object | void;
  // values: Values;
  name: string;
  detail: string;
}
// interface Values {
//   name: string;
//   detail: string;
  
// }

const Form: React.FC<Props> = ( {handleName, handleDetail, handleColor, handleAdd, name, detail} ) => {

  const [ selectedStart, setStart ] = useState<Date | null>();
  const [ selectedFinish, setFinish ] = useState<Date | null>();

  
  const handleStart = (start: Date | null) => {
    console.log(start);
    
    setStart(start);
  };

  const handleFinish = (end: Date | null) => {
    console.log(end);
    
    setFinish(end);
  };
  
  const colorPalette = colorOptions.map( c => {   
    return <Signify handleClick={handleColor} value={c.hex} key={c.name} name={c.name} color={c.hex} />
  });



  return(
    <FormWrap onSubmit={handleAdd}>
      <Title>Form</Title>
      <Content>
        <TextField
        id="outlined-search"
        label="Task/Assignment"
        type="text"
        variant="outlined" 
        onChange={handleName}
        value={name}
      />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          variant="outlined"
          onChange={handleDetail}
          value={detail}
        />

    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimeWrap>
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Start Time"
          value={selectedStart}
          onChange={handleStart}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <Hyph>
          <h1>-</h1>
        </Hyph>
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Finish Time"
          value={selectedFinish}
          onChange={handleFinish}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </TimeWrap>
    </MuiPickersUtilsProvider>
        
        <Palette>
          {colorPalette}
        </Palette>

{/* TODO: add onCLick handler to add activity to day planner and clear form */}
    <Button type='submit' variant="outlined" color="primary" style={{width: '50%', margin: 'auto'}}>
      Add Activity
    </Button>

      </Content>
    </FormWrap>
  )
};

const FormWrap = styled.form`
  background-color: #e2e2e2;
  width: 50%;
  height: 100vh;
`

const Content = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > div {
    padding: 5px 0;
  }
`
const TimeWrap = styled.div`
  display: flex;
  justify-content: space-around;
  
  > div {
    margin: 0 5px;
  }
`

const Title = styled.h1`
  text-align: center;
`

const Hyph = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
    font-weight: 300;
  }
`

const Palette = styled.span`
  display: flex;
  justify-content: center;
`

export default Form;
import React, { useState } from 'react';
import styled from 'styled-components';
import { FormGroup, TextField } from '@material-ui/core';
import { KeyboardTimePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import Signify from './Signify';



const Form: React.FC = () => {

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date('2014-08-18T21:11:54'));

  
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    console.log(date);
    // console.log(typeof date); 
  };
  


  return(
    <FormWrap>
      <Title>Form</Title>
      <Content>
        <TextField
        id="outlined-search"
        label="Task/Assignment"
        type="text"
        variant="outlined" />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          variant="outlined"
        />

    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimeWrap>
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Start Time"
          value={selectedDate}
          onChange={handleDateChange}
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
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </TimeWrap>
    </MuiPickersUtilsProvider>
        
        <Signify />

      </Content>
    </FormWrap>
  )
};

const FormWrap = styled.div`
  background-color: #e2e2e2;
  width: 50%;
  height: 100%;

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

export default Form;
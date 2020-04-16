import React, { useState } from 'react';
import styled from 'styled-components';
import { FormGroup, TextField } from '@material-ui/core';
import { KeyboardTimePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
// import MomentUtils from '@date-io/moment';



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
      <FormGroup>
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
        {/* <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> */}
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
    </MuiPickersUtilsProvider>
        
      </FormGroup>
    </FormWrap>
  )
};

const FormWrap = styled.div`
  background-color: #e2e2e2;
  width: 50%;
  height: 100%;
`

const Title = styled.h1`
  text-align: center;
`

export default Form;
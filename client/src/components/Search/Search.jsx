import { TextField } from '@mui/material';
import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './search.css';

export default function Search() {
  const [value, setValue] = React.useState(null);
  return (
    <div className="searchFatherDiv">
      <div className="indexDiv">
        <LocalizationProvider dateAdapter={AdapterDayjs} />
        <DatePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      <div className="indexDiv">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
      <div className="indexDiv">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
    </div>
  );
}

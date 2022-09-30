import * as React from 'react';
import { TextField, Box, Button } from '@mui/material/';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './search.css';

export default function Search() {
  const [value, setValue] = React.useState(null);

  return (
    <div className="searchFatherDiv">
      <Box display="flex" alignItems="center" sx={{ justifyContent: 'center', mt: 2 }}>
        <h5 className="textSearch">Дата: </h5>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="SearchInput"
            label="Дата"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Box display="flex" alignItems="center" sx={{ justifyContent: 'center', mt: 2 }}>
        <h5 className="textSearch">Откуда:</h5>
        <TextField id="outlined-basic" label="Город" variant="outlined" className="SearchInput" />
      </Box>
      <Box display="flex" alignItems="center" sx={{ justifyContent: 'center', mt: 2 }}>
        <h5 className="textSearch">Куда:</h5>
        <TextField id="outlined-basic" label="Город" variant="outlined" className="SearchInput" />
      </Box>
      <Box display="flex" alignItems="center" sx={{ justifyContent: 'center', mt: 2, pl: '69%' }}>
        <Button size="large" variant="outlined">   Найти   </Button>
      </Box>
      <Box display="flex" alignItems="center" sx={{ justifyContent: 'center', mt: 2 }}>
        <h5 className="textSearch">Поиск по организатору:</h5>
        <TextField id="outlined-basic" label="Организатор" variant="outlined" className="SearchInput" />
      </Box>
    </div>
  );
}

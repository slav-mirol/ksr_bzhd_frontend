import React from 'react';
import {MDCTextField} from '@material/textfield';
import { Autocomplete } from "@autocomplete/material-ui";
import axios from 'axios';



export default function comboBox(curUrl) {
    axios.get(curUrl).then((res) => {
        listOfDevices = res.data
        console.log(res.data)
    })
    return (
    <Autocomplete
      id="combo-box-demo"
      options={listOfDevices}
      getOptionLabel={(option) => (option.name + ", " + option.power)}
      
      renderInput={(params) => <MDCTextField {...params} label="Combo box" variant="outlined" />}
    />
  );
}

let listOfDevices = [];

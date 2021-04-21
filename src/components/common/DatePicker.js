import React from 'react';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function DatePicker(props) {

    const { name, label, value, error = null, onChange } = props;


    const convertToDefEventPara = (name, value) => ({
        target: {
            name,
            value
        }
    });

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                fullWidth
                label={label}
                format="MM/dd/yyyy"
                name={name}
                value={value}
                onChange={date => onChange(convertToDefEventPara(name, date))}
                {...(error && { error: true, helperText: error })}
            />
        </MuiPickersUtilsProvider>
    )
}

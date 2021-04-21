import React from 'react'
import { Typography } from '@material-ui/core'

export default function PageHeader(props) {

    const { title } = props;

    return (

        <Typography variant="h4" component="div" >
            {title}
        </Typography>

    )
}
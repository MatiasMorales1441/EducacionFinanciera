import React from 'react';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';

function ClickHere({ href, label }){

    return(    
        
        <Button variant="outlined" color="secondary">
        <Link  to={href}>{label}</Link>
              
    </Button>
                        
    );

}

export default ClickHere;
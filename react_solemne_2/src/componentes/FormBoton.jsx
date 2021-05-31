import React from 'react';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';

function FormBoton({ href, label }){

    return(    
                        <div className="centered">
                            <Button variant="outlined" color="secondary">
                            <Link  to={href}>{label}</Link>
                                  
                        </Button>
                        </div>
                        
                        
    );

}

export default FormBoton;
{/*<div className="centered">
                        <li >


                            
                            <input type="submit" value={props.value} className="boton bigger" label={props.label}/>
                        </li>
    </div>*/}
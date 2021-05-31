import react from 'react';
import FormLine from '../componentes/FormLine';
import FormBoton from '../componentes/FormBoton';
import {Button} from '@material-ui/core';


function FormMetod () { 
    return (
        <form>
            <div>
                    <ul className="centered">

                    
                        <FormBoton label="Ingresar como Cliente" href="/Login_cliente"/>   
                        <FormBoton label="Ingresar como Asesor"  href="/Login_asesor"/>  
   
                        
                    </ul>
                </div>

        </form>
    );
    
    }
    export default FormMetod;
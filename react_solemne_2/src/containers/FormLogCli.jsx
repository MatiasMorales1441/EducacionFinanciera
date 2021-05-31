import react from 'react';
import FormInput from '../componentes/FormInput';
import FormBoton from '../componentes/FormBoton';
import FormOutput from '../componentes/FormOutput';
import ClickHere from '../componentes/ClickHere';

function FormLogCli () { 
    return (
        <form>
            
            <form>
                    <FormInput type="email"    label="Correo" placeholder="Su direccion de correo">
                    </FormInput>
                    <FormInput type="password" label="Contrase&ntilde;a" placeholder="Escriba su Contrase&ntilde;a" >
                    </FormInput>
                    <FormBoton  label="Ingresar" >
                    </FormBoton>    
                        
                    
                    
                </form>
                <FormOutput value="¿Aún no te registras?"/>
                <div className="centered">
                         <ClickHere label="Has click aquí" href="/Reg_asesor"></ClickHere>
                     </div> 

        </form>       
    );
    
    }
    export default FormLogCli;
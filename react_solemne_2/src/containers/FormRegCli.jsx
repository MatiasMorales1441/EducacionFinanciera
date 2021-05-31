import react from 'react';
import FormInput from '../componentes/FormInput';
import FormBoton from '../componentes/FormBoton';


function FormRegCli () { 
    return (
        <form>
                    <form id="datos_cliente">
                    <FormInput  label="Nombre y Apellido" placeholder="Su nombre y Apellido">
                    </FormInput>
                    <FormInput type="email" label="Correo electronico" placeholder="Su Direcion">
                    </FormInput>    
                    <FormInput  label="Rut" placeholder="12.123.123-1">
                    </FormInput> 
                    <FormInput  type="password" label="Contrase&ntilde;a" placeholder="Su Contrase&ntilde;a">
                    </FormInput>     
                    <FormInput type="password" label="Confirmar Contrase&ntilde;a" placeholder="Confirme su Contrase&ntilde;a" >
                    </FormInput>
                    <FormBoton  label="Registrarse" href="/RegExitoso">
                    
                    </FormBoton>        
                        
                    </form>
        </form>
    );
    
    }
    export default FormRegCli;
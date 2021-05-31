import react from 'react';
import FormInput from '../componentes/FormInput';
import FormBoton from '../componentes/FormBoton';
import FormOutput from '../componentes/FormOutput';
import ClickHere from '../componentes/ClickHere';


function FormLogAse () { 
    return (
        <form>
        <form>
        <FormInput type="email"    label="Correo" placeholder="Su direccion de correo">
            </FormInput>
        <FormInput type="password"    label="Contraseña" placeholder="Su contraseña">
            </FormInput>
            <div className="centered">
            <FormBoton  label="Ingresar" href="" >
            </FormBoton>    
            </div>
            
            
            
        </form>
            <FormOutput value="¿Aún no eres un asesor?"/>

                <div className="centered">
                    <ClickHere label="Has click aquí" href="/Reg_asesor"></ClickHere>
                </div>    
        </form>       
    );
    
    }
    export default FormLogAse;
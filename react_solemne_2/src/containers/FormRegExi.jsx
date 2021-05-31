import react from 'react';
import FormLine from '../componentes/FormLine';
import FormBoton from '../componentes/FormBoton';
import FormOutput from '../componentes/FormOutput';

function FormRegExi () { 
    return (
        <form>
               <output>Su solicitud a sido enviada,<br/>pronto lo contactaremos<br/><br/><br/>Revise su correo electrónico<br/>para mayor informacion</output>
                    <h4>
                        
                            <FormBoton label="Volver" href="/"></FormBoton>
                        
                    </h4>


        </form>
    );
    
    }
    export default FormRegExi;
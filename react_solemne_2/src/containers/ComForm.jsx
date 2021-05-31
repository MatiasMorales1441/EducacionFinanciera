import react from 'react';
import FormBoton from '../componentes/FormBoton';
import FormLine from '../componentes/FormLine';

function ComForm () { 
return (
    <form>
    <FormBoton label="Ingresar" href="/MetodoIngreso"/>
        
        
    <FormBoton label="Solicita un asesor"href="/Reg_cliente"/>


    <FormBoton label="Se asesor"href="/Reg_asesor"/>
    </form>
);

}
export default ComForm;
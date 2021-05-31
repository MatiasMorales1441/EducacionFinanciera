import react from 'react'
import FormInput from '../componentes/FormInput';
import FormSelect from '../componentes/FormSelect';
import FormBoton from '../componentes/FormBoton';

function FormRegAse () { 
    const Profesiones = [
    
        {value:"contador", label:"Contador Auditor" },
        {value:"economia", label:"Economía y Negocios" },
        {value:"inversiones", label:"Finanzas e Inversiones" },
    
    ];
    const Especialidades = [
        
        {value:"administracion", label:"Administración" },
        {value:"economia", label:"Economía" },
        {value:"contabilidad", label:"Contabilidad" },
    ];
    
    return (
        <form>
             <form>
                    <FormInput type="text" label="Nombres " placeholder="Sus Nombres">
                    </FormInput>
                    <FormInput type="text" label="Apellidos " placeholder="Sus Apellidos">
                    </FormInput>
                    <FormInput type="email" label="Correo electronico" placeholder="Su Direcion">
                    </FormInput>    
                    <FormInput type="text" label="Rut" placeholder="12.123.123-1">
                    </FormInput> 
                    <FormInput type="password" label="Contrase&ntilde;a" placeholder="Su Contrase&ntilde;a">
                    </FormInput>     
                    <FormInput type="password" label="Confirmar Contrase&ntilde;a" placeholder="Confirme su Contrase&ntilde;a" >
                    </FormInput>
                        
                    <FormSelect label="Profesión" placeholder="seleccione su profesión" opciones={Profesiones}/>
                    <FormSelect label="Área de especialidad" placeholder="seleccione su especialidad" opciones={Especialidades}/>
                    <FormInput type="file" label="Agregar titulo profesional" placeholder="Confirme su Contrase&ntilde;a" >
                    </FormInput>
                        
            </form>
            <FormBoton  label="Registrarse" href="/RegExitoso">
                    
                    </FormBoton>   

        </form>
    );
    
    }
    export default FormRegAse;
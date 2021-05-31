import React from 'react';
import FormLine from './FormLine';

 
function FormOutput({ label, value }){

return(
    <div className="centered">
    <FormLine  label={label}>
        <output className="centered bigger">{value}</output>
    </FormLine>
    </div>

);

}
export default FormOutput;
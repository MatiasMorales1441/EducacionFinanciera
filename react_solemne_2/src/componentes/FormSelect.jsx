import React from 'react';
import Formline from './FormLine';

function FormSelect({ label, placeholder, opciones }){
    return(
        <Formline label={label}>
                    <select className="fullWidth bigger" required defaultValue="">
                    <option value="" disabled >{placeholder}</option>
                        {
                            opciones.map((option, key) =>(
                                <option key={key} value={option.value}>{option.label}</option>
                                ))
                        }
                        
                    </select>
        </Formline>
    );

}

export default FormSelect;
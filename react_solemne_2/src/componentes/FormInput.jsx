import React from 'react';
import Formline from './FormLine';



function handleOnChange(event){
    console.log(event);
};



function FormInput({ label, type, placeholder, value }) {

    return(
        <Formline label={label}>
            <input type={type} 
            placeholder={placeholder} 
            className="fullWidth bigger " 
            value={value}
            classBoton="boton bigger"
            onChange= {handleOnChange} />
        </Formline>
    );

}

export default FormInput;
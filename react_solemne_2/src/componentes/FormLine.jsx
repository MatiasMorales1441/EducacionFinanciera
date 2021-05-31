import React from 'react';

function Formline({ label, children }){

    return(
        <div>
             <label>{label}</label>
             {children}
         </div>
    );


}

export default Formline;
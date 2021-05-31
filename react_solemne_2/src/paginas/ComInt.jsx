import React from 'react';
import Nav from '../componentes/Nav';
import Card from '../componentes/Card';
import FormLine from '../componentes/FormLine';
import ComForm from '../containers/ComForm';
import FormBoton from '../componentes/FormBoton';


const ComLinks = [
    {href: '/', label: 'Inicio'},
    {href: '/Contenidos', label: 'Contenidos'},
    {href: '/Trivia', label: 'Trivia'},
    {href: '/Noticias', label: 'Noticias'}
    ];
    


function ComInt(){
    return(

        <>
        <Nav links = {ComLinks}/>
        <section>
            
                <Card>
        
                <ComForm />


                </Card>
                
            
        </section>
        </>

    );


}
export default ComInt;
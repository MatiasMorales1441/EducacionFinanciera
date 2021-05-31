import React from 'react';
import Nav from '../componentes/Nav';
import Card from '../componentes/Card';
import FormRegExi from '../containers/FormRegExi';


const RegLinks = [
    {href: '/', label: 'Inicio'},
    {href: '/ComInt', label: 'Comunidad Inteligente'},
    {href: '/Contenidos', label: 'Contenidos'},
    {href: '/Trivia', label: 'Trivia'},
    {href: '/Noticias', label: 'Noticias'}
    ];


function RegExitoso(){
    return(
        <>
        <Nav links = {RegLinks}/>
        <section>
            <Card >
               
                <FormRegExi />

            </Card>  
        </section>
        </>
    );

}

export default RegExitoso;
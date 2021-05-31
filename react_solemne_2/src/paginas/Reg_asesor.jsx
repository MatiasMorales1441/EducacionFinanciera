import React from 'react';
import Nav from '../componentes/Nav';
import Card from '../componentes/Card';
import FormRegAse from '../containers/FormRegAse';


const RegLinks = [
    {href: '/', label: 'Inicio'},
    {href: '/ComInt', label: 'Comunidad Inteligente'},
    {href: '/Contenidos', label: 'Contenidos'},
    {href: '/Trivia', label: 'Trivia'},
    {href: '/Noticias', label: 'Noticias'}
    ];
    

function Reg_asesor(){
    return(

        <>
        <Nav links={RegLinks}/>
        <section>
        
            <Card title="Registrarse">

                <FormRegAse />     

            </Card>
               
    </section>
    </>
    );

}

export default Reg_asesor;

import React from 'react';
import Nav from '../componentes/Nav';
import Card from '../componentes/Card';
import FormRegCli from '../containers/FormRegCli';



const RegLinks = [
    {href: '/', label: 'Inicio'},
    {href: '/ComInt', label: 'Comunidad Inteligente'},
    {href: '/Contenidos', label: 'Contenidos'},
    {href: '/Trivia', label: 'Trivia'},
    {href: '/Noticias', label: 'Noticias'}
    ];



function Reg_cliente(){
    return(

        <>
        <Nav links={RegLinks}/>
        <section>
                <Card title="Registrarse">

                <FormRegCli />

                </Card>
    
            </section>
    </>
    );

}

export default Reg_cliente;
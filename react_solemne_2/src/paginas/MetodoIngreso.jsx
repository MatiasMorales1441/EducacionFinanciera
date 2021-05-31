import React from 'react';
import Nav from '../componentes/Nav';
import Card from '../componentes/Card';
import red from '@material-ui/core/colors/red';
import FormMetod from '../containers/FormMetod';


const secondary = red[200]; // #f44336

const metodoLinks = [
    {href: '/', label: 'Inicio'},
    {href: '/ComInt', label: 'Comunidad Inteligente'},
    {href: '/Contenidos', label: 'Contenidos'},
    {href: '/Trivia', label: 'Trivia'},
    {href: '/Noticias', label: 'Noticias'}
    ];

function MetodoIngreso(){
    return(
        <>
        <Nav links = {metodoLinks}/>
        <section>
            
                <Card title="¿Como desea Ingresar?">

                <FormMetod />

                </Card>
                
        </section>
        </>
    );

}

export default MetodoIngreso;
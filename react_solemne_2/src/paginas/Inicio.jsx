import React from 'react';
import Nav from '../componentes/Nav';
import Card from '../componentes/Card';
import FormLine from '../componentes/FormLine';
import FormBoton from '../componentes/FormBoton';

const InicioLinks = [
{href: '/ComInt', label: 'Comunidad Inteligente'},
{href: '/Contenidos', label: 'Contenidos'},
{href: '/Trivia', label: 'Trivia'},
{href: '/Noticias', label: 'Noticias'}
];

function Inicio(){
    return(
        <Nav links={InicioLinks}/>
    );
}

export default Inicio;


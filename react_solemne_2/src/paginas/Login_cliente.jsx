import React from 'react';
import Nav from '../componentes/Nav';
import Card from '../componentes/Card';
import FormLogCli from '../containers/FormLogCli';


const LoginLinks = [
    {href: '/', label: 'Inicio'},
    {href: '/ComInt', label: 'Comunidad Inteligente'},
    {href: '/Contenidos', label: 'Contenidos'},
    {href: '/Trivia', label: 'Trivia'},
    {href: '/Noticias', label: 'Noticias'}
    ];
    
function Login_cliente(){
    return(

    <>
        <Nav links={LoginLinks}/>
        <section>
           
        <Card title="Ingreso">

           <FormLogCli />

         </Card>
                
                
           
          
        </section>
        </>
    

    );
}

export default Login_cliente;
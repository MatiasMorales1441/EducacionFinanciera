import React from 'react';
import Nav from '../componentes/Nav';
import Card from '../componentes/Card';
import FormLogAse from '../containers/FormLogAse';


const LoginLinks = [
    {href: '/', label: 'Inicio'},
    {href: '/ComInt', label: 'Comunidad Inteligente'},
    {href: '/Contenidos', label: 'Contenidos'},
    {href: '/Trivia', label: 'Trivia'},
    {href: '/Noticias', label: 'Noticias'}
    ];
    


function Login_asesor(){
    return(

    <>
        <Nav links={LoginLinks}/>
        <section>
            

                <Card title="Ingreso">  
                
                <FormLogAse />
                    

                </Card>
                
                
           
          
        </section>
        </>
    

    );
}

export default Login_asesor;
import React from 'react';
import Presentation from '../components/Presentation';
import Lien from '../components/Lien';
import '../styles/style.css';




const Home = () => {
    return (
        <div>
            <Presentation />
            <Lien src="" alt="" href="https://anthonyzhao.fr" site="PortFolio"/>
            <Lien src="" alt="" href="https://github.com/2valide" site="GitHub"/>
            <Lien src="" alt="" href="https://www.linkedin.com/in/anthony-zhao-0331b6298" site="LinkedIn"/>

        </div>
    );
};

export default Home;
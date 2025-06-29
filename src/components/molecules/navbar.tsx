import React from "react";
//
const Hbo_nav = () => {
    return <nav className="navbar-expand-lg fixed-top" style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Aumenté la opacidad para mejor efecto
            paddingLeft: '4%', 
            paddingTop: '1.5%', 
            paddingBottom: '1%', 
            display: 'flex', 
            alignItems: 'center',
            backdropFilter: 'blur(10px)', // Esto crea el efecto de difuminado
            WebkitBackdropFilter: 'blur(10px)', // Soporte para Safari
            zIndex: 1000, // Asegura que esté por encima de otros elementos
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' // Sombra suave para mejor separación
        }}>
        <div className="container-fluid " style={{ display: 'flex', alignItems: 'center', width: '100%' }} >
            <a className="navbar-brand " style={{ flex: '0 0 auto' }}>
                <img src="https://images.cdn.prd.api.discomax.com/05b7/3d4a7e2b0215.png?h=60&f=webp" width="109.5" height="30" />
            </a>
            <div id="navbar_center" className="collapse">
                <a href="#" ><p className="center_vert"> Inicio </p> </a>
                <a href="#" ><p className="center_vert"> Series </p></a>
                <a href="#" ><p className="center_vert"> Peliculas </p></a>
                <a href="https://i.pinimg.com/736x/e4/22/d7/e422d719957bb4dd9c43859488951fee.jpg" className="center_vert"><img src="https://images.cdn.prd.api.discomax.com/15f1/f2fde30cf1b2.png?h=48&f=webp" width="75%" height="75%"/></a>
                <a href="#" ><p className="center_vert"> Niños y familias </p></a>
            </div>

            <div style={{ display: 'flex', gap: '25px', alignItems: 'center', marginRight:'4%'}}>
                <a href="#">  
                    <img src="https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd1c89ec8-a4a6-4acb-bb75-d5a9eca17880.png?h=32&f=webp" width="23" height="23" alt="Icon 1" />
                </a>
                <a href="#">
                    <img src="https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd6e2e8b6-d39a-4391-916d-1079b419b60d.png?h=32&f=webp" width="23" height="23" alt="Icon 2" />
                </a>
                <a href="#">
                    <img className="roundimg"src="https://images.cdn.prd.api.discomax.com/2023%2F4%2F11%2Fb33a4043-516c-441a-862d-6c9ee2e21fb5.png?w=64&f=webp" width="32" height="32" alt="Icon 3"/>
                </a>
            </div>
        </div>
    </nav>

}

export default Hbo_nav;
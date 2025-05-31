import React from "react";
//
const Hbo_nav = () => {
    return <nav className="navbar-expand-lg bg-transparent" style={{ paddingLeft: '4%', paddingTop: '1.5%', display: 'flex', alignItems: 'center' }}>
        <div className="container-fluid " style={{ display: 'flex', alignItems: 'center', width: '100%' }} >
            <a className="navbar-brand " style={{ flex: '0 0 auto' }}>
                <img src="https://images.cdn.prd.api.discomax.com/05b7/3d4a7e2b0215.png?h=60&f=webp" width="109.5" height="30" />
            </a>
            <div  style={{flex: 1,display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center',gap: '1%',}}>
                <p className="center_vert">Inicio</p>
                <p className="center_vert" >Series</p>
                <p className="center_vert" >Peliculas</p>
                <img src="https://images.cdn.prd.api.discomax.com/15f1/f2fde30cf1b2.png?h=48&f=webp" width="33" height="30"/>
                <p className="center_vert" >Niños y familias</p>
            </div>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <a href="#">
                    <img src="https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd1c89ec8-a4a6-4acb-bb75-d5a9eca17880.png?h=32&f=webp" width="32" height="32" alt="Icon 1" />
                </a>
                <a href="#">
                    <img src="https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd6e2e8b6-d39a-4391-916d-1079b419b60d.png?h=32&f=webp" width="32" height="32" alt="Icon 2" />
                </a>
                <a href="#">
                    <img src="https://images.cdn.prd.api.discomax.com/2023%2F4%2F11%2Fb33a4043-516c-441a-862d-6c9ee2e21fb5.png?w=64&f=webp" width="32" height="32" alt="Icon 3" />
                </a>
            </div>
        </div>
    </nav>

}

export default Hbo_nav;
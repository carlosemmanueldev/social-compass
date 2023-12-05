import {Link, useLocation} from "react-router-dom";
import img from "../../assets/images/logo-compass.svg";
import { useEffect, useState } from "react";

function SideMenu() {
    const location = useLocation();

    const [showMenu, setShowMenu] = useState(true)

    function verifyMenu(pathName: string){
        if(
            pathName === "/" ||
            pathName === "login" || 
            pathName === "/register" ){
            setShowMenu(false);
        }else{
            setShowMenu(true);
        }
    }

    useEffect(()=>{
        verifyMenu(location.pathname);
    },[location.pathname]);
    
    return (
        showMenu &&
        <aside className="side-menu">
            <div className="side-menu_div">
                <img src={img} alt=""/>

                <ul className="side-menu_list">
                    <li className="side-menu_item">
                        <Link className="side-menu_link first-child" to="/home">Página Inicial</Link>
                    </li>

                    <li className="side-menu_item">
                        <Link className="side-menu_link" to="/profile">Meu Perfil</Link>
                    </li>

                    <li className="side-menu_item">
                        <Link className="side-menu_link" to="#">Marketplace</Link>
                    </li>

                    <li className="side-menu_item">
                        <Link className="side-menu_link last-child" to="/logout">Sair</Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default SideMenu;
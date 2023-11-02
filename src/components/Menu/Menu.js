import './Menu.css';
import MenuButton from '../MenuButton';
import { useState } from 'react';

const Menu = ({ items }) => {
    const [selected, setSelected] = useState();

    return (
        <div className="menu">
            <div className="logo">
                WEB PORTAL LOGO
            </div>
            <div>
            <ul>
                {items.map(i => {
                    return (
                        <li
                            className= {selected === i.name ? 'selected' : ''}
                            key={i.name}
                            onClick={() => setSelected(i.name)}
                        >
                            {i.name}
                            {i.subMenu.length > 0 && <MenuButton/>}
                        </li>
                    );
                })}
            </ul>
            </div>
        </div>
    );
};

export default Menu;
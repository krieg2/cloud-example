import './Header.css';
import MenuButton from '../MenuButton';

const Header = ({ username }) => {
    return (
        <div className="header">
            <header className="header-text">
                {`Hi, ${username}`}
                <MenuButton />
            </header>
           
        </div>
    );
};

export default Header;
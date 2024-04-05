import './Header.scss';
import hamburgerImg from '../../assets/icons/hamburger.svg';
import logoImg from '../../assets/icons/Company Logo.svg';
import avatarImg from '../../assets/icons/Avatar.svg';

export default function Header() {
  
    return (
      <header className="header">
        <div className="header__container">
        <div className="header__image-wrapper">
            <img src={hamburgerImg} className="header__hamburger" alt="hamburger menu" />
          </div>
          <div className="header__image-wrapper">
            <img src={logoImg} className="header__image" alt="logo" />
          </div>
          <div className="header__image-wrapper">
            <img src={avatarImg} className="header__avatar" alt="avatar" />
          </div>
        </div>
      </header>
    );
  }
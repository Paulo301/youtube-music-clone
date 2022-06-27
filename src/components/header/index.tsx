import { ReactComponent as LogoImg } from '../../assets/logo.svg';
import { ReactComponent as SearchImg } from '../../assets/search.svg';
import { ReactComponent as ChromecastImg } from '../../assets/chromecast.svg';
import { ReactComponent as MenuImg } from '../../assets/menu.svg';

import './style.scss';

export const Header: React.FC = () => {
  return (
    <nav className='header'>
      <a href="/">
        <LogoImg />
        Music
      </a>

      <ul>
        <li className='active'>
          <span>Início</span>
        </li>
        <li>
          <span>Explorar</span>
        </li>
        <li>
          <span>Biblioteca</span>
        </li>
        <li>
          <SearchImg fill="currentColor" stroke="currentColor" width='1.5rem' height='1.5rem' />
          <span>Pesquisar</span>
        </li>
      </ul>

      <section className='buttons'>
        <button
          type='button'
          className='icon-button'
        >
          <ChromecastImg  fill="currentColor" stroke="currentColor" />
        </button>
        <button
          type='button'
          className='icon-button'
        >
          <MenuImg  fill="currentColor" stroke="currentColor" />
        </button>
        <button
          type='button'
          className='login-button'
        >
          FAZER LOGIN
        </button>
      </section>
    </nav>
  );
}
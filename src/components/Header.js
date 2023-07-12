import { Link } from 'react-router-dom';
import Styles from './styles/Header.module.css';

const headerStyle = {
  display: 'flex',
  'margin-top': '0',
  color: 'white',
};
const Header = () => (
  <>
    <nav style={headerStyle} className={Styles.myHeader}>
      <h2>Math Magician</h2>
      <ul>
        <li>
          <Link to="/" style={{ color: 'white' }}>Home</Link>
        </li>
        <li>
          <Link to="/calculator" style={{ color: 'white' }}>Calculator</Link>
        </li>
        <li>
          <Link to="/quotes" style={{ color: 'white' }}>Quotes</Link>
        </li>
      </ul>
    </nav>
  </>
);
export default Header;

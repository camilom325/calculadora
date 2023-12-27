import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <Navbar data-bs-theme="dark" Style="background-color: #2D728F; padding-left: 2%; height: 10vh; min-height: 50px; z-index:2; user-select: none">
          <Navbar.Brand Style="font-size: 170%">
            <img
              alt=""
              src={require('../assets/android-chrome-192x192.png')}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <strong>Calculadora</strong>
          </Navbar.Brand>
      </Navbar>
  );
}

export default Navigation;
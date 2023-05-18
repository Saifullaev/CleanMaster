import LogoSvg from '../assets/img/05.jpg';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="80px" height="80" src={LogoSvg} alt="Pizza logo" />
          <div>
            <h1>KZCleanMaster</h1>
            <p>будет чи100%</p>
          </div>
        </div>
        <div className="header__cart">

        </div>
      </div>
    </div>
  );
}

export default Header;

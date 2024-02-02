import React from 'react';
// eslint-disable-next-line import/extensions
import UserButton from './UserButton.jsx';
// eslint-disable-next-line import/extensions
import Provider from '../../contexts/user/Provider.jsx';

function Header() {
  return (
    <Provider>
      <header className="head">
        <div className="logo">
          <a href="/"><img alt="logoVetonat" className="logo" src="/img/general/veto_logo.png" /></a>
        </div>
        <div className="presentation">
          <div>Vetonat</div>
          <div>Votre vétérinaire à</div>
          <div>porté de clic</div>
        </div>

        <div className="espace">
          <UserButton />
        </div>
      </header>
    </Provider>

  );
}

export default Header;

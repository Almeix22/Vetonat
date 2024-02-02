import React, { useContext } from 'react';
import UserContext from '../../contexts/user';
// eslint-disable-next-line import/extensions
import { loginUrl, logoutUrl } from '../../services/api/vetonat.js';

function UserButton() {
  const user = useContext(UserContext);
  return (
    <div>
      {user === undefined ? (
          <button>
        <div className="loading"> Chargement ... </div>
        </button>
      ) : (
        <div>
          {user === null ? (
              <button>
            <a href={loginUrl()}>
              Connexion
            </a>
                <img src="/img/general/client.png" />
              </button>
          ) : (
            <div>
              <button>
              <a href={logoutUrl()}>
                Déconnexion
              </a>
                <img src="/img/general/client.png" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>

  );
}

export default UserButton;

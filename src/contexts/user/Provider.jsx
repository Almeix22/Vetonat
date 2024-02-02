import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMe } from '../../services/api/vetonat';
import userContext from '.';

function Provider({ children }) {
  const [userData, setUserData] = useState(undefined);
  useEffect(() => {
    getMe().then((json) => setUserData(json));
  }, []);

  return (
    <userContext.Provider value={userData}>{children}</userContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

Provider.defaultProps = {
  children: {},
};
export default Provider;

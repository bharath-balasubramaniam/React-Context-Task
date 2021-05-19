import React, { useState } from "react";

const UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
  let [list, setlist] = useState([]);
  return (
    <UserContext.Provider value={{ list, setlist }}>
      {children}
    </UserContext.Provider>
  );
};

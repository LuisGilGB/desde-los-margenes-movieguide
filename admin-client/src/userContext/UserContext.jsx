import React from 'react';

const emptyObject = {};
const UserContext = React.createContext(emptyObject);

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;
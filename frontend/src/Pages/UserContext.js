import {createContext} from 'react';
import { useState } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({children}){
    const [userInfo,setUserInfo] = useState("");
    return(
        <UserContextProvider value={{userInfo,setUserInfo}}>
            {children}
        </UserContextProvider>
    );
}

// accepts children as a prop
// UserContext = createContext(): This creates a new context object, which is then provided to components via UserContextProvider
// children as a prop, which is a common pattern in React when you want to wrap other components inside a provider
// 
// allows other components wrapped by UserContextProvider to access and modify the userInfo state via UserContext
import { createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({children}) {
    const [alunos, setAlunos] = useState('Nome basico');
    return (
        <UserContext.Provider value={{alunos, setAlunos}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
type authContextType = {
    user: boolean;
    login: () => void;
    logout: () => void;
};

const authContextDefaultValues: authContextType = {
    user: false,
    login: () => { },
    logout: () => { },
};
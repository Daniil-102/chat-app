import { createContext, useContext, useState } from 'react';

const SoundContext = createContext();

export const useSoundContext = () => useContext(SoundContext);

export const SoundContextProvider = ({ children }) => {
    const [isSoundOn, setIsSoundOn] = useState(true);

    const toggleSound = () => {
        setIsSoundOn((prev) => !prev);
    };

    return (
        <SoundContext.Provider value={{ isSoundOn, toggleSound }}>
            {children}
        </SoundContext.Provider>
    );
};

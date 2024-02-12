import React, { createContext, useContext, useEffect, useState } from 'react';

const UnreadMessagesContext = createContext();

export const useUnreadMessagesContext = () => useContext(UnreadMessagesContext);

export const UnreadMessagesProvider = ({ children }) => {
    const [unreadConversations, setUnreadConversations] = useState(() => {
        const storedUnreadConversations = localStorage.getItem('unreadConversations');
        return storedUnreadConversations ? JSON.parse(storedUnreadConversations) : [];
    });

    useEffect(() => {
        localStorage.setItem('unreadConversations', JSON.stringify(unreadConversations));
    }, [unreadConversations]);

    const addUnreadConversation = (conversationId) => {
        setUnreadConversations(prevUnreadConversations => [...prevUnreadConversations, conversationId]);
    };

    const removeUnreadConversation = (conversationId) => {
        setUnreadConversations(prevUnreadConversations => prevUnreadConversations.filter(id => id !== conversationId));
    };

    return (
        <UnreadMessagesContext.Provider value={{ unreadConversations, addUnreadConversation, removeUnreadConversation }}>
            {children}
        </UnreadMessagesContext.Provider>
    );
};

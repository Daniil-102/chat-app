import React, { createContext, useContext, useState } from 'react';

const UnreadMessagesContext = createContext();

export const useUnreadMessagesContext = () => useContext(UnreadMessagesContext);

export const UnreadMessagesProvider = ({ children }) => {
    const [unreadConversations, setUnreadConversations] = useState([]);

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

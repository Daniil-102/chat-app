import { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import { useConversation } from '../zustand/useConversation';
import notification from '../assets/sound/notification.mp3'
import { useSoundContext } from '../context/SoundContext';

export const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { setMessages } = useConversation();
    const { isSoundOn, toggleSound } = useSoundContext();

    useEffect(() => {
        let sound;

        if (!socket) return;

        const handleNewMessage = (newMessage) => {
            newMessage.shouldShake = true;
            if (isSoundOn) {
                sound = new Audio(notification);
                sound.play();
            }
            setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages, newMessage];
                return updatedMessages;
            });
        };

        socket.on("newMessage", handleNewMessage);

        return () => {
            socket.off("newMessage", handleNewMessage);
        };
    }, [socket, setMessages, isSoundOn]);

    return { isSoundOn, toggleSound };
};


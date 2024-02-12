import { useEffect, useState } from 'react'
import { useSocketContext } from '../context/SocketContext'
import { useConversation } from '../zustand/useConversation';
import notification from '../assets/sound/notification.mp3'
import { useSoundContext } from '../context/SoundContext';

export const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();
    const { isSoundOn, toggleSound } = useSoundContext()

	useEffect(() => {
        let sound 
        
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
            if (isSoundOn) {
                sound = new Audio(notification);
                sound.play();
            }
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages, isSoundOn]);


    return { isSoundOn, toggleSound };
}

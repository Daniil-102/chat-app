import { useEffect, useState } from 'react'
import { useSocketContext } from '../context/SocketContext'
import { useConversation } from '../zustand/useConversation';
import notification from '../assets/sound/notification.mp3'
import { useSoundContext } from '../context/SoundContext';
import { useUnreadMessagesContext } from '../context/UnreadMessageContext';

export const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages, selectedConversation  } = useConversation();
	const { addUnreadConversation } = useUnreadMessagesContext()
    const { isSoundOn, toggleSound } = useSoundContext()

	useEffect(() => {
        let sound 
        
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
            if (isSoundOn) {
                sound = new Audio(notification);
                sound.play();
            }
			 if (selectedConversation?._id === newMessage.senderId) {
				setMessages([...messages, newMessage])
			} else {
				addUnreadConversation(newMessage.senderId);
			}
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages, selectedConversation, isSoundOn]);


    return { isSoundOn, toggleSound };
}

import { useEffect, useState } from 'react'
import { useSocketContext } from '../context/SocketContext'
import { useConversation } from '../zustand/useConversation';
import notification from '../assets/sound/notification.mp3'
import { useSoundContext } from '../context/SoundContext';

export const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages, selectedConversation  } = useConversation();
    const { isSoundOn, toggleSound } = useSoundContext()

	useEffect(() => {
        let sound 
        
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
            if (isSoundOn) {
                sound = new Audio(notification);
                sound.play();
            }
			// if (selectedConversation && newMessage.conversationId === selectedConversation._id) {
            //     setMessages(prevMessages => [...prevMessages, newMessage]);
            // }
			setMessages([...messages, newMessage])
			console.log(messages, newMessage)
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages, selectedConversation, isSoundOn]);


    return { isSoundOn, toggleSound };
}

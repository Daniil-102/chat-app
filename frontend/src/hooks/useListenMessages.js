export const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();
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
    }, [socket, setMessages, messages, isSoundOn]);

    return { isSoundOn, toggleSound };
};

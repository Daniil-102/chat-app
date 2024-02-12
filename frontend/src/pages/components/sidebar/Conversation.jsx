import { useSocketContext } from '../../../context/SocketContext'
import { useUnreadMessagesContext } from '../../../context/UnreadMessageContext';
import { useConversation } from "../../../zustand/useConversation";

export const Conversation = ({ conversation, lastIdx, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const { removeUnreadConversation, unreadConversations } = useUnreadMessagesContext()

    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);
    const isUnread = unreadConversations.includes(conversation._id)


    return (
        <div onClick={() => removeUnreadConversation(conversation._id)} className='relative'>
            <div
                className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}
			`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-12 rounded-full'>
                        <img src={conversation.profilePic} alt='user avatar' />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                        <div className="">

                            <span className='text-xl ml-1'>{emoji}</span>
                        </div>
                    </div>
                </div>
            </div>
            {isUnread && <div className='unread-messages' />}

            {!lastIdx && <div className='divider my-0 py-0 h-1' />}
        </div>
    );
};


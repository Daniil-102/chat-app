import React from 'react'
import { Conversation } from './Conversation'
import { useGetConversations } from '../../../hooks/useGetConversation'
import { getRandomEmoji } from '../../../utils/emojis'

export const Conversations = () => {
    const { loading, conversations } = useGetConversations()

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {loading ? <span className='loading loading-spinner' /> :
                conversations.map((conversation, i) => (
                    <Conversation
                        key={conversation._id}
                        conversation={conversation}
                        emoji={getRandomEmoji()}
                        lastIdx={i === conversations.length - 1}
                    />
                ))
            }
        </div>
    )
}

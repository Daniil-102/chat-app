import React, { useEffect, useRef, useState } from 'react'
import { Message } from './Message'
import { useGetMessages } from '../../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import { useListenMessages } from '../../../hooks/useListenMessages'

export const Messages = () => {
    const { messages, loading } = useGetMessages()
    const lastMessageRef = useRef(null)
    useListenMessages()

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }, [messages])

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {loading && [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)}

            {!loading && messages.length === 0 && (
                <p className="text-center">Send a message to start the conversation</p>
            )}

            {!loading && messages.map((message) => (
                <div key={message._id} ref={lastMessageRef}><Message key={message._id} message={message} /></div>
            ))}

        </div>
    )
}

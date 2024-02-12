import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { MessageContainer } from '../components/messages/MessageContainer'

export const Home = () => {
    return (
        <div className='flex sm:h-[450px] md:h-[550px] max-w-[900px] w-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar />
            <MessageContainer />
        </div>
    )
}

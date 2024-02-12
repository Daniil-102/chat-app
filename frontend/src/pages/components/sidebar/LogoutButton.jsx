import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { useLogout } from '../../../hooks/useLogout'
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { useListenMessages } from '../../../hooks/useListenMessages';

export const LogoutButton = () => {
    const { isSoundOn, toggleSound } = useListenMessages()
    const { loading, logout } = useLogout()

    return (
        <div className='mt-auto flex justify-between'>
            {loading ? <span className='loading loading-spinner'></span> : <BiLogOut onClick={logout} className='w-6 h-6 text-white cursor-pointer' />}
            <button onClick={toggleSound} className='mr-1'>{isSoundOn ? <FaVolumeUp /> : <FaVolumeMute />}</button>

        </div>
    )
}

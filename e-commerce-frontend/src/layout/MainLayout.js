import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import useCheckToken from '../hooks/useCheckToken'
import AiChatWidget from '../components/AiChatWidget'

function MainLayout()
{
    useCheckToken();
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <AiChatWidget />
        </div>
    )
}

export default MainLayout

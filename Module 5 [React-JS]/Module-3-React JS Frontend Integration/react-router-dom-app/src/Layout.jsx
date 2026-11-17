import React from 'react'
import NavBarApp from './NavBarApp'
import ContentApp from './ContentApp'
import FooterApp from './FooterApp'

export default function Layout() {
    return (
        <div>
            <NavBarApp />
            <ContentApp />
            <FooterApp />
        </div>
    )
}
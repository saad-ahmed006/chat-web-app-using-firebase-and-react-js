import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Chats from './Chats'
export default function SlideBar() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

"use client"
import Image from 'next/image'
import { useState } from 'react';

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Profile from './Profile';
import AllDemo from './AllDemo';
import Demo from './Demo';

export default function Home() {const [selectedContent, setSelectedContent] = useState('main');

  const handleContentChange = (content:string) => {
    setSelectedContent(content);
  };

  return (
    <div className="app">
      <Header />
      <div className="mainBody">
      <Navbar handleContentChange={handleContentChange} />
      <main className="main-content">
        {selectedContent === 'main' && <h1>Welcome to the Main Page</h1>}
        {selectedContent === 'profile' && <Profile />}
          {selectedContent === 'all-demo' && <AllDemo />}
            {selectedContent === 'demo' && <Demo/>}
       
      </main>
      </div>
      <Footer />
    </div>
  )
}
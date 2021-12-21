import React, {useState} from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Sell from './pages/sell'
import Question from './pages/question'
import Contact from './pages/contact'
import './App.css';
import logo from './static/imgs/logo.png'

function App() {
  const navTitle = [
    {name: '首頁', router: '/'},
    {name: '關於萌犬', router: '/about'},
    {name: '萌犬出售區', router: '/sell'},
    {name: '常見問題', router: '/question'},
    {name: '聯絡我們', router: '/contact'},
  ]
  return (
    <div className="App">
      <div className='h-20 z-10 fixed top-0 inset-x-0 nav flex justify-around  items-center bg-red-100 '>
        <div className='flex items-center'>
          <Link className='origin-center hover:origin-top logo w-20' to='/'><img className='w-full' src={logo} alt='圖片無法顯示'/></Link>
          <div className='ml-3 font-bold'>漁夫寵物店</div>
        </div>
        <div className='items'>
          <div className='justify-between flex-col flex-auto '>
            {navTitle.map((obj, key) => {
              return (
                <Link className={`${navTitle.length - 1 !== key && 'border-r-2'} font-bold px-5 border-red-400`}
                      to={obj.router}>{obj.name}</Link>
              )
            })}
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="sell" element={<Sell/>}/>
        <Route path="question" element={<Question/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;

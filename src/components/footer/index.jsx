import React from 'react';
import logo from "../../static/imgs/logo.png";
import store from "../../static/imgs/store.png";
import location from "../../static/imgs/location.png";
import phone from "../../static/imgs/mobile-phone.png";
import time from "../../static/imgs/time.png";
import './index.scss'

function Footer() {
  return (
    <div className='footer'>
      <div className='msg'>
        <div className='msg-logo'>
          <img src={logo}/>
        </div>
        <div className='msg-list'>
          <div>
            <div><img src={store}/></div>
            <span>萌犬寵物店</span>
          </div>
          <div>
            <div><img src={location}/></div>
            <span>新北市板橋區萬安街53巷32號</span>
          </div>
          <div>
            <div><img src={phone}/></div>
            <span>0986-951-028</span>
          </div>
          <div>
            <div><img src={time}/></div>
            <span>營業時間: 12:00 – 21:00</span>
          </div>
        </div>
      </div>
      <div className='list-panel'>
        <p>首頁</p>
        <ul>
          <li>&gt;&nbsp;關於萌犬</li>
          <li>&gt;&nbsp;萌犬出售區</li>
        </ul>
      </div>
      <div className='list-panel'>
        <p>萌犬介紹</p>
        <ul>
          <li>&gt;&nbsp;柴犬</li>
          <li>&gt;&nbsp;博美</li>
        </ul>
      </div>
      <div className='list-panel'>
        <p>常見問題</p>
        <ul>
          <li>&gt;&nbsp;常見問題</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;

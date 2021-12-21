import React from 'react';
import './index.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import bannerImg1 from '../../static/imgs/homebanner1.jpg'
import bannerImg2 from '../../static/imgs/homebanner2.jpg'
import bannerImg3 from '../../static/imgs/homebanner3.jpg'
import redFootPrint from '../../static/imgs/img11.png'
import whiteFootPrint from '../../static/imgs/img12.png'
import carShip from '../../static/imgs/img13.png'
import ensureImg1 from '../../static/imgs/homeEnsure1.png'
import ensureImg2 from '../../static/imgs/homeEnsure2.png'
import ensureImg3 from '../../static/imgs/homeEnsure3.png'
import ensureImg4 from '../../static/imgs/homeEnsure4.png'
import ensureImg5 from '../../static/imgs/homeEnsure5.png'
import dog01 from '../../static/imgs/dog01.jpg'
import dog02 from '../../static/imgs/dog02.jpg'
import dog03 from '../../static/imgs/dog03.jpg'
import dog04 from '../../static/imgs/dog04.jpg'
import dog05 from '../../static/imgs/dog05.jpg'
import dog06 from '../../static/imgs/dog06.jpg'
import dog07 from '../../static/imgs/dog07.jpg'
import dog08 from '../../static/imgs/dog08.jpg'
import dog09 from '../../static/imgs/dog09.jpg'
import dog10 from '../../static/imgs/dog10.jpg'
import dog11 from '../../static/imgs/dog11.jpg'
import dog12 from '../../static/imgs/dog12.jpg'
import customer01 from '../../static/imgs/customer01.jpg'
import customer02 from '../../static/imgs/customer02.jpg'
import customer03 from '../../static/imgs/customer03.jpg'
import ad01 from '../../static/imgs/advertise01.jpg'
import ad02 from '../../static/imgs/advertise02.jpg'
import ad03 from '../../static/imgs/advertise03.jpg'

function Home() {
  let ensureAry = [
    {
      img: ensureImg1,
      title: '價格親民',
      content1: '價格親民公開',
      content2: '同等級數的價格最優惠'
    },
    {
      img: ensureImg2,
      title: '絕對誠信',
      content1: '照片實體拍攝',
      content2: '絕不使用任何修圖軟體'
    },
    {
      img: ensureImg3,
      title: '血統優質',
      content1: '絕無近親交配',
      content2: '拒絕非法繁殖'
    },
    {
      img: ensureImg4,
      title: '健康保障',
      content1: '幼犬售出前依月數',
      content2: '完成預防針注射驅蟲'
    },
    {
      img: ensureImg5,
      title: '買賣契約',
      content1: '簽訂買賣契約書',
      content2: '售後服務安全又可靠'
    },
  ]
  let fallAry = [
    {name: '柴犬寶寶', img: dog01},
    {name: '柴犬寶寶', img: dog02},
    {name: '柴犬寶寶', img: dog03},
    {name: '柴犬寶寶', img: dog04},
    {name: '柴犬寶寶', img: dog05},
    {name: '博美寶寶', img: dog06},
    {name: '博美寶寶', img: dog07},
    {name: '博美寶寶', img: dog08},
    {name: '博美寶寶', img: dog09},
    {name: '博美寶寶', img: dog10},
    {name: '柴犬寶寶', img: dog11},
    {name: '柴犬寶寶', img: dog12},

  ]
  let customerAry = [customer01, customer02, customer03]
  return (
    <div className='home'>
      <Carousel showArrows={false} showThumbs={false} showIndicators={false} showStatus={false} autoPlay={true}
                infiniteLoop={true}
                interval={4000}>
        <div>
          <div className='banner'>
            <img src={bannerImg1}/>
            <div className='banner-msg'>
              <p>養狗原來<span>好處</span>那麼多</p>
              <ul>
                <li><img src={redFootPrint}/>是家裡最棒的心理醫生</li>
                <li><img src={redFootPrint}/>貓狗陪伴的小孩更幸福</li>
                <li><img src={redFootPrint}/>有益高齡者的身心健康</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className='banner'>
            <img src={bannerImg2}/>
            <div className='banner-msg2'>
              <p><span>堅持</span>只給毛寶貝最舒適安全的環境</p>
              <ul>
                <li><img src={whiteFootPrint}/>全台少數粉絲專業破萬讚的店家</li>
                <li><img src={whiteFootPrint}/>上百位網友一致認可好評推薦</li>
                <li><img src={whiteFootPrint}/>擁有合法營業特定寵物業許可證</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className='banner'>
            <img src={bannerImg3}/>
            <div className='banner-msg3'>
              <p>外縣市運送服務
                <div><img src={carShip}/></div>
              </p>
              <span>九人座小巴專業寄送狗狗</span>
            </div>
          </div>
        </div>
      </Carousel>
      <div className='ensure-panel'>
        {ensureAry.map((obj, key) => {
          return (
            <div className='ensure-item' key={key}>
              <div><img src={obj.img}/></div>
              <p>{obj.title}</p>
              <span>{obj.content1}</span>
              <span>{obj.content2}</span>
            </div>
          )
        })}
      </div>
      <div className='fall-panel'>
        <div className='title'>
          <p>萌犬介紹</p>
          <span>特寵業字第A1070580號</span>
          <div><img src={redFootPrint}/>DOGS<img src={redFootPrint}/></div>
        </div>
        <div className='body'>
          {fallAry.map((obj, key) => {
            return (
              <div key={key} className='card'>
                <div><img src={obj.img}/></div>
                <span>{obj.name}</span>
              </div>
            )
          })}
        </div>
        <span>更多萌照</span>
      </div>
      <div className='advertise-panel'>
        <div className='video-card'>
          <div>
            <span>萌犬實拍影片</span>
            <a href='https://www.youtube.com/channel/UC0hqSH4NfyMifJmijsfrHDw'>觀看更多影片</a>
          </div>
          <iframe className='iframe' allow="autoplay" width='100%'  frameBorder="0"
                  src='https://www.youtube.com/embed/Ov0rlihBxMA?enablejsapi=1&origin=http%3A%2F%2Fwww.petshoptw.com'></iframe>

        </div>
        <div className='customer-card'>
          <div>
            <span>客戶好評推薦</span>
            <a
              href='https://www.google.com.tw/search?q=%E8%90%8C%E7%8A%AC%E5%AF%B5%E7%89%A9%E5%BA%97&rlz=1C1ASRM_enTW624TW624&oq=%E8%90%8C%E7%8A%AC%E5%AF%B5%E7%89%A9%E5%BA%97&aqs=chrome..69i57j69i61l3j35i39j0.1727j0j8&sourceid=chrome&ie=UTF-8#lrd=0x3442a8362ce9df77:0xffc791024aaa82fc,1,,,'>更多客戶分享</a>
          </div>
          <Carousel className='carousel' showArrows={false} showThumbs={false} showIndicators={false} showStatus={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={4000}>
            {customerAry.map((value, key) => {
              return (
                <div key={key}>
                  <img src={value}/>
                </div>
              )
            })}
          </Carousel>

        </div>
      </div>
      <div className='advertise-panel'>
        <div className='left-card'>
            <img src={ad01}/>
            <div>
              <p>寵物是家裡最棒的醫生</p>
              <span>情緒方面，可以減少抑鬱、焦慮和緊張，常用於心理治療。</span>
              <span>健康方面，可以降低血壓，提高免疫力，降低疾病發生率。</span>
            </div>
        </div>
        <div className='right-card'>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import './index.scss'
import banner from '../../static/imgs/about_banner.jpg'
import leftBanner from '../../static/imgs/about_left.jpg'
import Footer from "../../components/footer";

function About() {
  return (
    <div className='about'>

      <div className='banner'>
        <img src={banner}/>
      </div>
      <div className='sec-banner'>
        <div>
          <img src={leftBanner}/>
        </div>
        <div>
          選擇萌犬寵物的原因
        </div>
      </div>
      <div className='txt-panel'>
        <span>
           <p>一生之中如果能有段時間有寵物，那真的很棒。可能是小時候，可能是老年後，也可能一直都有。</p>
          <p>你會傻傻地的和牠講話，癡癡地看著牠瞎跑，慢慢地輕撫牠的皮毛，然後睜睜地看著牠睡著。</p>
          <p>日復一日、年復一年，一開始的擔心其實都是多慮，滿腦子的問題其實都能看Youtube學習，你能照顧好自己，能交男女朋友，還能照顧父母和小孩，照顧隻寵物簡直綽綽有餘。</p>
          <p>寵物來到你的世界，牠在學習，我們也在學習，牠做牠的人生功課，我們也在做我們的，彼此成就彼此，你是牠的主人，也是唯一的家人。</p>
        </span>
        <span>
            <p>萌犬寵物店內的寵物都是來自於合法犬舍、貓舍，每一隻狗狗或貓咪都是經過細心照料。</p>
          <p>我們相信，只要細心照顧他們，他們也就能越健康、開心地陪伴我們。</p>
          <p>當然，依目前醫學狀態下無法做到一輩子不會感冒、發燒或有其他的狀況，但我們盡力做好每個步驟，讓寵物可以開心地成長、陪伴。</p>
         </span>
        <span>
           <p>在萌犬寵物尋找寵物回家陪伴，我們跟您一樣的重視。</p>
          <p>在事前的把關上，我們挑選的狗爸媽、貓爸媽上不會過度培育，不會近親交配。</p>
          <p>在中間的照顧上，我們每日清潔、消毒，給予乾淨的飲水、飼料，並且在購買的當下可以清楚的檢查寵物的耳朵、眼睛、咬合、皮膚等狀況，也會有詳細的飼養說明、買賣契約保障、免費晶片植入及轉讓。</p>
          <p>在事後的服務上，有任何問題都可以用LINE隨時保持聯繫，讓第一次飼養的毛爸媽也能安心飼養。</p>
        </span>
      </div>
      <Footer/>
    </div>
  );
}

export default About;

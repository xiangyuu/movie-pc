import React, {useState} from 'react';
import redFootPrint from "../../static/imgs/img11.png";
import './index.scss'
import dog01 from "../../static/imgs/dog01.jpg";
import dog02 from "../../static/imgs/dog02.jpg";
import dog03 from "../../static/imgs/dog03.jpg";
import dog04 from "../../static/imgs/dog04.jpg";
import dog05 from "../../static/imgs/dog05.jpg";
import dog06 from "../../static/imgs/dog06.jpg";
import dog07 from "../../static/imgs/dog07.jpg";
import dog08 from "../../static/imgs/dog08.jpg";
import dog09 from "../../static/imgs/dog09.jpg";
import dog10 from "../../static/imgs/dog10.jpg";
import dog11 from "../../static/imgs/dog11.jpg";
import dog12 from "../../static/imgs/dog12.jpg";

function Fall(props) {
  const [filterSelected, setFilterSelected] = useState('')
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
  return (
    <div className='fall'>
      <div className='title'>
        <p>萌犬介紹</p>
        {props.isFilter ?
          <ul>
            <li
              onClick={()=>setFilterSelected('ALL')}>
              ALL
            </li>
            <li
              onClick={()=>setFilterSelected('柴犬')}>
              柴犬
            </li>
            <li
              onClick={()=>setFilterSelected('博美')}>
              博美
            </li>
          </ul>
          :
          <>
            <span>特寵業字第A1070580號</span>
            <div><img src={redFootPrint}/>DOGS<img src={redFootPrint}/></div>
          </>
        }
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
      {props.more && <span>更多萌照</span>}
    </div>
  )
}

export default Fall;

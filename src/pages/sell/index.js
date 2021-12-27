import React from 'react';
import banner from "../../static/imgs/sell_banner.jpg";
import Fall from "../../components/fall";

function Sell() {
  return (
    <div className='sell'>
      <div className='banner'>
        <img src={banner}/>
      </div>
      <Fall more={false} isFilter={true}/>
    </div>
  );
}

export default Sell;

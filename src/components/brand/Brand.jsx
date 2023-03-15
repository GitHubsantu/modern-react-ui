import React from 'react';
import { google, slack, atLassian, dropbox, shopify} from './imports';
import './Brand.css';


function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
    <div>
      <img src={google} alt="google" />
    </div>
    <div>
      <img src={slack} alt="slack" />
    </div>
    <div>
      <img src={atLassian} alt="atLassian" />
    </div>
    <div>
      <img src={dropbox} alt="dropbox" />
    </div>
    <div>
      <img src={shopify} alt="shopify" />
    </div>
    </div>
  )
}

export default Brand
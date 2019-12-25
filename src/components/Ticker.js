import React from 'react';
import TickerTitle from './TickerTitle';
import Display from './Display';
import Buttons from './Buttons';

const Ticker = props => {
  return (
    <div className='ticker-container'>
      <TickerTitle />
      <Display />
      <Buttons />
    </div>
  )
};

export default Ticker;
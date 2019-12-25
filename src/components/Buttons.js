import React, { useState } from 'react';

const Buttons = props => {

  //todo: set up editing states for the type b buttons

  return (
    <>
    <div className='button-typea'>+</div>
    <div className='button-typea'>-</div>
    <span><i class="fas fa-recycle" /></span>
    <div className='button-typeb'>Start Value</div>
    <div className='button-typeb'>Counter Name</div>
    </>
  )
};

export default Buttons;
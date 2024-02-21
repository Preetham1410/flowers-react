import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react'
// import Gifts from './gifts';+

import Flowers from './flowers';
import List from './list';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import '../App.css';
import whatkind from '../Images/What-Kind-Of-Flowers-Are-Best-For-Anniversary-Gifts.png';
import motherimg from '../Images/mothers-day-gifts.png';
import giftflowerimg from '../Images/gift-flowers.jpg';
import './home.css'

function Home() {
  // const [allbtn, setAllbtn] = useState(true);
  // const [giftbtn, setGiftbtn] = useState(false);
  // const [flwrbtn, setFlwrbtn] = useState(false);
  const [srchbtn, setSrchbtn] = useState(false);

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  // const all = () => {
  //   setGiftbtn(false);
  //   setFlwrbtn(false);
  //   setSrchbtn(false)
  //   setAllbtn(true);
  // }
  // const gift = () => {
  //   setAllbtn(false);
  //   setFlwrbtn(false)
  //   setSrchbtn(false)
  //   setGiftbtn(true);
  // }
  // const flower = () => {
  //   setAllbtn(false);
  //   setGiftbtn(false);
  //   setSrchbtn(false)
  //   setFlwrbtn(true);
  // }
  const search = () => {
    // setAllbtn(false);
    // setGiftbtn(false);
    // setFlwrbtn(false);
    if (inputText === "") {
      setSrchbtn(false)
    } else {
      setSrchbtn(true);
    }
  }

  return (
    <>
      {/* <div className='homebuts'> */}
        {/* <div>
          <Button className='butts' onClick={all}>All</Button>
          <Button className='butts' onClick={gift}>Gifts</Button>
          <Button className='butts' onClick={flower}>Flowers</Button>
        </div> */}
      {/* </div> */}
      <Slide
          autoplay={true}
          onChange={function noRefCheck(){}}
          onStartChange={function noRefCheck(){}}
        >
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${whatkind})` }}>
            </div>
        </div>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${motherimg})` }}>
            </div>
        </div>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${giftflowerimg})` }}>
            </div>
        </div>
        </Slide>
        <div className='inpss'>
          <Input className='inps' onChange={inputHandler} placeholder='Search...' />
          <Button className='inps' onClick={search}>Search</Button>
        </div>
      <div className='items'>
        {/* {giftbtn === true && <Gifts />}
        {flwrbtn === true && <Flowers />}
        {allbtn === true && <><Gifts /><Flowers /></>} */}
        {srchbtn === false && <Flowers/>}
        {srchbtn === true && <List input={inputText} />}
      </div>
    </>
  )
};

export default Home;
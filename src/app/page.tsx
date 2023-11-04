'use client';


import Card from './components/cards/card'
import handleClick from './components/handles/handleClick'
import './page.css'

function Home() {
  return (
    <>
      <div className='bodyOfCalc'>
        <h1 className='headOfCalc'>Calculator</h1>
        <div className='screenOfCalc' >
          <p className='screen' >0</p>
        </div>
        <div className='divOfCards' onClick={handleClick} >
          <Card number='9' />
          <Card number='8' />
          <Card number='7' />
          <Card number='del' />
          <Card number='6' />
          <Card number='5' />
          <Card number='4' />
          <Card number='+' />
          <Card number='3' />
          <Card number='2' />
          <Card number='1' />
          <Card number='-' />
          <div className='equal'>
            <Card number='=' />
          </div>
          <Card number='0' />
          <Card number='/' />
          <Card number='*' />
        </div>
        <div className='lastOfCards' onClick={handleClick} >
          <Card number='Reset' />
        </div>
      </div>
      <div className="footer">
        coded by <a href="https://linkedin.com/in/abufadelin" target="_blank" >abufadel</a>
      </div>
    </>
  )
}


export default Home;
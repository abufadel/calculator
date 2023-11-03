import Card from './components/cards/card'
import './page.css'
// import './handles/handleClick'

export default function Home() {
  return (
    <>
      <div className='bodyOfCalc'>
        <h1 className='headOfCalc'>Calculator</h1>
        <div className='screenOfCalc' >
          <p>0</p>
        </div>
        <div className='divOfCards' >
          <Card number='9' />
          <Card number='8' />
          <Card number='7' />
          <Card number='Del' />
          <Card number='6' />
          <Card number='5' />
          <Card number='4' />
          <Card number='+' />
          <Card number='3' />
          <Card number='2' />
          <Card number='1' />
          <Card number='-' />
          <Card number='.' />
          <Card number='0' />
          <Card number='/' />
          <Card number='X' />
        </div>
        <div className='lastOfCards'>
          <Card number='Reset' />
          <Card number='=' />
        </div>
      </div>
      
      {
        
      }
    </>
  )
}

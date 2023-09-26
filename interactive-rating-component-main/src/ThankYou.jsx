import thankYouIcon from './assets/illustration-thank-you.svg'

const ThankYou = ({number}) => {
  return <section className="card thank-you">
    
   <img src={thankYouIcon} alt='thank-you-icon' className='icon-img'/>
   
   <p className='result'>You selected {number} out of 5</p>
   <h1>Thank you!</h1>
   <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </section>
}
export default ThankYou


import { useNavigate } from 'react-router-dom';
import starIcon from './assets/icon-star.svg';



const HowDidWeDo = ({ number, setNumber }) => {
  const navigate = useNavigate();
 

  const numberButtons = [];
  for (let i = 1; i <= 5; i++) {
    numberButtons.push(
      <button key={i} className="number-btn" onClick={() => setNumber(i)}>
        {i}
      </button>
    );
  }

  const handleSubmit = () => {
    if (number != 0) {
      navigate("/thankyou");
    }
  }
  return <section className='card'>
    <img src={starIcon}></img>
    <h1>How did we do?</h1>
    <p>
      Please let us know how we did with your support request. All feedback is appreciated
      to help us improve our offering!
    </p>
    <div className='grade'>
      {numberButtons}
    </div>
    <button className="submit-btn" onClick={handleSubmit}>Submit</button>
  </section>

}
export default HowDidWeDo


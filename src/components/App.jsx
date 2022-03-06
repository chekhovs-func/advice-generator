import '../styles/app.scss';
import { useState } from 'react';
import axios from 'axios';
import mobileDivider from '../assets/pattern-divider-mobile.svg';
import desktopDivider from '../assets/pattern-divider-desktop.svg';
import dice from '../assets/icon-dice.svg';

export default function App() {
  const [advice, setAdvice] = useState({
    id: 0,
    body: 'Patience is a virtue.',
  });

  const getAdvice = () => {
    axios({
      method: 'GET',
      url: 'https://api.adviceslip.com/advice',
    })
      .then(res =>
        setAdvice({
          id: res.data.slip.id,
          body: res.data.slip.advice,
        })
      )
      .catch(err => console.warn(err));
  };

  return (
    <main>
      <section>
        <h1>{`Advice #${advice.id}`}</h1>
        <p>{`"${advice.body}"`}</p>
        <img src={mobileDivider} alt='A dividing line' className='mobile-divider' />
        <img src={desktopDivider} alt='A dividing line' className='desktop-divider' />
        <button onClick={getAdvice}>
          <img src={dice} alt='An icon of a die' />
        </button>
      </section>
    </main>
  );
}

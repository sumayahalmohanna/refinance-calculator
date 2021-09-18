import { useState } from 'react';
import './MyStyles.css';
import img from './assets/FinnMathematical.gif';
import ReactGA from 'react-ga';

function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    ReactGA.initialize('G-8C69NQYYB8');
    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
  }, [location]);
}

function App() {
  usePageViews();
  const [p, setP] = useState(58000);
  const [r, setR] = useState(.7);
  const [n, setN] = useState(12);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const wittyLine = ["l", "your new rate is: PRETTY LOW!", "your new rate is: SUPER LOW!", "your new rate is: LOW LOW!"];
  
  const handleCalc = (e) => {
    e.preventDefault();
    setLoading(true)
    setResult('');
    //const result = [p + r * Math.pow((1 + r), n)]/[Math.pow((1+r), n-1)];
    const getLine = Math.floor(Math.random()*(3-1+1)+1);
    console.log(getLine);
    setTimeout(() => {
      setLoading(false);
      setResult(wittyLine[getLine]);
    },1000);
  }

  return (
    <div>
    <div className="App">
      <header className="App-form">
        <h2>Loan Refinance Calculator</h2>
        <p>This doesn't calculate anything yet because I don't have the
          real formula. This is meant as a demo of the skillset I would bring to the Marketing Designer position at MotoRefi.
        </p>
        <hr/>

        <form onSubmit={handleCalc}>
            <label>Loan Amount:</label>
              <input 
                type="number" 
                required name="p" 
                value={p} 
                onChange={(e) => setP(e.target.value)}
                />
            
            <label>Rate of interest per annum:</label>
              <input 
                type="number" 
                required 
                name="r"  
                value={r}
                onChange={(e) => setR(e.target.value)}
                />
              
            <label>Frequency of loan payments:</label>
              <input 
                type="number" 
                required 
                name="n" 
                value={n} 
                onChange={(e) => setN(e.target.value)}
                />
            
            <input 
              className="Form-btn" 
              type="submit" 
              value="Calculate New Rate!" 
            />
        </form>
        <div className="Form-result">
          {loading && <h2>Calculating...</h2>}
          {result && 
            <div>
              <h2>{result}</h2>
              <img src={img} alt="Gif of Finn the human and princess bubblegum."/>
            </div>
          }
        </div>
      </header>
      </div>
      <footer>
        <p>built with love and humor by 
          <a href="https://www.linkedin.com/in/sumayahalmohanna/" 
            rel="noreferrer" target="_blank"> Sam Almohanna</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

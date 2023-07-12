import "./App.css";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const [typeEffect] = useTypewriter({
  //   words: ['I am an Enthusiastic Data Scientist 👨‍💻', 'I am a Dynamic Analyst 💻', 'I am Creative Problem Solver 📊', 'I am Detail Oriented 📑'],
  //   loop: {},
  //   typeSpeed: 100,
  //   delaySpeed: 40
  // }
  // )
  return(
  <div className="App">
   
      {/* <h1>
        <span style={{fontweight: 'Bold', color: 'red', marginLeft: '2px'}}>{typeEffect}</span>
      </h1> */}
    <ToastContainer/>
   <PortfolioContainer/>
  </div> 
  );
}
 
export default App;

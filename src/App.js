import { useState } from "react"
import "./styles.css"
import Validate from "./validate"
import SecondClue from "./SecondClue"
import ThirdClue from "./ThirdClue"


function App() {
  const [firstClue, setFirstClue] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(false)
  const [display, setDispaly] = useState(false)
  const [secondClue, setSecondClue] = useState(false)
  function handleNo(e) {
    e.target.classList.add("animated-no")
    e.target.textContent = "Do You really think that you have a choice?"
    setTimeout(() => { e.target.textContent = "No"; e.target.classList.remove('animated-no') }, 10000)
    setTimeout(()=>{e.target.classList.add("animated-no")})
  }
  function handleYes(e) {
    hideContent()
  }
  function hideContent() {
      setButtonClicked(true)
    }
  return (
    <>
      {!buttonClicked && 
        <div className="container">
          <h1 id="Header">Do you wanna play a game?</h1>
          <p id="riddleText"></p>
          <button onClick={handleNo} className="no">No</button>
        <button onClick={handleYes} className="yes">Yes</button>
        </div>}
      {!secondClue&&!display && buttonClicked && <Validate setDispaly={setDispaly} setFirstClue={setFirstClue}></Validate>}
      {!secondClue && display && firstClue && <SecondClue setSecondClue={setSecondClue} setDispaly={setDispaly}></SecondClue>}
      {secondClue && <ThirdClue></ThirdClue>}
    </>
  );
}
 
export default App;

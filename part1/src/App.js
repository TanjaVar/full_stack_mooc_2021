
import React, {useState} from 'react' //importing react and useState function from react

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
            the app is used by pressing buttons
            </div>
        )
    }
    return (
        <div>
        button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({handleClick, text}) => {
    <button onClick={handleClick}>
        {text}
    </button>
}

// root component is usually named as "App"
const App = (props) => {
    const [left, setLeft] = useState(0) //number
    const [right, setRight] = useState(0) //number
    const [allClicks, setAll] = useState([]) //array:muistaa kaikki näppäinpainallukset

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            <div>
                {left}
                <button handleClick={handleLeftClick} text="left"/>
                <button handleClick={handleRightClick} text="Right"/>
                {right}
                <p>{allClicks.join(' ')}</p>
                <History AllClicks={allClicks}/>
            </div>
        </div>
    )
  }

  export default App
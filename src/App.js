import {useReducer, useRef, useState} from 'react';
import {initialState, reducer} from "./reducers";
import {reset, inputValue, methods} from "./action-creators";
import './App.css';

const App = () => {
    let {plusOne, minusOne, plusOneHundred, minusOneHundred} = methods;
    let [state, dispatch] = useReducer(reducer, initialState);
    let InputRef = useRef(0);
    let [MyInputValue, setInputValue] = useState(0);

    return (
        <div className={'container d-flex dir-column align-center'}>
            <h1>Calculator</h1>
            <h1 className={'counter-div '}>{state.counter}</h1>
            <div>
                <button className={'mx-10 btn'}
                        onClick={() => plusOne(dispatch)}>1
                </button>
                <button className={'mx-10 btn'}
                        onClick={() => minusOne(dispatch)}>-1
                </button>
            </div>
            <div className={'mx-10'}>
                <button className={'mx-10 btn'}
                        onClick={() => plusOneHundred(dispatch)}>100
                </button>
                <button className={'mx-10 btn'}
                        onClick={() => minusOneHundred(dispatch)}>-100
                </button>
            </div>
            <button className={'btn'} onClick={() => reset(dispatch)}>Reset</button>
            {/*todo прибрати форму, зробити контролйований інпут*/}
            <div className={'d-flex mx-10 align-center'}>
                <h3 className={'mx-10'}>Число:</h3>
                <input className={'btn'}
                       type={'text'}
                       ref={InputRef}
                       onInput={event => setInputValue({MyInputValue: +event.target.value})}
                       value={MyInputValue.value}/>
                <button className={'btn'}
                        onClick={() => {
                            InputRef.current.value < 0 ? console.error(`Error`) : inputValue(dispatch, +InputRef.current.value);
                        }}>Submit
                </button>
            </div>

        </div>
    );
}

export default App;

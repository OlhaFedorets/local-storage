import React, {useEffect, useState} from 'react';
import './App.css';


function App() {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        let countAsString = localStorage.getItem('counterValue')
        if (countAsString) {
            let newCount = JSON.parse(countAsString)
            setCount(newCount)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count))
    }, [count])

    function increaseFunction() {
        setCount(count + 1)
    }


    return (
        <div className="App">

            <h1>{count}</h1>
            <button onClick={increaseFunction}>increase</button>

        </div>
    );
}

export default App;


// function App() {
//     const [count, setCount] = useState<number>(0)
//
//     function increaseFunction() {
//         setCount(count + 1)
//     }
//
//     const setToLocalStorageHandler = () => {
//         //localStorage.setItem('counterValue', count.toString())
//         localStorage.setItem('counterValue', JSON.stringify(count))
//         localStorage.setItem('counterValue + 1', JSON.stringify(count + 1))
//     }
//
//     const getFromLocalStorageHandler = () => {
//         let countAsString = localStorage.getItem('counterValue')
//         if (countAsString) {
//             let newCount = JSON.parse(countAsString)
//             setCount(newCount)
//         }
//     }
//
//     const clearLocalStorageHandler = () => {
//         localStorage.clear()
//         setCount(0)
//     }
//
//     const removeItemFromLocalStorageHandler = () => {
//         localStorage.removeItem('counterValue + 1')
//     }
//
//
//     return (
//         <div className="App">
//
//             <h1>{count}</h1>
//             <button onClick={increaseFunction}>increase</button>
//
//             <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
//             <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
//             <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
//             <button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorage</button>
//
//         </div>
//     );
// }
//
// export default App;

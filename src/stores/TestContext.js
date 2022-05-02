
import React, {useState} from 'react';

const TestContext = React.createContext(null)

export const TestContextProvider = props => {

    const [stateButton, setStateButton] = useState(false)

    return (
        <TestContext.Provider value={{
            stateButton,
            setStateButton
        }}>
           {props.children}
        </TestContext.Provider>
    )
}

export default TestContext
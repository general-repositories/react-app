import {useState} from 'react';

export const ErrorComponent = () => {
    const [isError, setIsError] = useState(false);
  
    return(
      <div>
        {
        isError && <p style = {{backgroundColor: "red"}}>Error detected</p>
        }
        {
          !isError && <p style = {{backgroundColor: "green"}}>No errors</p>
        }
        <button onClick={() => setIsError(!isError)}>
          Toggle error
        </button>
      </div>
    )
  }
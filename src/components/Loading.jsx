import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import ChangingProgressProvider from './ChangingProgressProvider';

const Loading = () => {

      <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathTransitionDuration: 0.15
            })}
          />
        )}
      </ChangingProgressProvider>
        return (
          <div className=' bg-white w-full h-screen bg-cover bg-center justify-center items-center flex'>
            <h1>Loading...</h1>
          </div>
        );
    }


export default Loading;
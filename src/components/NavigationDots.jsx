/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="flex justify-center items-center flex-col">
    {['Home', 'Articles', 'Services', 'Auditing', 'Web3 Community'].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="w-[10px] h-[10px] rounded-[50%] bg-[#cbcbcb] my-3 mx-4"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      )
    )}
  </div>
);

export default NavigationDots;

/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="flex justify-center items-center flex-col">
    {['Home', 'Articles', 'Services', 'Auditing', 'Web3Community'].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="w-[12px] h-[12px] rounded-[50%] bg-[#cbcbcb] my-3 mr-4"
          style={active === item ? { backgroundColor: '#00FFFF' } : {}}
        />
      )
    )}
  </div>
);

export default NavigationDots;

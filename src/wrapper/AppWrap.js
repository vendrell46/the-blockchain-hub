import React from 'react';
import { NavigationDots } from '../components/';

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div
        id={idName}
        className={`w-[100%] min-h-screen flex flex-row ${classNames}`}
      >
        <div className="flex-1 w-[100%] flex-col py-2 px-4 flex justify-center items-center">
          <Component />
          <div className="copyright"></div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;

import React from 'react';

export const Toggle = ({ theme, clickedClass, toggleTheme }) => {
  return (
    <div>
      <label
        style={{
          position: 'relative',
          display: 'inline-block',
          width: 60,
          height: 34,
        }}
      >
        <input
          id='darkMode'
          type='checkbox'
          onClick={toggleTheme}
          className={theme === 'dark' ? clickedClass + ' switch' : 'switch'}
        />
        <span className='slider rounded' />
      </label>
    </div>
  );
};

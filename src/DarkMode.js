export const DarkMode = ({ background, setBackground }) => {
  let clickedClass = 'clicked';
  let body = document.body;
  const lightTheme = 'light';
  const darkTheme = 'dark';
  let theme;

  if (localStorage) {
    theme = localStorage.getItem('theme');
  }

  theme === 'lightTheme' || theme === 'darkTheme'
    ? body.classList.add(theme)
    : body.classList.add(lightTheme);

  const toggleTheme = e => {
    console.log(e.target);
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem('theme', 'light');
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem('theme', 'dark');
      theme = darkTheme;
    }
  };

  return (
    <div>
      <button
        className={theme === 'dark' ? clickedClass : ''}
        id='darkMode'
        onClick={toggleTheme}
      ></button>
    </div>
  );
};

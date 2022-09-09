(() => {
  const root = document.querySelector(':root');
  const body = document.querySelector('body');
  const currentHour = new Date().getHours();
  const init = () => {
    if (currentHour >= 19 || currentHour < 8) {
      root.style.setProperty('--color-primary-dark', '#0dcb4d');
      root.style.setProperty('--color-light-grey', '#7e7e7e');
      root.style.setProperty('--shadow-1', '0 5px 12px rgba(14, 14, 18, 0.8)');
      body.style.backgroundColor = '#3d3d3d';
      body.style.color = '#eaeaea';
    }
  };

  init();
})();

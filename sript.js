window.onload = () => {
  const theme = localStorage.getItem('theme') || 'dark';
  document.documentElement.classList.add(theme); // aplica no <html>
  updateThemeColor(theme);
};

function togglemode() {
  const html = document.documentElement;
  const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.classList.replace(currentTheme, newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeColor(newTheme);
}

function updateThemeColor(theme) {
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  if (themeColorMeta) {
    themeColorMeta.setAttribute(
      'content',
      theme === 'dark' ? '#0e2a47' : '#a0c4ff'
    );
  } else {
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = theme === 'dark' ? '#0e2a47' : '#a0c4ff';
    document.head.appendChild(meta);
  }
}

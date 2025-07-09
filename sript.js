// Quando a página carrega, aplica o tema salvo (se houver)
window.onload = () => {
  const theme = localStorage.getItem('theme') || 'dark'; // Padrão é 'dark'
  document.body.classList.add(theme);
  updateThemeColor(theme);
};

function togglemode() {
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.body.classList.replace(currentTheme, newTheme);
  localStorage.setItem('theme', newTheme); // Salva a preferência do tema
  updateThemeColor(newTheme);
}

// Função para atualizar dinamicamente a cor da barra do navegador
function updateThemeColor(theme) {
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  if (themeColorMeta) {
    // Atualiza a cor conforme o tema
    themeColorMeta.setAttribute(
      'content',
      theme === 'dark' ? '#0e2a47' : '#a0c4ff'
    );
  } else {
    // Se não existir, cria o elemento meta
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = theme === 'dark' ? '#0e2a47' : '#a0c4ff';
    document.head.appendChild(meta);
  }
}

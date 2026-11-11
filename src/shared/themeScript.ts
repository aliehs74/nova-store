// Runs before body paint; only the theme attribute differs from the server HTML.
const themeScript = `(function(){var mode='light';try{var saved=localStorage.getItem('nova-theme');mode=saved==='dark'?'dark':saved==='light'?'light':matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}catch{}document.documentElement.dataset.theme=mode;})();`;

export default themeScript;

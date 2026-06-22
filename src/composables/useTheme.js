import { ref } from 'vue'

const STORAGE_KEY = 'portfolio-theme'
const currentTheme = ref(getInitialTheme())

function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem(STORAGE_KEY, theme)
}

export function useTheme() {
  const isDark = () => currentTheme.value === 'dark'

  function toggleTheme() {
    currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
    applyTheme(currentTheme.value)
  }

  function setTheme(theme) {
    currentTheme.value = theme
    applyTheme(theme)
  }

  return { currentTheme, isDark, toggleTheme, setTheme }
}

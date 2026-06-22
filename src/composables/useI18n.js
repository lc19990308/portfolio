import { ref, computed } from 'vue'

const STORAGE_KEY = 'portfolio-lang'
const currentLang = ref((typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) || 'zh')

export function useI18n() {
  const isZh = computed(() => currentLang.value === 'zh')

  function t(value) {
    if (!value) return ''
    if (typeof value === 'string') return value
    return value[currentLang.value] || value.zh || ''
  }

  function setLang(lang) {
    currentLang.value = lang
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }

  function toggleLang() {
    setLang(currentLang.value === 'zh' ? 'en' : 'zh')
  }

  return { currentLang, isZh, t, setLang, toggleLang }
}

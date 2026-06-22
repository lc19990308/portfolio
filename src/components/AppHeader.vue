<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from '../composables/useI18n.js'
import { useTheme } from '../composables/useTheme.js'

const emit = defineEmits(['nav', 'search'])
const scrolled = ref(false)
const menuOpen = ref(false)
const { t, currentLang, toggleLang } = useI18n()
const { currentTheme, toggleTheme } = useTheme()

const navItems = [
  { id: 'projects', label: { zh: '项目', en: 'Projects' } },
  { id: 'skills', label: { zh: '技能', en: 'Skills' } },
  { id: 'career', label: { zh: '经历', en: 'Career' } },
  { id: 'interests', label: { zh: '兴趣', en: 'Interests' } },
  { id: 'contact', label: { zh: '联系', en: 'Contact' } },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 60
  })
})

const handleNav = (id) => {
  menuOpen.value = false
  emit('nav', id)
}
</script>

<template>
  <header :class="['header', { scrolled }]">
    <div class="header-inner container">
      <span class="logo" @click="handleNav('hero')">LC</span>
      <div class="header-actions">
        <nav :class="['nav', { open: menuOpen }]">
          <button
            v-for="item in navItems"
            :key="item.id"
            class="nav-link"
            @click="handleNav(item.id)"
          >
            {{ t(item.label) }}
          </button>
        </nav>
        <button class="theme-btn" @click="toggleTheme" :aria-label="t({ zh: '切换主题', en: 'Toggle theme' })">
          <svg v-if="currentTheme === 'dark'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
        <button class="lang-btn" @click="toggleLang" :aria-label="t({ zh: '切换语言', en: 'Switch language' })">
          {{ currentLang === 'zh' ? 'EN' : '中' }}
        </button>
        <button class="search-btn" @click="emit('search')" :aria-label="t({ zh: '搜索', en: 'Search' })" :title="t({ zh: 'Cmd+K 快速搜索', en: 'Cmd+K to search' })">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
        <button class="menu-btn" @click="menuOpen = !menuOpen" :aria-label="t({ zh: '菜单', en: 'Menu' })">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px 0;
  transition: all 0.3s ease;
}
.header.scrolled {
  background: color-mix(in srgb, var(--bg-primary) 90%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  font-size: 1.6rem;
  font-weight: 800;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  user-select: none;
  letter-spacing: 2px;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}
.nav {
  display: flex;
  gap: 8px;
}
.nav-link {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-family: var(--font-sans);
  font-size: 0.9rem;
  cursor: pointer;
  padding: 6px 16px;
  border-radius: 8px;
  transition: all 0.2s;
}
.nav-link:hover {
  color: var(--text-primary);
  background: var(--bg-card);
}
.theme-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: none;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
}
.theme-btn:hover {
  color: var(--teal);
  border-color: var(--teal);
}
.lang-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  border-radius: 8px;
  background: none;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  padding: 0 8px;
}
.lang-btn:hover {
  color: var(--cyan);
  border-color: var(--cyan);
}
.search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: none;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
}
.search-btn:hover {
  color: var(--cyan);
  border-color: var(--cyan);
}
.menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.menu-btn span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: 0.3s;
}

@media (max-width: 640px) {
  .menu-btn { display: flex; }
  .nav {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: color-mix(in srgb, var(--bg-primary) 95%, transparent);
    backdrop-filter: blur(12px);
    padding: 16px;
    border-bottom: 1px solid var(--border);
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s;
    pointer-events: none;
  }
  .nav.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
}
</style>

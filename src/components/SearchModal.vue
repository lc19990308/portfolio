<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { projects } from '../data/projects.js'
import { skillCategories } from '../data/skills.js'
import { experience } from '../data/experience.js'
import { useI18n } from '../composables/useI18n.js'

const { t, currentLang } = useI18n()
const props = defineProps({ show: Boolean })
const emit = defineEmits(['close', 'open'])

const query = ref('')
const selectedIdx = ref(0)

const typeLabels = computed(() => ({
  project: { zh: '项目', en: 'Project' },
  skill: { zh: '技能', en: 'Skill' },
  career: { zh: '经历', en: 'Career' },
}))

const emptyText = computed(() => currentLang.value === 'zh' ? '未找到相关结果' : 'No results found')

const index = computed(() => {
  const items = []

  projects.forEach(p => {
    const nameStr = [p.name.zh, p.name.en].join(' ')
    const summaryStr = [p.summary.zh, p.summary.en].join(' ')
    const kp = t(p.keyPoints).join(' ')
    items.push({
      type: 'project',
      typeLabel: t(typeLabels.value.project),
      typeColor: 'var(--cyan)',
      title: t(p.name),
      desc: t(p.summary),
      keywords: [nameStr, summaryStr, kp, ...p.techStack].join(' ').toLowerCase(),
      action: { type: 'scroll', target: 'projects' },
    })
  })

  skillCategories.forEach(cat => {
    cat.skills.forEach(s => {
      const catName = [cat.name.zh, cat.name.en].join(' ')
      items.push({
        type: 'skill',
        typeLabel: t(typeLabels.value.skill),
        typeColor: 'var(--purple)',
        title: s,
        desc: t(cat.name),
        keywords: [s, catName].join(' ').toLowerCase(),
        action: { type: 'scroll', target: 'skills' },
      })
    })
  })

  experience.forEach(exp => {
    const companyStr = [exp.company.zh, exp.company.en].join(' ')
    const roleStr = [exp.role.zh, exp.role.en].join(' ')
    const hl = t(exp.highlights).join(' ')
    items.push({
      type: 'career',
      typeLabel: t(typeLabels.value.career),
      typeColor: 'var(--teal)',
      title: t(exp.company),
      desc: `${t(exp.role)} · ${exp.period}`,
      keywords: [companyStr, roleStr, hl].join(' ').toLowerCase(),
      action: { type: 'scroll', target: 'career' },
    })
  })

  return items
})

const results = computed(() => {
  if (!query.value.trim()) return []
  const q = query.value.toLowerCase()
  return index.value
    .filter(item => item.keywords.includes(q))
    .slice(0, 12)
})

function select(item) {
  emit('close')
  query.value = ''
  selectedIdx.value = 0
  document.getElementById(item.action.target)?.scrollIntoView({ behavior: 'smooth' })
}

function onKeydown(e) {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    selectedIdx.value = Math.min(selectedIdx.value + 1, results.value.length - 1)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    selectedIdx.value = Math.max(selectedIdx.value - 1, 0)
  } else if (e.key === 'Enter') {
    e.preventDefault()
    if (results.value[selectedIdx.value]) select(results.value[selectedIdx.value])
  } else if (e.key === 'Escape') {
    emit('close')
  }
}

function onGlobalKeydown(e) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    if (props.show) {
      emit('close')
    } else {
      emit('open')
    }
  }
}

onMounted(() => window.addEventListener('keydown', onGlobalKeydown))
onUnmounted(() => window.removeEventListener('keydown', onGlobalKeydown))
</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="search-overlay" @click.self="emit('close')">
      <div class="search-dialog">
        <div class="search-input-wrap">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            ref="inputEl"
            v-model="query"
            type="text"
            class="search-input"
            :placeholder="t({ zh: '搜索项目、技能、经历...', en: 'Search projects, skills, career...' })"
            @keydown="onKeydown"
          />
          <kbd class="search-hint">ESC</kbd>
        </div>

        <div class="search-results" v-if="results.length">
          <button
            v-for="(item, idx) in results"
            :key="`${item.type}-${item.title}`"
            :class="['search-item', { selected: idx === selectedIdx }]"
            @click="select(item)"
            @mouseenter="selectedIdx = idx"
          >
            <span class="search-item-type" :style="{ color: item.typeColor }">{{ item.typeLabel }}</span>
            <div class="search-item-body">
              <span class="search-item-title">{{ item.title }}</span>
              <span class="search-item-desc">{{ item.desc }}</span>
            </div>
          </button>
        </div>

        <div class="search-empty" v-else-if="query">
          {{ emptyText }}
        </div>

        <div class="search-footer">
          <span><kbd>↑↓</kbd> {{ t({ zh: '导航', en: 'Navigate' }) }}</span>
          <span><kbd>Enter</kbd> {{ t({ zh: '跳转', en: 'Go' }) }}</span>
          <span><kbd>Esc</kbd> {{ t({ zh: '关闭', en: 'Close' }) }}</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.search-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: var(--search-overlay);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  padding-top: 15vh;
}
.search-dialog {
  width: 560px;
  max-width: calc(100vw - 32px);
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--search-shadow);
  overflow: hidden;
}
.search-input-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
}
.search-icon {
  width: 20px;
  height: 20px;
  color: var(--text-muted);
  flex-shrink: 0;
}
.search-input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  font-size: 1.05rem;
  color: var(--text-primary);
  font-family: var(--font-sans);
}
.search-input::placeholder {
  color: var(--text-muted);
}
.search-hint {
  font-size: 0.7rem;
  padding: 3px 8px;
  border-radius: 4px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-family: var(--font-mono);
}
.search-results {
  overflow-y: auto;
  padding: 8px;
  max-height: 380px;
}
.search-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;
}
.search-item.selected,
.search-item:hover {
  background: var(--bg-card-hover);
}
.search-item-type {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  padding-top: 2px;
  flex-shrink: 0;
  min-width: 36px;
}
.search-item-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.search-item-title {
  font-size: 0.95rem;
  color: var(--text-primary);
  font-weight: 600;
}
.search-item-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.search-empty {
  padding: 40px 20px;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
}
.search-footer {
  display: flex;
  gap: 16px;
  padding: 10px 20px;
  border-top: 1px solid var(--border);
  font-size: 0.75rem;
  color: var(--text-muted);
}
.search-footer kbd {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 4px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  margin-right: 2px;
}
</style>

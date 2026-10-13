<script setup>
import { skillCategories } from '../data/skills.js'
import { useI18n } from '../composables/useI18n.js'

const { t } = useI18n()
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-eyebrow">02 / Skills</p>
        <h2 class="section-title">{{ t({ zh: '技术能力', en: 'Technical Skills' }) }}</h2>
        <p class="section-desc">{{ t({ zh: '持续深耕前端工程化、跨平台开发与 AI 应用', en: 'Frontend engineering, cross-platform development & AI applications' }) }}</p>
      </div>

      <div class="skills-grid">
        <div
          v-for="cat in skillCategories"
          :key="cat.name.zh"
          class="skill-card"
          :style="{ '--accent': cat.color }"
        >
          <h3 class="cat-name">{{ t(cat.name) }}</h3>
          <div class="cat-skills">
            <span
              v-for="skill in cat.skills"
              :key="skill"
              class="skill-item"
            >{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}
.skill-card {
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 24px;
  height: 100%;
  -webkit-backdrop-filter: var(--glass-filter);
  backdrop-filter: var(--glass-filter);
  box-shadow: var(--glass-shadow), var(--glass-highlight);
  transition: all 0.3s;
  border-top: 3px solid var(--accent);
}
.skill-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-hover);
  box-shadow: var(--glass-shadow-hover), var(--glass-highlight);
}
.cat-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 16px;
}
.cat-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.skill-item {
  font-size: 0.8rem;
  padding: 4px 12px;
  border-radius: 8px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-family: var(--font-mono);
  transition: all 0.2s;
}
.skill-item:hover {
  border-color: var(--accent);
  color: var(--accent);
}
@media (max-width: 768px) {
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .skills-grid { grid-template-columns: 1fr; }
}
</style>

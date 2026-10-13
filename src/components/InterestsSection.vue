<script setup>
import { interests } from '../data/interests.js'
import { useI18n } from '../composables/useI18n.js'

const { t } = useI18n()
</script>

<template>
  <section id="interests" class="section">
    <div class="container">
      <p class="section-eyebrow">05 / Beyond Work</p>
      <h2 class="section-title">{{ t({ zh: '工作之外', en: 'Beyond Work' }) }}</h2>
      <p class="section-subtitle">{{ t({ zh: '不止是写代码', en: 'More than just code' }) }}</p>
      <div class="interests-grid">
        <div
          v-for="item in interests"
          :key="item.label.zh"
          class="interest-card"
        >
          <span class="interest-label">{{ t(item.label) }}</span>
          <p class="interest-desc">{{ t(item.desc) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  text-align: center;
  font-size: clamp(1.6rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}
.section-eyebrow {
  text-align: center;
}
.section-subtitle {
  text-align: center;
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 48px;
}
.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  max-width: 900px;
  margin: 0 auto;
}
.interest-card {
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  border-radius: 14px;
  padding: 24px;
  -webkit-backdrop-filter: var(--glass-filter);
  backdrop-filter: var(--glass-filter);
  box-shadow: var(--glass-shadow), var(--glass-highlight);
  transition: all 0.3s;
  min-height: 100px;
}
.interest-card:hover {
  transform: translateY(-3px);
  border-color: var(--border-hover);
  box-shadow: var(--glass-shadow-hover), var(--glass-highlight);
}
.interest-label {
  display: inline-block;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}
.interest-desc {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
}
</style>

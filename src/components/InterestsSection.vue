<script setup>
import { interests } from '../data/interests.js'
import { useI18n } from '../composables/useI18n.js'
import { useTheme } from '../composables/useTheme.js'

const { t } = useI18n()
const { currentTheme } = useTheme()
</script>

<template>
  <section id="interests" class="section">
    <div class="container">
      <h2 class="section-title">{{ t({ zh: '工作之外', en: 'Beyond Work' }) }}</h2>
      <p class="section-subtitle">{{ t({ zh: '不止是写代码', en: 'More than just code' }) }}</p>
      <div class="interests-grid">
        <div
          v-for="item in interests"
          :key="item.label.zh"
          class="interest-card"
          :style="{ '--gradient': currentTheme === 'dark' ? item.gradient : item.gradientLight, '--border-color': item.border }"
        >
          <div class="interest-bg"></div>
          <div class="interest-content">
            <span class="interest-label">{{ t(item.label) }}</span>
            <p class="interest-desc">{{ t(item.desc) }}</p>
          </div>
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
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: all 0.3s;
  min-height: 100px;
}
.interest-card:hover {
  border-color: var(--border-color);
  transform: translateY(-3px);
}
.interest-bg {
  position: absolute;
  inset: 0;
  background: var(--gradient);
}
[data-theme="dark"] .interest-bg {
  opacity: 0.4;
}
[data-theme="light"] .interest-bg {
  opacity: 0.7;
}
.interest-content {
  position: relative;
  z-index: 1;
  padding: 24px;
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

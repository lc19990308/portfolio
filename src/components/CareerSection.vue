<script setup>
import { experience } from '../data/experience.js'
import { useI18n } from '../composables/useI18n.js'

const { t } = useI18n()
</script>

<template>
  <section id="career" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-eyebrow">03 / Career</p>
        <h2 class="section-title">{{ t({ zh: '职业经历', en: 'Career' }) }}</h2>
        <p class="section-desc">{{ t({ zh: '从 2020 年入行至今，持续深耕前端工程化与跨平台开发', en: 'Since 2020, focused on frontend engineering and cross-platform development' }) }}</p>
      </div>

      <div class="career-path">
        <div
          v-for="(exp, idx) in experience"
          :key="exp.company.zh"
          class="career-node"
          v-observe
          :style="{ transitionDelay: `${idx * 0.12}s` }"
        >
          <div class="node-marker">
            <span class="node-dot"></span>
            <span v-if="idx < experience.length - 1" class="node-line"></span>
          </div>
          <div class="node-card">
            <div class="node-header">
              <h3 class="node-company">{{ t(exp.company) }}</h3>
              <span class="node-role">{{ t(exp.role) }}</span>
            </div>
            <span class="node-period">{{ exp.period }}</span>
            <div class="node-highlights">
              <span v-for="h in t(exp.highlights)" :key="h" class="highlight-pill">{{ h }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.career-path {
  max-width: 600px;
  margin: 0 auto;
}
.career-node {
  display: flex;
  gap: 20px;
}
.node-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 20px;
}
.node-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--cyan);
  border: 3px solid var(--bg-primary);
  box-shadow: 0 0 0 2px var(--cyan);
  flex-shrink: 0;
  margin-top: 6px;
}
.node-line {
  width: 2px;
  flex-grow: 1;
  background: linear-gradient(to bottom, var(--cyan), transparent);
  min-height: 40px;
}
.node-card {
  flex: 1;
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  border-radius: 14px;
  padding: 20px 24px;
  margin-bottom: 20px;
  -webkit-backdrop-filter: var(--glass-filter);
  backdrop-filter: var(--glass-filter);
  box-shadow: var(--glass-shadow), var(--glass-highlight);
  transition: all 0.3s;
}
.node-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-hover);
  box-shadow: var(--glass-shadow-hover), var(--glass-highlight);
}
.node-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 6px;
  flex-wrap: wrap;
}
.node-company {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
}
.node-role {
  font-size: 0.85rem;
  color: var(--cyan);
  font-weight: 500;
}
.node-period {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}
.node-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}
.highlight-pill {
  font-size: 0.75rem;
  color: var(--text-secondary);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  padding: 3px 10px;
  border-radius: 6px;
}
.highlight-pill:hover {
  border-color: var(--cyan);
  color: var(--cyan);
}
</style>

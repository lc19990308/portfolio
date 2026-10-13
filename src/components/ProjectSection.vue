<script setup>
import { ref } from 'vue'
import { projects, projectTypes } from '../data/projects.js'
import { useI18n } from '../composables/useI18n.js'

const { t } = useI18n()
const expandedId = ref(null)

const labels = {
  challenge: { zh: '核心挑战', en: 'Challenge' },
  approach: { zh: '技术方案', en: 'Approach' },
  keyPoints: { zh: '关键技术点', en: 'Key Points' },
  architecture: { zh: '架构链路', en: 'Architecture' },
  results: { zh: '成果', en: 'Results' },
  platforms: { zh: '上架平台', en: 'Platforms' },
  expand: { zh: '查看技术细节', en: 'Tech Details' },
  collapse: { zh: '收起', en: 'Collapse' },
}

let lastToggle = 0
const toggleProject = (id) => {
  const now = Date.now()
  if (now - lastToggle < 300) return
  lastToggle = now
  expandedId.value = expandedId.value === id ? null : id
}
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-eyebrow">01 / Projects</p>
        <h2 class="section-title">{{ t({ zh: '项目经历', en: 'Projects' }) }}</h2>
        <p class="section-desc">{{ t({ zh: '从物联网通信到 AI 大模型应用，每个项目都包含完整的技术挑战与解决方案', en: 'From IoT communication to AI model applications, each project features complete technical challenges and solutions' }) }}</p>
      </div>

      <div class="timeline">
        <div class="timeline-line"></div>

        <article
          v-for="(project, idx) in projects"
          :key="project.id"
          :class="['timeline-item', { expanded: expandedId === project.id }]"
          v-observe
          :style="{ transitionDelay: `${idx * 0.05}s` }"
        >
          <div class="timeline-dot"></div>

          <div class="project-card">
            <div class="card-header">
              <div class="card-meta">
                <span class="card-type">{{ t(projectTypes[project.type]) }}</span>
                <span class="card-period">{{ project.period }}</span>
                <span v-if="project.published" class="card-badge">{{ t(project.badge) }}</span>
              </div>
              <h3 class="card-title">{{ t(project.name) }}</h3>
              <p class="card-summary">{{ t(project.summary) }}</p>
              <div class="card-tags">
                <span v-for="tech in project.techStack.slice(0, 6)" :key="tech" class="tag">{{ tech }}</span>
                <span v-if="project.techStack.length > 6" class="tag tag-more">+{{ project.techStack.length - 6 }}</span>
              </div>
            </div>

            <div class="card-body" :style="{ display: expandedId === project.id ? 'block' : 'none' }">
                <div class="detail-block">
                  <h4 class="detail-title">{{ t(labels.challenge) }}</h4>
                  <p class="detail-text">{{ t(project.challenge) }}</p>
                </div>

                <div class="detail-block">
                  <h4 class="detail-title">{{ t(labels.approach) }}</h4>
                  <p class="detail-text">{{ t(project.approach) }}</p>
                </div>

                <div class="detail-block">
                  <h4 class="detail-title">{{ t(labels.keyPoints) }}</h4>
                  <ul class="detail-list">
                    <li v-for="point in t(project.keyPoints)" :key="point">{{ point }}</li>
                  </ul>
                </div>

                <div v-if="project.architecture" class="detail-block">
                  <h4 class="detail-title">{{ t(labels.architecture) }}</h4>
                  <div class="arch-flow">{{ project.architecture }}</div>
                </div>

                <div class="detail-block">
                  <h4 class="detail-title">{{ t(labels.results) }}</h4>
                  <div class="results-grid">
                    <span v-for="result in t(project.results)" :key="result" class="result-item">{{ result }}</span>
                  </div>
                </div>

                <div v-if="project.published && project.platforms" class="detail-block">
                  <h4 class="detail-title">{{ t(labels.platforms) }}</h4>
                  <div class="platform-list">
                    <span v-for="p in project.platforms" :key="p" class="platform-item">{{ p }}</span>
                  </div>
                </div>
            </div>

            <div class="card-expand-hint" @click.prevent.stop="toggleProject(project.id)">
              <span>{{ expandedId === project.id ? t(labels.collapse) : t(labels.expand) }}</span>
              <span :class="['arrow', { up: expandedId === project.id }]">▼</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 0;
}
.timeline-line {
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--cyan), var(--blue), transparent);
}
.timeline-item {
  position: relative;
  padding-left: 48px;
  margin-bottom: 32px;
}
.timeline-dot {
  position: absolute;
  left: 9px;
  top: 24px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--cyan);
  border: 3px solid var(--bg-primary);
  box-shadow: 0 0 0 2px var(--cyan);
  z-index: 1;
}
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  -webkit-backdrop-filter: var(--glass-filter);
  backdrop-filter: var(--glass-filter);
  box-shadow: var(--glass-shadow), var(--glass-highlight);
  transition: all 0.3s ease;
}
.project-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-hover);
  box-shadow: var(--glass-shadow-hover), var(--glass-highlight);
}
.timeline-item.expanded .project-card {
  border-color: rgba(217, 119, 6, 0.3);
}
.card-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.card-type {
  font-size: 0.75rem;
  color: var(--cyan);
  background: rgba(217, 119, 6, 0.1);
  padding: 2px 10px;
  border-radius: 4px;
  font-weight: 500;
}
.card-period {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}
.card-badge {
  font-size: 0.75rem;
  color: var(--teal);
  background: rgba(148, 163, 122, 0.1);
  padding: 2px 10px;
  border-radius: 4px;
  font-weight: 500;
}
.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}
.card-summary {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 14px;
}
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tag {
  font-size: 0.75rem;
  padding: 3px 10px;
  border-radius: 6px;
  background: rgba(217, 119, 6, 0.08);
  border: 1px solid rgba(217, 119, 6, 0.15);
  color: var(--text-secondary);
  font-family: var(--font-mono);
}
.tag:hover {
  color: var(--cyan);
  border-color: rgba(217, 119, 6, 0.3);
}
.tag-more {
  background: var(--bg-card);
  border-color: var(--border);
  color: var(--text-muted);
}
.card-expand-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
  font-size: 0.8rem;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.2s;
}
.card-expand-hint:hover {
  color: var(--cyan);
}
.arrow {
  font-size: 0.6rem;
  transition: transform 0.3s;
}
.arrow.up {
  transform: rotate(180deg);
}
.card-body {
  margin-top: 12px;
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 24px;
  -webkit-backdrop-filter: var(--glass-filter);
  backdrop-filter: var(--glass-filter);
}
.detail-block {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}
.detail-block:first-child {
  margin-top: 0;
  padding-top: 0;
  border-top: none;
}
.detail-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
}
.detail-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
}
.detail-list {
  list-style: none;
  padding: 0;
}
.detail-list li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 6px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
.detail-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--cyan);
  font-family: var(--font-mono);
}
.arch-flow {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--teal);
  background: rgba(148, 163, 122, 0.05);
  border: 1px solid rgba(148, 163, 122, 0.15);
  padding: 12px 16px;
  border-radius: 8px;
  line-height: 1.6;
}
.results-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.result-item {
  font-size: 0.85rem;
  color: var(--teal);
  background: rgba(148, 163, 122, 0.08);
  border: 1px solid rgba(148, 163, 122, 0.15);
  padding: 4px 14px;
  border-radius: 8px;
  font-weight: 500;
}
.platform-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.platform-item {
  font-size: 0.8rem;
  color: var(--text-secondary);
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 4px 12px;
  border-radius: 6px;
}

@media (max-width: 640px) {
  .timeline-item { padding-left: 40px; }
  .project-card { padding: 18px; }
  .card-title { font-size: 1.1rem; }
}
</style>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n.js'

const emit = defineEmits(['cta'])
const { t, isZh } = useI18n()

const tagline = computed(() => isZh.value ? '桌面端中后台 · 移动端跨平台 · IoT 物联网 · AI 应用落地' : 'Desktop · Mobile · IoT · AI Applications')
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="hero-bg"></div>
    <div class="hero-content container">
      <div class="hero-badge">{{ t({ zh: '6 年经验 · 前端开发工程师', en: '6 Years · Frontend Engineer' }) }}</div>
      <h1 class="hero-name">
        LewChaw
      </h1>
      <div class="hero-tagline">{{ tagline }}</div>
      <div class="hero-sign">宁为代码累弯腰，不为 bug 点提交</div>
      <div class="hero-techs">
        <span class="tech-pill">Vue 2/3 · TypeScript</span>
        <span class="tech-pill">uni-app · Mini Program</span>
        <span class="tech-pill">MQTT · SSE · WebSocket</span>
        <span class="tech-pill">ECharts 6 · AntV G6</span>
        <span class="tech-pill">WebRTC · BLE · NFC</span>
        <span class="tech-pill">Three.js · Web3</span>
        <span class="tech-pill">iOS · Android</span>
      </div>
      <div class="hero-actions">
        <button class="btn btn-primary" @click="$emit('cta')">{{ t({ zh: '查看项目', en: 'View Projects' }) }}</button>
        <a class="btn btn-outline" href="#contact">{{ t({ zh: '联系我', en: 'Contact Me' }) }}</a>
        <a class="btn btn-outline" href="https://lc19990308.github.io/web-blog/" target="_blank" rel="noopener">{{ t({ zh: '技术博客', en: 'Blog' }) }}</a>
      </div>
      <div class="hero-facts">
        <div class="fact">
          <span class="fact-num">6+</span>
          <span class="fact-label">{{ t({ zh: '年经验', en: 'Years Experience' }) }}</span>
        </div>
        <div class="fact">
          <span class="fact-num">15+</span>
          <span class="fact-label">{{ t({ zh: '交付项目', en: 'Projects Delivered' }) }}</span>
        </div>
        <div class="fact">
          <span class="fact-num">48</span>
          <span class="fact-label">{{ t({ zh: '技术技能', en: 'Technical Skills' }) }}</span>
        </div>
      </div>
    </div>
    <div class="scroll-indicator" @click="$emit('cta')">
      <span></span>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0 60px;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 800px 500px at 30% 40%, var(--hero-glow-1) 0%, transparent 60%),
    radial-gradient(ellipse 600px 400px at 70% 60%, var(--hero-glow-2) 0%, transparent 60%);
}
.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}
.hero-badge {
  display: inline-block;
  font-size: 0.85rem;
  color: var(--cyan);
  border: 1px solid rgba(217, 119, 6, 0.3);
  background: rgba(217, 119, 6, 0.08);
  padding: 4px 16px;
  border-radius: 20px;
  margin-bottom: 24px;
  animation: fadeInUp 0.6s ease;
}
.hero-name {
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  background: var(--gradient-name);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  animation: fadeInUp 0.6s ease 0.1s both;
}
.hero-tagline {
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: var(--text-secondary);
  margin-bottom: 12px;
  font-family: var(--font-mono);
  animation: fadeInUp 0.6s ease 0.2s both;
}
.hero-sign {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-style: italic;
  margin-bottom: 32px;
  animation: fadeInUp 0.6s ease 0.25s both;
}
.hero-techs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
  animation: fadeInUp 0.6s ease 0.3s both;
}
.tech-pill {
  font-size: 0.85rem;
  padding: 5px 14px;
  border-radius: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  transition: all 0.3s;
}
.tech-pill:hover {
  border-color: var(--cyan);
  color: var(--cyan);
  background: rgba(217, 119, 6, 0.08);
  transform: translateY(-2px);
}
.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  animation: fadeInUp 0.6s ease 0.4s both;
}
.hero-facts {
  display: flex;
  justify-content: center;
  gap: 64px;
  margin-top: 48px;
  animation: fadeInUp 0.6s ease 0.5s both;
}
.fact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 96px;
}
.fact-num {
  font-family: var(--font-mono);
  font-size: 1.9rem;
  font-weight: 500;
  color: var(--amber);
}
.fact-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
}
@media (max-width: 480px) {
  .hero-facts { gap: 28px; }
  .fact { min-width: 80px; }
}
.btn {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 32px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
}
.btn-primary {
  background: var(--accent-gradient);
  color: #fff;
  border: none;
  box-shadow: var(--accent-glow);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(217, 119, 6, 0.4);
}
.btn-outline {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border);
}
.btn-outline:hover {
  border-color: var(--cyan);
  color: var(--cyan);
  transform: translateY(-2px);
}
.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  animation: float 2s ease-in-out infinite;
}
.scroll-indicator span {
  display: block;
  width: 20px;
  height: 32px;
  border: 2px solid var(--text-muted);
  border-radius: 10px;
  position: relative;
}
.scroll-indicator span::after {
  content: '';
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 8px;
  background: var(--cyan);
  border-radius: 2px;
  animation: scrollDown 1.5s ease-in-out infinite;
}
</style>

<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n.js'

const { t } = useI18n()
const copied = ref(false)

const contactInfo = {
  email: 'jarridaddison4@gmail.com',
  phone: '191 3977 1157',
  location: { zh: '郑州', en: 'Zhengzhou' },
}

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(contactInfo.email)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // fallback
  }
}
</script>

<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <div class="section-header">
        <p class="section-eyebrow">04 / Contact</p>
        <h2 class="section-title">{{ t({ zh: '联系我', en: 'Contact' }) }}</h2>
        <p class="section-desc">{{ t({ zh: '如果有合适的机会，欢迎随时联系', en: 'Open to opportunities — feel free to reach out' }) }}</p>
      </div>

      <div class="contact-card">
        <div class="contact-item">
          <span class="contact-label">{{ t({ zh: '邮箱', en: 'Email' }) }}</span>
          <span class="contact-value">{{ contactInfo.email }}</span>
          <button class="copy-btn" @click="copyEmail">
            {{ copied ? t({ zh: '已复制', en: 'Copied' }) : t({ zh: '复制', en: 'Copy' }) }}
          </button>
        </div>
        <div class="contact-item">
          <span class="contact-label">{{ t({ zh: '电话', en: 'Phone' }) }}</span>
          <span class="contact-value">{{ contactInfo.phone }}</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">{{ t({ zh: '地点', en: 'Location' }) }}</span>
          <span class="contact-value">{{ t(contactInfo.location) }}</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">{{ t({ zh: '职位', en: 'Role' }) }}</span>
          <span class="contact-value">{{ t({ zh: '前端开发工程师', en: 'Frontend Engineer' }) }}</span>
        </div>
      </div>

      <div class="resume-download">
        <a
          href="/portfolio/resume.pdf"
          class="btn btn-primary"
          download
        >
          ↓ {{ t({ zh: '下载 PDF 简历', en: 'Download Resume PDF' }) }}
        </a>
        <p class="download-hint">{{ t({ zh: '或直接在线查看 HTML 版本', en: 'or view the online HTML version' }) }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: var(--bg-secondary);
}
.contact-card {
  max-width: 520px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 32px;
  -webkit-backdrop-filter: var(--glass-filter);
  backdrop-filter: var(--glass-filter);
  box-shadow: var(--glass-shadow), var(--glass-highlight);
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
}
.contact-item:last-child {
  border-bottom: none;
}
.contact-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
  min-width: 50px;
  flex-shrink: 0;
}
.contact-value {
  font-size: 0.95rem;
  color: var(--text-primary);
  font-family: var(--font-mono);
  flex: 1;
}
.copy-btn {
  font-size: 0.8rem;
  font-family: var(--font-sans);
  color: var(--cyan);
  background: rgba(217, 119, 6, 0.1);
  border: 1px solid rgba(217, 119, 6, 0.2);
  padding: 4px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}
.copy-btn:hover {
  background: rgba(217, 119, 6, 0.2);
}
.contact-link {
  text-decoration: none;
  transition: color 0.2s;
}
.contact-link:hover {
  color: var(--cyan);
  text-decoration: underline;
}
.resume-download {
  text-align: center;
  margin-top: 40px;
}
.resume-download .btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 32px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  background: var(--accent-gradient);
  color: #fff;
  border: none;
  box-shadow: var(--accent-glow);
}
.resume-download .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(217, 119, 6, 0.4);
}
.download-hint {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 10px;
}
</style>

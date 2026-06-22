<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import CareerSection from './components/CareerSection.vue'
import ContactSection from './components/ContactSection.vue'
import InterestsSection from './components/InterestsSection.vue'
import SearchModal from './components/SearchModal.vue'
import { ref } from 'vue'

const showSearch = ref(false)
const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <AppHeader @nav="scrollTo" @search="showSearch = true" />
  <main>
    <HeroSection @cta="scrollTo('projects')" />
    <ProjectSection />
    <SkillsSection />
    <CareerSection />
    <InterestsSection />
    <ContactSection />
  </main>
  <SearchModal :show="showSearch" @close="showSearch = false" @open="showSearch = true" />
  <footer class="site-footer">
    <div class="container footer-inner">
      <span class="footer-copy">&copy; 2026 LewChaw</span>
      <a class="footer-link" href="https://github.com/lc19990308" target="_blank" rel="noopener">GitHub</a>
    </div>
  </footer>
</template>

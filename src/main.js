import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// 全局指令：滚动动画
app.directive('observe', {
  mounted(el) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    el._observer = observer
  },
  unmounted(el) {
    el._observer?.disconnect()
  },
})

app.mount('#app')

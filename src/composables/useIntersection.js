import { ref, watch, onUnmounted } from 'vue'

export function useIntersection(targetRef, options = {}) {
  const isVisible = ref(false)
  let observer

  watch(targetRef, (el) => {
    if (!el) return
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    }, { threshold: 0.12, ...options })
    observer.observe(el)
  }, { immediate: true })

  onUnmounted(() => observer?.disconnect())

  return { isVisible }
}

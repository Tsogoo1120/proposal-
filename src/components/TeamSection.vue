<template>
  <section class="py-20 sm:py-28 bg-surface-container-low" id="team" ref="sectionEl">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 text-center">

      <h2
        class="font-headline text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 opacity-0 transition-all duration-700"
        :class="{ 'opacity-100': isVisible }"
      >
        Мэргэжлийн баг
      </h2>
      <p
        class="text-on-surface-variant max-w-2xl mx-auto mb-12 sm:mb-16 text-sm sm:text-base leading-relaxed opacity-0 transition-all duration-700 delay-100"
        :class="{ 'opacity-100': isVisible }"
      >
        Танд үйлчлэх 12–16 мэргэжилтнээс бүрдсэн салбар дундын чадварлаг хамт олон.
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        <div
          v-for="(member, i) in team"
          :key="i"
          class="group opacity-0"
          :class="{ 'animate-member': isVisible }"
          :style="{ animationDelay: `${i * 120}ms` }"
        >
          <div class="w-full aspect-square bg-surface-container-highest rounded-full mb-4 sm:mb-6 overflow-hidden flex items-center justify-center relative shadow-sm group-hover:shadow-lg transition-shadow duration-300">
            <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 rounded-full"></div>
            <span class="material-symbols-outlined text-4xl sm:text-5xl text-primary opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
              {{ member.icon }}
            </span>
          </div>
          <h4 class="font-bold text-sm sm:text-base mb-1">{{ member.role }}</h4>
          <p class="text-xs sm:text-sm text-on-surface-variant">{{ member.count }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersection } from '../composables/useIntersection'

const team = [
  { icon: 'account_balance', role: 'Project Manager', count: '1 Мэргэжилтэн' },
  { icon: 'psychology_alt', role: 'Senior Psychologists', count: '2 Мэргэжилтэн' },
  { icon: 'group', role: 'Psychologists', count: '6-10 Мэргэжилтэн' },
  { icon: 'analytics', role: 'Data Analysts', count: '2 Мэргэжилтэн' },
  { icon: 'support_agent', role: 'Admin', count: '1 Мэргэжилтэн' },
]

const sectionEl = ref(null)
const { isVisible } = useIntersection(sectionEl)
</script>

<style scoped>
.animate-member {
  animation: memberIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes memberIn {
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
</style>

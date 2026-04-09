<template>
  <section class="py-20 sm:py-28" id="modules" ref="sectionEl">
    <div class="max-w-7xl mx-auto px-5 sm:px-8">

      <div class="text-center mb-12 sm:mb-16">
        <h2
          class="font-headline text-3xl sm:text-4xl font-bold mb-4 opacity-0 transition-all duration-700"
          :class="{ 'opacity-100 translate-y-0': isVisible, '-translate-y-4': !isVisible }"
        >
          Сургалтын модулиуд
        </h2>
        <div
          class="h-1 w-24 bg-primary mx-auto rounded-full transition-all duration-700 delay-200"
          :class="{ 'scale-x-100': isVisible, 'scale-x-0': !isVisible }"
        ></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div
          v-for="(mod, i) in modules"
          :key="i"
          class="bg-surface-container-low p-8 sm:p-10 rounded-[2rem] hover:bg-surface-container-high transition-all duration-300 hover:-translate-y-2 hover:shadow-lg opacity-0"
          :class="[
            i === 1 || i === 4 ? 'lg:translate-y-8' : '',
            { 'animate-card': isVisible }
          ]"
          :style="{ animationDelay: `${i * 100 + 200}ms` }"
        >
          <div class="flex items-center gap-3 mb-6">
            <span class="material-symbols-outlined text-primary text-2xl">{{ mod.icon }}</span>
            <h3 class="font-headline text-xl sm:text-2xl font-bold text-primary">{{ mod.title }}</h3>
          </div>
          <ul class="space-y-3">
            <li
              v-for="(item, j) in mod.items"
              :key="j"
              class="flex items-center gap-3 text-sm sm:text-base group"
            >
              <span class="w-2 h-2 rounded-full bg-primary-fixed-dim flex-shrink-0 group-hover:bg-primary transition-colors duration-200"></span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersection } from '../composables/useIntersection'

const modules = [
  {
    icon: 'foundation',
    title: 'Суурь хөгжил',
    items: ['Харилцааны ур чадвар', 'Өөрийгөө таних', 'Дотоод нөөц боломж', 'Өөртөө итгэх итгэл', 'Эерэг хандлага'],
  },
  {
    icon: 'spa',
    title: 'Сэтгэлзүйн гүн ажил',
    items: ['Deep Work аргачлал', 'Арт терапи', 'Вербал бус засал', 'Далд ухамсартай ажиллах'],
  },
  {
    icon: 'manage_accounts',
    title: 'Менежмент',
    items: ['Стресс тайлах арга', 'Уур бухимдлын удирдлага', 'Айдсаа даван туулах', 'Аз жаргалын менежмент'],
  },
  {
    icon: 'diversity_3',
    title: 'Баг ба харилцаа',
    items: ['Багийн гишүүдийн холбоо', 'Гэр бүлийн харилцаа', 'Нийгмийн оролцоо'],
  },
  {
    icon: 'trending_up',
    title: 'Ажлын гүйцэтгэл',
    items: ['Төвлөрөл ба анхаарал', 'Бүтээмж дээшлүүлэх', 'Когнитив чадвар', 'Шийдвэр гаргалт'],
  },
]

const sectionEl = ref(null)
const { isVisible } = useIntersection(sectionEl)
</script>

<style scoped>
.animate-card {
  animation: cardFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes cardFadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>

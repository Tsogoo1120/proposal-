<template>
  <section class="py-20 sm:py-28 bg-surface-container" id="diagnostics" ref="sectionEl">
    <div class="max-w-7xl mx-auto px-5 sm:px-8">

      <h2
        class="font-headline text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center lg:text-left opacity-0 transition-all duration-700"
        :class="{ 'opacity-100': isVisible }"
      >
        Оношилгоо ба судалгаа
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[580px] lg:h-[600px]">

        <!-- Main diagnostic card -->
        <div
          class="md:col-span-8 bg-surface-container-lowest p-8 sm:p-10 rounded-3xl flex flex-col justify-between opacity-0 transition-all duration-700 delay-200"
          :class="{ 'opacity-100 translate-x-0': isVisible, '-translate-x-8': !isVisible }"
        >
          <div>
            <h3 class="font-headline text-2xl sm:text-3xl font-bold mb-6">Diagnostic Package</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div class="space-y-4">
                <div
                  v-for="item in diagLeft"
                  :key="item.icon"
                  class="flex items-center gap-3 text-base font-medium hover:text-primary transition-colors group cursor-default"
                >
                  <span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">{{ item.icon }}</span>
                  {{ item.label }}
                </div>
              </div>
              <div class="space-y-4">
                <div
                  v-for="item in diagRight"
                  :key="item.icon"
                  class="flex items-center gap-3 text-base font-medium hover:text-primary transition-colors group cursor-default"
                >
                  <span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">{{ item.icon }}</span>
                  {{ item.label }}
                </div>
              </div>
            </div>
          </div>

          <!-- Badges -->
          <div class="mt-8 flex flex-wrap gap-3">
            <span
              v-for="badge in badges"
              :key="badge"
              class="px-5 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold hover:bg-primary hover:text-on-primary transition-all duration-200 cursor-default"
            >
              {{ badge }}
            </span>
          </div>
        </div>

        <!-- Image card -->
        <div
          class="md:col-span-4 relative group rounded-3xl overflow-hidden shadow-xl opacity-0 transition-all duration-700 delay-300"
          :class="{ 'opacity-100 translate-x-0': isVisible, 'translate-x-8': !isVisible }"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkGf5tsVub9XP8SUk8iaF6Vf0kew0mZx5gynGlnsRwNnaMut_VuLRRUb7UHzFzf0CR0ydxcgVjFohkGWgR0Ct7B2k_kRn6EkhssIhYDyi7mly9KN2YMU0nW9Sa_kdB4cWCTVBl6n_si3_bDVlqN8wQt3iT0Ae2larsL6zZNkRoB5u6S0NdqcUTAOzvSrATUZxjUohbf992aHNhs5OBkAz3waOrGUbaRAKgqRi0CsJhsZ7D6jUbuegbQ86GjX4jDTu1uaHhjfbZmh4"
            alt="Abstract data visualization"
            class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex items-end p-6 sm:p-8">
            <p class="text-white text-base sm:text-lg italic leading-relaxed">
              Нарийвчилсан өгөгдөл дээр суурилсан шийдвэр гаргалт.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersection } from '../composables/useIntersection'

const diagLeft = [
  { icon: 'person_search', label: 'Хувь хүний профайл' },
  { icon: 'work_history', label: 'Ажлын байрны тохироо' },
  { icon: 'battery_alert', label: 'Burnout оношилгоо' },
]

const diagRight = [
  { icon: 'monitoring', label: 'Стресс, Түгшүүр, Депрессийн үнэлгээ' },
  { icon: 'hub', label: 'Багийн социометр' },
]

const badges = ['DASS-21', 'MBTI / Big Five', 'Maslach Burnout', 'EQ / JSS', 'CAT']

const sectionEl = ref(null)
const { isVisible } = useIntersection(sectionEl)
</script>

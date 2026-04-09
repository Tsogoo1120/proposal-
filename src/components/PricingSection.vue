<template>
  <section class="py-20 sm:py-28" ref="sectionEl">
    <div class="max-w-5xl mx-auto px-5 sm:px-8">

      <div
        class="bg-surface-container-lowest border border-outline-variant/20 rounded-[2rem] p-8 sm:p-12 shadow-sm opacity-0 transition-all duration-700"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'translate-y-8': !isVisible }"
      >
        <h2 class="font-headline text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Хөтөлбөрийн үнийн санал
        </h2>

        <div class="grid sm:grid-cols-2 gap-6 sm:gap-12 mb-8 sm:mb-12">

          <!-- Pricing card 1 -->
          <div
            class="text-center p-7 sm:p-8 bg-surface-container-low rounded-2xl hover:-translate-y-1 hover:shadow-md transition-all duration-300 group"
          >
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <span class="material-symbols-outlined text-primary">person_search</span>
            </div>
            <h4 class="text-sm sm:text-base font-bold mb-4 uppercase tracking-widest text-on-surface-variant">Оношилгоо</h4>
            <div class="text-4xl sm:text-5xl font-bold text-primary mb-2 tabular-nums">100,000₮</div>
            <p class="text-xs sm:text-sm text-on-surface-variant">нэг хүн / Diagnostic package</p>
          </div>

          <!-- Pricing card 2 -->
          <div
            class="text-center p-7 sm:p-8 bg-primary/5 rounded-2xl border-2 border-primary/20 hover:-translate-y-1 hover:shadow-md hover:border-primary/40 transition-all duration-300 group"
          >
            <div class="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/25 transition-colors">
              <span class="material-symbols-outlined text-primary">groups</span>
            </div>
            <h4 class="text-sm sm:text-base font-bold mb-4 uppercase tracking-widest text-on-surface-variant">Бүлгийн сургалт</h4>
            <div class="text-4xl sm:text-5xl font-bold text-primary mb-2 tabular-nums">1,000,000₮</div>
            <p class="text-xs sm:text-sm text-on-surface-variant">нэг цаг / Group training</p>
          </div>

        </div>

        <!-- Info box -->
        <div class="flex items-start gap-4 bg-tertiary-container/30 p-5 sm:p-6 rounded-xl">
          <span class="material-symbols-outlined text-tertiary flex-shrink-0">info</span>
          <p class="text-on-tertiary-container font-medium text-sm sm:text-base leading-relaxed">
            Байгууллагын ажилчдын тоо болон хөтөлбөрийн цар хүрээнээс хамаарч үнийн уян хатан нөхцөл санал болгоно.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersection } from '../composables/useIntersection'

const sectionEl = ref(null)
const { isVisible } = useIntersection(sectionEl)
</script>

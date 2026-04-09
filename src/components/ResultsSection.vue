<template>
  <section class="py-20 sm:py-28" ref="sectionEl">
    <div class="max-w-7xl mx-auto px-5 sm:px-8">

      <div
        class="bg-primary text-on-primary rounded-[2.5rem] sm:rounded-[3rem] p-10 sm:p-16 relative overflow-hidden opacity-0 transition-all duration-700"
        :class="{ 'opacity-100 scale-100': isVisible, 'scale-95': !isVisible }"
      >

        <!-- Background texture -->
        <div class="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none"
          style="background-image: url('https://www.transparenttextures.com/patterns/natural-paper.png')"></div>

        <!-- Decoration blob -->
        <div class="absolute -top-20 -right-20 w-80 h-80 bg-on-primary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">

          <!-- Left: stats -->
          <div>
            <h2 class="font-headline text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">Хүлээгдэж буй үр дүн</h2>

            <div class="space-y-8 sm:space-y-10">
              <div class="flex gap-5 sm:gap-6 items-start">
                <div
                  class="text-4xl sm:text-5xl font-bold text-primary-fixed flex-shrink-0 tabular-nums"
                >
                  {{ animatedPercent }}%
                </div>
                <div>
                  <h4 class="text-lg sm:text-xl font-bold mb-2">Байгууллагын хувьд (ROI)</h4>
                  <p class="opacity-80 text-sm sm:text-base leading-relaxed">
                    Бүтээмж 15–30% өсөж, ажилчдын тогтвор суурьшил нэмэгдэнэ. Дотоод зөрчил эрс багасна.
                  </p>
                </div>
              </div>

              <div class="flex gap-5 sm:gap-6 items-start">
                <span class="material-symbols-outlined text-4xl sm:text-5xl text-primary-fixed flex-shrink-0">vital_signs</span>
                <div>
                  <h4 class="text-lg sm:text-xl font-bold mb-2">Ажилтны хувьд</h4>
                  <p class="opacity-80 text-sm sm:text-base leading-relaxed">
                    Стресс ба ядаргаа буурна. Харилцаа сайжирч, өөрийгөө илүү гүнзгий таньж мэдэх боломж бүрдэнэ.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: quote card -->
          <div class="bg-on-primary/10 backdrop-blur-md rounded-2xl p-8 sm:p-10 text-center border border-on-primary/10">
            <p class="text-5xl sm:text-7xl font-bold mb-4 font-headline">Focus</p>
            <p class="text-base sm:text-xl italic opacity-70 leading-relaxed">
              "The clarity of mind defines the quality of work."
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useIntersection } from '../composables/useIntersection'

const sectionEl = ref(null)
const { isVisible } = useIntersection(sectionEl)
const animatedPercent = ref(0)

watch(isVisible, (val) => {
  if (val) {
    let start = 0
    const target = 30
    const duration = 1200
    const step = (duration / target)
    const timer = setInterval(() => {
      start++
      animatedPercent.value = start
      if (start >= target) clearInterval(timer)
    }, step)
  }
})
</script>

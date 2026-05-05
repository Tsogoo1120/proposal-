<template>
  <header class="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden" id="program">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        <!-- Text content -->
        <div class="lg:w-3/5 w-full" ref="textEl">
          <Transition name="fade-slide-up" appear>
            <div v-if="visible">
  

              <h1 class="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-on-surface leading-[1.1] mb-6 sm:mb-8">
                Сэтгэлзүйн хөгжлийн
                <span class="italic text-primary-dim"> цогц хөтөлбөр</span>
              </h1>

              <p class="text-base sm:text-lg lg:text-xl text-on-surface-variant leading-relaxed mb-8 sm:mb-10 max-w-2xl">
                Ажилчдын сэтгэл ханамж, дотоод тогтвортой байдал, багийн уялдаа холбоо болон бүтээмжийг нэмэгдүүлэх зорилготой шинжлэх ухааны үндэслэлт хандлага.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
                <div
                  v-for="(feat, i) in features"
                  :key="i"
                  class="flex items-start gap-3 p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors duration-200"
                >
                  <span class="material-symbols-outlined text-primary text-2xl flex-shrink-0">{{ feat.icon }}</span>
                  <span class="text-sm font-medium leading-tight">{{ feat.text }}</span>
                </div>
              </div>



            </div>
          </Transition>
        </div>

        <!-- Image -->
        <div class="lg:w-2/5 w-full relative" ref="imgEl">
          <Transition name="fade-slide-right" appear>
            <div v-if="visible" class="relative">
              <div class="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="../assets/profile.jpg"
                  alt="Profile"
                  class="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div class="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-surface-container-highest p-5 sm:p-8 rounded-2xl shadow-lg max-w-[240px] sm:max-w-xs">
                <p class="text-primary italic font-headline text-sm sm:text-base leading-relaxed">
ДР: Г.Маралгуа
<br>
Phototherapist | Psychologist | Couples Therapist | Mongolia                </p>
              </div>
            </div>
          </Transition>
        </div>

      </div>
    </div>

    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-gradient-to-bl from-primary to-transparent rounded-full blur-3xl"></div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const textEl = ref(null)

const features = [
  { icon: 'science', text: 'Шинжлэх ухаанд суурилсан аргачлал' },
  { icon: 'psychology', text: 'Бодит ажлын орчинд шууд хэрэгжих' },
  { icon: 'groups', text: 'Бүлгийн болон хувь хүний ажилбар' },
]

onMounted(() => {
  // Small delay for initial page load animation
  setTimeout(() => { visible.value = true }, 100)
})
</script>

<style scoped>
.fade-slide-up-enter-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-slide-up-enter-from {
  opacity: 0;
  transform: translateY(40px);
}

.fade-slide-right-enter-active {
  transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 200ms;
}
.fade-slide-right-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
</style>

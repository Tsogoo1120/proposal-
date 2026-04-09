<template>
  <section class="py-20 sm:py-28 bg-surface-container-low" ref="sectionEl">
    <div class="max-w-7xl mx-auto px-5 sm:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Cards grid -->
        <div
          class="order-2 lg:order-1 grid grid-cols-2 gap-4"
          :class="{ 'animate-in': isVisible }"
        >
          <div
            v-for="(card, i) in cards"
            :key="i"
            class="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 opacity-0"
            :class="[i % 2 !== 0 ? 'mt-6 sm:mt-8' : '', `card-${i}`]"
            :style="{ animationDelay: `${i * 120}ms` }"
          >
            <span class="material-symbols-outlined text-primary mb-3 text-2xl sm:text-3xl block">{{ card.icon }}</span>
            <h4 class="font-bold mb-2 text-sm sm:text-base">{{ card.title }}</h4>
            <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">{{ card.desc }}</p>
          </div>
        </div>

        <!-- Text -->
        <div
          class="order-1 lg:order-2 opacity-0"
          :class="{ 'animate-text': isVisible }"
        >
          <h2 class="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
            Бүлгийн ажлын <br/>
            <span class="text-secondary italic">ач холбогдол</span>
          </h2>
          <p class="text-base sm:text-lg lg:text-xl text-on-surface-variant leading-relaxed mb-6 sm:mb-8">
            Нэг хүнийг өөрчлөхөөс илүү багийн системийг өөрчлөх нь илүү хурдан, тогтвортой үр дүн өгдөг. Бид хамтын ухамсар болон сэтгэл зүйн аюулгүй байдлыг цогцлоодог.
          </p>
          <div class="bg-primary/5 p-6 sm:p-8 rounded-xl border-l-4 border-primary">
            <p class="italic text-on-surface text-sm sm:text-base leading-relaxed">
              "Системийн өөрчлөлт бол байгууллагын соёлын тулгуур багана юм."
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

const cards = [
  { icon: 'handshake', title: 'Багийн итгэлцэл', desc: 'Хамтын ажиллагааны үндэс суурийг бэхжүүлнэ.' },
  { icon: 'forum', title: 'Харилцааны соёл', desc: 'Эерэг, бүтээлч харилцааны загварыг бий болгоно.' },
  { icon: 'trending_up', title: 'Бүтээмж өсөх', desc: 'Ажилчдын идэвх оролцоо 2 дахин нэмэгдэнэ.' },
  { icon: 'self_improvement', title: 'Зөрчил буурах', desc: 'Дотоод үл ойлголцлыг мэргэжлийн түвшинд шийдвэрлэнэ.' },
]

const sectionEl = ref(null)
const { isVisible } = useIntersection(sectionEl)
</script>

<style scoped>
.animate-in .card-0,
.animate-in .card-1,
.animate-in .card-2,
.animate-in .card-3 {
  animation: cardIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes cardIn {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-text {
  animation: textIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes textIn {
  from { opacity: 0; transform: translateX(30px); }
  to   { opacity: 1; transform: translateX(0); }
}
</style>

<template>
  <section class="py-20 sm:py-28" ref="sectionEl">
    <div class="max-w-5xl mx-auto px-5 sm:px-8">

      <div
        class="bg-surface-container-lowest border border-outline-variant/20 rounded-[2rem] p-8 sm:p-12 shadow-sm opacity-0 transition-all duration-700"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'translate-y-8': !isVisible }"
      >
        <h2 class="font-headline text-2xl sm:text-3xl font-bold mb-2 text-center">
          Хөтөлбөрийн үнийн санал
        </h2>
        <p class="text-center text-on-surface-variant text-sm sm:text-base mb-10 sm:mb-14">
          Тоог сонгоход нийт үнэ автоматаар тооцоологдоно.
        </p>

        <div class="grid sm:grid-cols-2 gap-6 sm:gap-10 mb-8 sm:mb-12">

          <!-- Diagnostics card -->
          <div class="p-7 sm:p-8 bg-surface-container-low rounded-2xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-primary">person_search</span>
              </div>
              <div>
                <h4 class="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Оношилгоо</h4>
                <p class="text-xs text-on-surface-variant/70">Diagnostic package</p>
              </div>
            </div>

            <div class="flex items-baseline gap-1 mb-5">
              <span class="text-3xl font-bold text-primary tabular-nums">{{ formatPrice(DIAG_UNIT_PRICE) }}₮</span>
              <span class="text-sm text-on-surface-variant">/ нэг хүн</span>
            </div>

            <!-- Counter -->
            <div class="flex items-center gap-4">
              <button
                @click="diagCount = Math.max(1, diagCount - 1)"
                class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary/10 hover:text-primary active:scale-95 transition-all duration-150 font-bold text-lg select-none"
                aria-label="Багасгах"
              >−</button>
              <div class="flex-1 text-center">
                <input
                  type="number"
                  v-model.number="diagCount"
                  min="1"
                  max="999"
                  class="w-full text-center text-2xl font-bold text-on-surface bg-transparent border-b-2 border-primary/30 focus:border-primary outline-none tabular-nums transition-colors pb-1"
                  aria-label="Оношилгооны тоо"
                />
                <span class="text-xs text-on-surface-variant mt-1 block">хүн</span>
              </div>
              <button
                @click="diagCount = Math.min(999, diagCount + 1)"
                class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary/10 hover:text-primary active:scale-95 transition-all duration-150 font-bold text-lg select-none"
                aria-label="Нэмэх"
              >+</button>
            </div>

            <div class="mt-5 pt-4 border-t border-outline-variant/20 flex justify-between items-center">
              <span class="text-sm text-on-surface-variant">Дүн</span>
              <span class="text-lg font-bold text-primary tabular-nums">{{ formatPrice(diagTotal) }}₮</span>
            </div>
          </div>

          <!-- Group training card -->
          <div class="p-7 sm:p-8 bg-primary/5 rounded-2xl border-2 border-primary/20 transition-all duration-300">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-primary">groups</span>
              </div>
              <div>
                <h4 class="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Бүлгийн сургалт</h4>
                <p class="text-xs text-on-surface-variant/70">Group training</p>
              </div>
            </div>

            <div class="flex items-baseline gap-1 mb-5">
              <span class="text-3xl font-bold text-primary tabular-nums">{{ formatPrice(LECTURE_UNIT_PRICE) }}₮</span>
              <span class="text-sm text-on-surface-variant">/ нэг цаг</span>
            </div>

            <!-- Counter -->
            <div class="flex items-center gap-4">
              <button
                @click="lectureCount = Math.max(1, lectureCount - 1)"
                class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary/10 hover:text-primary active:scale-95 transition-all duration-150 font-bold text-lg select-none"
                aria-label="Багасгах"
              >−</button>
              <div class="flex-1 text-center">
                <input
                  type="number"
                  v-model.number="lectureCount"
                  min="1"
                  max="999"
                  class="w-full text-center text-2xl font-bold text-on-surface bg-transparent border-b-2 border-primary/30 focus:border-primary outline-none tabular-nums transition-colors pb-1"
                  aria-label="Лекцийн тоо"
                />
                <span class="text-xs text-on-surface-variant mt-1 block">цаг</span>
              </div>
              <button
                @click="lectureCount = Math.min(999, lectureCount + 1)"
                class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary/10 hover:text-primary active:scale-95 transition-all duration-150 font-bold text-lg select-none"
                aria-label="Нэмэх"
              >+</button>
            </div>

            <div class="mt-5 pt-4 border-t border-outline-variant/20 flex justify-between items-center">
              <span class="text-sm text-on-surface-variant">Дүн</span>
              <span class="text-lg font-bold text-primary tabular-nums">{{ formatPrice(lectureTotal) }}₮</span>
            </div>
          </div>

        </div>

        <!-- Grand total -->
        <div class="bg-primary/8 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p class="text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-1">Нийт төлбөр</p>
            <p class="text-sm text-on-surface-variant">
              {{ diagCount }} оношилгоо + {{ lectureCount }} цаг сургалт
            </p>
          </div>
          <div class="text-right sm:text-right">
            <span
              class="text-4xl sm:text-5xl font-bold text-primary tabular-nums transition-all duration-300"
              :key="grandTotal"
            >{{ formatPrice(grandTotal) }}₮</span>
          </div>
        </div>

        <!-- Info box -->
        <div class="flex items-start gap-4 bg-tertiary-container/30 p-5 sm:p-6 rounded-xl mb-8 sm:mb-10">
          <span class="material-symbols-outlined text-tertiary flex-shrink-0">info</span>
          <p class="text-on-tertiary-container font-medium text-sm sm:text-base leading-relaxed">
            Байгууллагын ажилчдын тоо болон хөтөлбөрийн цар хүрээнээс хамаарч үнийн уян хатан нөхцөл санал болгоно.
          </p>
        </div>

        <!-- Inquiry form -->
        <div class="border border-outline-variant/30 rounded-2xl p-6 sm:p-8 bg-surface-container-low">
          <h3 class="font-headline text-lg sm:text-xl font-bold mb-1">Үнийн санал авах</h3>
          <p class="text-sm text-on-surface-variant mb-6">Бүх талбарыг бөглөсний дараа хүсэлт илгээх боломжтой.</p>

          <div class="grid sm:grid-cols-2 gap-4 mb-6">

            <!-- Company name -->
            <div class="sm:col-span-2">
              <label class="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-1.5" for="company">
                Байгууллагын нэр <span class="text-error">*</span>
              </label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-[20px] pointer-events-none">business</span>
                <input
                  id="company"
                  v-model.trim="form.company"
                  type="text"
                  placeholder="Байгууллагын нэрийг оруулна уу"
                  class="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant/40 bg-surface focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all"
                />
              </div>
            </div>

            <!-- Phone -->
            <div>
              <label class="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-1.5" for="phone">
                Утасны дугаар <span class="text-error">*</span>
              </label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-[20px] pointer-events-none">phone</span>
                <input
                  id="phone"
                  v-model.trim="form.phone"
                  type="tel"
                  placeholder="9999-9999"
                  class="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant/40 bg-surface focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all"
                />
              </div>
            </div>

            <!-- Email -->
            <div>
              <label class="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-1.5" for="email">
                Цахим шуудан <span class="text-error">*</span>
              </label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-[20px] pointer-events-none">mail</span>
                <input
                  id="email"
                  v-model.trim="form.email"
                  type="email"
                  placeholder="example@company.mn"
                  class="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant/40 bg-surface focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all"
                />
              </div>
            </div>

          </div>

          <!-- Send button -->
          <button
            @click="sendInquiry"
            :disabled="!isFormValid"
            class="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
            :class="isFormValid
              ? 'bg-primary text-on-primary hover:bg-primary/90 active:scale-95 shadow-sm hover:shadow-md cursor-pointer'
              : 'bg-surface-container text-on-surface-variant cursor-not-allowed opacity-60'"
          >
            <span class="material-symbols-outlined text-[20px]">send</span>
            Хүсэлт илгээх
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useIntersection } from '../composables/useIntersection'

const sectionEl = ref(null)
const { isVisible } = useIntersection(sectionEl)

const DIAG_UNIT_PRICE = 100_000
const LECTURE_UNIT_PRICE = 2_000_000

const diagCount = ref(1)
const lectureCount = ref(1)

const diagTotal = computed(() => diagCount.value * DIAG_UNIT_PRICE)
const lectureTotal = computed(() => lectureCount.value * LECTURE_UNIT_PRICE)
const grandTotal = computed(() => diagTotal.value + lectureTotal.value)

function formatPrice(value) {
  return value.toLocaleString('mn-MN')
}

const form = ref({ company: '', phone: '', email: '' })

const isFormValid = computed(() =>
  form.value.company.length > 0 &&
  form.value.phone.length > 0 &&
  form.value.email.length > 0 &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)
)

function sendInquiry() {
  if (!isFormValid.value) return

  const subject = encodeURIComponent(`Үнийн санал хүсэлт – ${form.value.company}`)
  const body = encodeURIComponent(
    `Байгууллагын нэр: ${form.value.company}\n` +
    `Утасны дугаар: ${form.value.phone}\n` +
    `Цахим шуудан: ${form.value.email}\n\n` +
    `--- Хөтөлбөрийн мэдээлэл ---\n` +
    `Оношилгоо: ${diagCount.value} хүн — ${formatPrice(diagTotal.value)}₮\n` +
    `Бүлгийн сургалт: ${lectureCount.value} цаг — ${formatPrice(lectureTotal.value)}₮\n` +
    `Нийт төлбөр: ${formatPrice(grandTotal.value)}₮`
  )

  window.location.href = `mailto:maralguapsychologist@gmail.com?subject=${subject}&body=${body}`
}
</script>

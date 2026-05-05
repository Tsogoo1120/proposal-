<template>
  <nav
    class="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10 transition-shadow duration-300"
    :class="{ 'shadow-md': scrolled }"
  >
    <div class="max-w-7xl mx-auto px-5 sm:px-8 flex justify-between items-center h-16 sm:h-20">
      <!-- Logo -->
      <a href="#program" class="flex items-center gap-2.5">
        <img src="../assets/logo.jpg" alt="The Mindful Canvas" class="h-9 sm:h-11 w-auto rounded-lg object-contain" />
      </a>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center space-x-8 lg:space-x-10">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="font-headline text-base lg:text-lg tracking-tight transition-colors duration-300"
          :class="activeSection === link.section
            ? 'text-primary font-semibold border-b-2 border-primary pb-1'
            : 'text-on-surface-variant hover:text-primary'"
        >
          {{ link.label }}
        </a>
        <a
          href="../index.html"
          class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary font-headline text-base font-semibold hover:bg-primary-dim active:opacity-80 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <span class="material-symbols-outlined text-[20px]">edit_note</span>
          Тест өгөх
        </a>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <span class="material-symbols-outlined text-2xl">{{ menuOpen ? 'close' : 'menu' }}</span>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div
        v-if="menuOpen"
        class="md:hidden bg-surface-container-lowest border-t border-outline-variant/10 shadow-lg"
      >
        <div class="px-5 py-4 space-y-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block px-4 py-3 rounded-xl font-headline text-base transition-colors duration-200"
            :class="activeSection === link.section
              ? 'bg-primary-fixed text-primary font-semibold'
              : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </a>
          <a
            href="../index.html"
            class="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary text-on-primary font-headline text-base font-semibold hover:bg-primary-dim transition-all duration-200"
            @click="menuOpen = false"
          >
            <span class="material-symbols-outlined text-[20px]">edit_note</span>
            Тест өгөх
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)
const activeSection = ref('program')

const navLinks = [
  { href: '#program', label: 'Хөтөлбөр', section: 'program' },
  { href: '#modules', label: 'Модулиуд', section: 'modules' },
  { href: '#diagnostics', label: 'Оношилгоо', section: 'diagnostics' },
  { href: '#team', label: 'Баг', section: 'team' },
]

function onScroll() {
  scrolled.value = window.scrollY > 10

  const sections = ['program', 'modules', 'diagnostics', 'team']
  for (const id of [...sections].reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY + 120 >= el.offsetTop) {
      activeSection.value = id
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

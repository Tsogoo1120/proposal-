<template>
  <footer class="bg-surface-container-low w-full py-10 sm:py-14 px-5 sm:px-8 border-t border-outline-variant/20">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 max-w-7xl mx-auto">

      <!-- Brand -->
      <div>
        <a href="#program" class="flex items-center gap-2.5 mb-4 sm:mb-5 hover:opacity-80 transition-opacity w-fit">
          <img src="../assets/logo.jpg" alt="The Mindful Canvas" class="h-9 sm:h-11 w-auto rounded-lg object-contain" />
        </a>
        <p class="font-headline font-bold text-sm sm:text-base text-on-surface mb-1">ДР Маралгуа</p>
        <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-3">
          Phototherapist | Psychologist | Couples Therapist | Mongolia
        </p>
        <p class="text-xs sm:text-sm leading-relaxed text-secondary">
          © 2026  Бүх эрх хуулиар хамгаалагдсан.
        </p>
      </div>

      <!-- Links -->
      <div class="flex flex-col space-y-3">
        <a
          v-for="link in footerLinks"
          :key="link"
          href="#"
          class="text-xs sm:text-sm text-on-surface-variant hover:text-primary transition-colors duration-200 w-fit"
        >
          {{ link }}
        </a>
      </div>

    </div>
  </footer>
</template>

<script setup>
</script>

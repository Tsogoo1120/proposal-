<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import GroupWorkSection from './components/GroupWorkSection.vue'
import ModulesSection from './components/ModulesSection.vue'
import DiagnosticsSection from './components/DiagnosticsSection.vue'
import ResultsSection from './components/ResultsSection.vue'
import TeamSection from './components/TeamSection.vue'
import PricingSection from './components/PricingSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="bg-background text-on-background selection:bg-primary-fixed-dim min-h-screen">
    <NavBar />
    <HeroSection />
    <GroupWorkSection />
    <ModulesSection />
    <DiagnosticsSection />
    <ResultsSection />
    <TeamSection />
    <PricingSection />
    <FooterSection />
  </div>
</template>

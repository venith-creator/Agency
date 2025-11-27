<template>
  <header class="bg-[#0342A6] sticky top-0 z-50 shadow">
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

      <!-- Logo + Name -->
      <div class="flex items-center gap-3">
        <img src="/TG.png" alt="Timglobal Logo" class="w-8 h-8 object-contain" />
        <router-link to="/" class="text-white font-bold text-xl">
          Timglobal
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-10 text-white">
        <router-link to="/" class="hover:text-gray-200 transition">Home</router-link>
        <router-link to="/about" class="hover:text-gray-200 transition">About Us</router-link>
        <router-link to="/services" class="hover:text-gray-200 transition">Our Services</router-link>
        <router-link to="/portfolio" class="hover:text-gray-200 transition">Portfolio</router-link>
        <router-link to="/contact" class="hover:text-gray-200 transition">Contact Us</router-link>
      </nav>

      <!-- Get Started Button -->
      <div class="hidden md:flex">
        <router-link
          to="/get-started"
          class="px-5 py-2 rounded-lg font-medium bg-[#2EE8C4] text-black hover:opacity-90 transition"
        >
          Get Started
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobile"
        class="md:hidden text-white p-2"
      >
        <XMarkIcon v-if="mobileOpen" class="w-7 h-7" />
        <Bars3Icon v-else class="w-7 h-7" />
      </button>
    </div>

    <!-- Mobile Menu Drawer -->
    <div
      v-if="mobileOpen"
      class="md:hidden bg-[#0052cc] text-white px-6 py-5 space-y-4"
    >
      <router-link to="/" class="block py-2" @click="closeMobile">Home</router-link>
      <router-link to="/about" class="block py-2" @click="closeMobile">About Us</router-link>
      <router-link to="/services" class="block py-2" @click="closeMobile">Our Services</router-link>
      <router-link to="/portfolio" class="block py-2" @click="closeMobile">Portfolio</router-link>
      <router-link to="/contact" class="block py-2" @click="closeMobile">Contact Us</router-link>

      <router-link
        to="/get-started"
        class="block w-full text-center mt-3 px-4 py-3 bg-[#2EE8C4] text-black rounded-lg font-semibold"
        @click="closeMobile"
      >
        Get Started
      </router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const mobileOpen = ref(false);

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value;
};

const closeMobile = () => {
  mobileOpen.value = false;
};
</script>

<style scoped>
/* Optional: smooth fade animation */
</style>

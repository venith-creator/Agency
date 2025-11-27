<template>
  <footer class="bg-[#0052cc] text-white py-16">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

      <!-- Branding -->
      <div class="space-y-4 col-span-1">
        <div class="flex items-center gap-3">
          <img src="/TG.png" alt="Timglobal Logo" class="w-14 h-14 object-contain" />
          <h1 class="text-2xl font-bold">Timglobal</h1>
        </div>

        <p class="text-white/80 text-sm leading-relaxed max-w-xs">
          Building Digital Experiences that Transform Businesses.  
          Full-service digital agency specializing in web & mobile development,
          design, branding, and digital marketing.
        </p>

        <!-- Social Icons -->
        <div class="flex gap-3 pt-2">
          <a href="#" class="w-10 h-10 bg-white text-[#0052cc] rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <Facebook class="w-5 h-5" />
          </a>
          <a href="#" class="w-10 h-10 bg-white text-[#0052cc] rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <Instagram class="w-5 h-5" />
          </a>
          <a href="#" class="w-10 h-10 bg-white text-[#0052cc] rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <Linkedin class="w-5 h-5" />
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="space-y-4">
        <h2 class="text-lg font-semibold text-white">Quick Links</h2>
        <ul class="space-y-2 text-white/80 text-sm">
          <li><a href="/about" class="hover:text-white transition">About Us</a></li>
          <li><a href="#" class="hover:text-white transition">Services</a></li>
          <li><a href="#" class="hover:text-white transition">Portfolio</a></li>
          <li><a href="/contact" class="hover:text-white transition">Contact Us</a></li>
        </ul>
      </div>

      <!-- Services -->
      <div class="space-y-4">
        <h2 class="text-lg font-semibold text-white">Services</h2>
        <ul class="space-y-2 text-white/80 text-sm">
          <li><a href="#" class="hover:text-white transition">Web Development</a></li>
          <li><a href="#" class="hover:text-white transition">Mobile Development</a></li>
          <li><a href="#" class="hover:text-white transition">UI/UX Design</a></li>
          <li><a href="#" class="hover:text-white transition">Branding</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="space-y-4">
        <h2 class="text-lg font-semibold text-white">Contact Us</h2>

        <div class="flex gap-3 items-start text-sm text-white/80">
          <MapPin class="w-5 h-5 text-white mt-1" />
          <span>
            118 Shalford Road, B92 7NF,<br>
            Solihull, Birmingham, UK
          </span>
        </div>

        <div class="flex gap-3 items-center text-sm text-white/80">
          <Mail class="w-5 h-5 text-white" />
          <span>info@timglobal.uk</span>
        </div>

        <div class="flex gap-3 items-center text-sm text-white/80">
          <Phone class="w-5 h-5 text-white" />
          <span>+44 7352 310353</span>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-12 border-t border-white/30 pt-6 text-center text-white/80 text-sm">
      © 2025 Timglobal. All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-vue-next";
</script>

<style scoped>
a:hover svg {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}
</style>

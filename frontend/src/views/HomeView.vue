<template>
  <div class="font-sans">

    <!-- HERO -->
<section class="bg-[#0342A6] text-white overflow-hidden md:h-[88vh] flex items-center">
  <div
    class="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10"
  >
    <!-- left text -->
    <div class="md:w-1/2 space-y-6 text-center md:text-left">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
        Building Digital Experiences<br />
        That Transform Businesses
      </h1>

      <p class="text-sm sm:text-base md:text-lg text-white/90 max-w-xl leading-relaxed mx-auto md:mx-0">
        We're Timglobal — a full-service digital agency specializing in web & mobile
        development, innovative design, and strategic digital marketing. From
        startups to enterprises, we turn your vision into reality.
      </p>

      <div class="flex gap-4 mt-6 justify-center md:justify-start">
        <button class="bg-[#2EE6D6] text-black px-5 py-3 rounded-md font-medium shadow-sm">
          View our work →
        </button>

        <button
          class="border border-white px-5 py-3 rounded-md text-white font-medium bg-transparent hover:bg-white/5"
        >
          Explore services
        </button>
      </div>
    </div>

    <!-- right image -->
    <div class="md:w-1/2 flex items-center justify-center md:justify-end">

      <div class="relative w-72 sm:w-80 md:w-[460px] lg:w-[560px]">

        <!-- RED DOTS -->
        <span class="absolute w-3 h-3 bg-red-500 rounded-full top-6 left-4 opacity-90"></span>
        <span class="absolute w-2.5 h-2.5 bg-red-500 rounded-full top-12 right-8 opacity-90"></span>
        <span class="absolute w-2 h-2 bg-red-500 rounded-full bottom-10 left-6 opacity-90"></span>
        <span class="absolute w-3 h-3 bg-red-500 rounded-full bottom-20 right-5 opacity-90"></span>
        <span class="absolute w-1.5 h-1.5 bg-red-400 rounded-full top-1/2 left-1/4 opacity-80"></span>
        <span class="absolute w-1.5 h-1.5 bg-red-400 rounded-full bottom-1/3 right-1/4 opacity-80"></span>

        <!-- IMAGE -->
        <img
          src="/herimage.png"
          alt="hero person"
          class="w-full h-[80vh] sm:h-[75vh] md:h-[88vh] object-contain"
        />
      </div>

    </div>
  </div>
</section>


    <!-- Logos row -->
     <!-- Logos Auto-Scroll Row -->
      <section class="bg-[#EAF4FF] py-6 overflow-hidden">
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex gap-10 animate-scroll whitespace-nowrap">

            <img src="/likenesshealth.png" class="h-10 object-contain inline-block" />
            <img src="/serviceconnectlogo.png" class="h-6 object-contain inline-block" />
            <img src="/yackiss.png" class="h-12 object-contain inline-block" />
            <img src="/timgloballogo.png" class="h-8 object-contain inline-block" />
            <img src="/kofologo.png" class="h-8 object-contain inline-block" />

          </div>
        </div>
      </section>


    <!-- ABOUT (stacked images + text) -->
     <section class="bg-white py-20">
  <div class="max-w-7xl mx-auto px-6 md:flex md:items-start md:gap-12">

    <!-- LEFT IMAGE CLUSTER -->
    <div class="md:w-1/2 relative flex flex-col justify-between" style="height: calc(100%);">

      <!-- BIG IMAGE (slightly bigger than small, ~20%) -->
      <img 
        src="/big.png" 
        alt="about big" 
        class="rounded-xl shadow-xl w-[60%] md:w-[62%] object-cover"
        style="max-height: 100%;"
      />

      <!-- ICON BUBBLE (on left edge) -->
      <div 
        class="absolute top-5 -left-4 bg-red-500 w-10 h-10 rounded-full 
               flex items-center justify-center text-white shadow-lg"
      >
        <HeartHandshake class="w-5 h-5" />
      </div>

      <!-- SMALL IMAGE (bottom-right, slightly smaller, overlaps, no border) -->
      <img 
        src="/smaller.png" 
        alt="about small"
        class="
          rounded-xl shadow-lg
          w-[50%]
          absolute -bottom-40 right-0  /* slide further down */
        "
      />
    </div>

    <!-- RIGHT TEXT CONTENT -->
    <div class="md:w-1/2 mt-20 md:mt-0">
      <h3 class="text-[#0052cc] text-lg font-semibold">About Us</h3>

      <h2 class="text-3xl md:text-4xl font-bold mt-2">
        Your Partner in Digital Innovation
      </h2>

      <div class="mt-3">
        <div class="h-1 w-14 bg-red-500"></div>
      </div>

      <p class="mt-6 text-gray-700 leading-relaxed max-w-xl">
        Timglobal is a full-service digital agency that transforms businesses<br />
        through innovative technology solutions. From our roots as a healthcare platform to becoming a 
        comprhensive digital services provider, we have evolved into a team of strategists, designers, developers, and marketers
        dedicated to one mission: building digital experiences that drive real business results.
      </p>

      <h3 class="mt-8 text-2xl font-bold">Four Core Pillars</h3>

      <ul class="mt-4 flex flex-col gap-2 max-w-md">
        <li class="flex items-center gap-3">
          <span class="bg-[#0052cc] text-white w-6 h-6 flex items-center justify-center rounded-full">
            <Check class="w-4 h-4" />
          </span>
          Build innovative digital solutions
        </li>
        <li class="flex items-center gap-3">
          <span class="bg-[#0052cc] text-white w-6 h-6 flex items-center justify-center rounded-full">
            <Check class="w-4 h-4" />
          </span>
          Create compelling brand identities
        </li>
        <li class="flex items-center gap-3">
          <span class="bg-[#0052cc] text-white w-6 h-6 flex items-center justify-center rounded-full">
            <Check class="w-4 h-4" />
          </span>
          Design compelling experiences
        </li>
        <li class="flex items-center gap-3">
          <span class="bg-[#0052cc] text-white w-6 h-6 flex items-center justify-center rounded-full">
            <Check class="w-4 h-4" />
          </span>
          Drive measurable growth
        </li>
      </ul>

      <button class="mt-6 bg-[#0052cc] text-white px-6 py-3 rounded-md font-semibold">
        Learn more
      </button>
    </div>

  </div>
</section>

    <section class="bg-[#EAF4FF] bg-[url('/decorative-pattern.png')] bg-no-repeat bg-left-top py-20">
        <div class="max-w-7xl mx-auto px-6">

          <h2 class="text-3xl font-bold text-gray-900 text-center">Our Services</h2>
          <p class="text-gray-700 mt-2 font-semibold text-center">Comprehensive Digital Solutions to Grow Your Business</p>

          <!-- SERVICES GRID USING TRUE ROWS -->
          <div class="mt-12 space-y-1">

            <!-- ROW 1: Web Dev + Logo Design -->
            <div class="grid md:grid-cols-2 border-b border-black/20 pb-4">

              <!-- Web Dev -->
              <div class="flex gap-4 items-center pr-6">
                <div class="w-14 h-14 rounded-md flex-none bg-slate-300 flex items-center justify-center">
                  <Code class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-semibold text-lg text-gray-900">Web Development</h4>
                  <p class="text-gray-700 text-[15px]">
                    Custom websites and scalable web applications built with modern technologies. From responsive
                    corporate sites to complex web platforms, we deliver scalable solutions.
                  </p>
                </div>
              </div>

              <!-- Logo Design -->
              <div class="flex gap-4 items-center pl-6">
                <div class="w-14 h-14 rounded-md bg-[#2EE6D6] flex flex-none items-center justify-center">
                  <Palette class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-semibold text-lg text-gray-900">Logo Design</h4>
                  <p class="text-gray-700 text-[15px]">
                    Memorable logo designs that define your brand. We design distinctive, versatile Logos
                    that work across all platforms and media.
                  </p>
                </div>
              </div>

            </div>

            <!-- ROW 2: Mobile Dev + SEO -->
            <div class="grid md:grid-cols-2 border-b border-black/20 pb-4">

              <!-- Mobile Dev -->
              <div class="flex gap-4 items-center pr-6">
                <div class="w-14 h-14 rounded-md bg-orange-300 flex flex-none items-center justify-center">
                  <Smartphone class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-semibold text-lg text-gray-900">Mobile Development</h4>
                  <p class="text-gray-700 text-[15px]">
                    Native and cross-platform mobile applications for iOS and Android. We create intuitive, high performance
                    apps that users love.
                  </p>
                </div>
              </div>

              <!-- SEO -->
              <div class="flex gap-4 items-center pl-6">
                <div class="w-14 h-14 rounded-md bg-green-300 flex items-center flex-none justify-center">
                  <Search class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-semibold text-lg text-gray-900">SEO Optimization</h4>
                  <p class="text-gray-700 text-[15px]">
                    Boost your online visibility and organic traffic. Our data-driven SEO strategies 
                    help you rank higher and reach more customers.
                  </p>
                </div>
              </div>

            </div>

            <!-- ROW 3: UI/UX + Digital Marketing -->
            <div class="grid md:grid-cols-2 border-b border-black/20 pb-4">

              <!-- UI/UX -->
              <div class="flex gap-4 items-center pr-6">
                <div class="w-14 h-14 rounded-md bg-pink-300 flex flex-none items-center justify-center">
                  <Palette class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-semibold text-lg text-gray-900">UI/UX Design</h4>
                  <p class="text-gray-700 text-[15px]">
                    Beautiful, user-centric designs that capture your brand essence. 
                    we create engaging digital experiences with modern UI/UX principles.
                  </p>
                </div>
              </div>

              <!-- Digital Marketing -->
              <div class="flex gap-4 items-center pl-6">
                <div class="w-14 h-14 rounded-md bg-orange-300 flex flex-none items-center justify-center">
                  <Megaphone class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-semibold text-lg text-gray-900">Digital Marketing</h4>
                  <p class="text-gray-700 text-[15px]">
                    Strategic marketing campaigns that drive results. From social media to email
                    marketing, we help you connect with your audience.
                  </p>
                </div>
              </div>

            </div>

            <!-- ROW 4: Branding Alone -->
            <div class="grid md:grid-cols-2 border-b border-black/20 pb-4">

              <!-- Branding -->
              <div class="flex gap-4 items-center pr-6">
                <div class="w-14 h-14 rounded-md bg-green-200 flex flex-none items-center justify-center">
                  <PenTool class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-semibold text-lg text-gray-900">Branding & Identity</h4>
                  <p class="text-gray-700 text-[15px]">
                    Complete brand identity solutions that make you stand out. From strategy to execution,
                    we build brands that resonate.
                  </p>
                </div>
              </div>

              <!-- EMPTY RIGHT CELL -->
              <div></div>

            </div>

          </div>
        </div>
      </section>

    <!-- Innovation Lab -->
    <section class="py-20 bg-[#F0F6FF]
">
      <div class="max-w-7xl mx-auto px-6 md:flex md:gap-12">
        <!-- left images -->
        <div class="md:w-1/2 md:h-full flex flex-col gap-6">
          <img src="/ontop.png" alt="" class="rounded-lg w-full object-cover shadow flex-1"/>
          <img src="/marketplace.png" alt="" class="rounded-lg w-full object-cover shadow flex-1"/>
        </div>

        <!-- right text -->
        <div class="md:w-1/2 md:h-full flex flex-col justify-between space-y-8 leading-loose">

            <!-- TOP BLOCK -->
            <div class="text-center mx-auto">
                <div class="inline-flex items-center gap-3 bg-[#0052cc] text-white px-4 py-2 rounded-full mx-auto">
                    <Star class="w-4 h-4" />
                    <span class="font-medium">FROM OUR INNOVATION LAB</span>
                </div>

                <h2 class="text-2xl md:text-3xl font-bold mt-4">
                    Introducing Spotlight Software
                </h2>

                <p class="text-lg font-semibold mt-2">
                    Our Flagship Product - AI-Powered Healthcare Management Platform
                </p>
            </div>

            <!-- description -->
            <p class="text-gray-600">
                Spotlight is our proprietrary healthcare management solution that leverages
                artificial intelligence to streamline clinical operations, patient care, and adminstrative workflows. 
                Built from our deep expertise in healthcare technology, Spotlight represents the future 
                of integrated healthcare management.
            </p>

            <!-- 6 points -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div class="flex items-start gap-4">
                    <span class="bg-[#0052cc] w-7 h-7 rounded-full inline-flex items-center justify-center text-white">
                        <Check class="w-3.5 h-3.5" />
                    </span>
                    <span>Reduces administrative burden</span>
                </div>

                <div class="flex items-start gap-4">
                    <span class="bg-[#0052cc] w-7 h-7 rounded-full inline-flex items-center justify-center text-white">
                        <Check class="w-3.5 h-3.5" />
                    </span>
                    <span>Scalable for practices of any size</span>
                </div>

                <div class="flex items-start gap-4">
                    <span class="bg-[#0052cc] w-7 h-7 rounded-full flex-none inline-flex items-center justify-center text-white">
                        <Check class="w-3.5 h-3.5" />
                    </span>
                    <span>Real-time dashboards and insights with compliance and performance reports</span>
                </div>

                <div class="flex items-start gap-4">
                    <span class="bg-[#0052cc] w-7 h-7 rounded-full flex-none inline-flex items-center justify-center text-white">
                        <Check class="w-3.5 h-3.5" />
                    </span>
                    <span>Provides real-time sentiment analysis to understand patient and staff experiences</span>
                </div>

                <div class="flex items-start gap-4">
                    <span class="bg-[#0052cc] w-7 h-7 rounded-full flex-none inline-flex items-center justify-center text-white">
                        <Check class="w-3.5 h-3.5" />
                    </span>
                    <span>Offers a trusted network of verified care homes</span>
                </div>

                <div class="flex items-start gap-4">
                    <span class="bg-[#0052cc] w-7 h-7 rounded-full flex-none inline-flex items-center justify-center text-white">
                        <Check class="w-3.5 h-3.5" />
                    </span>
                    <span>Integrated Patient Management system</span>
                </div>
            </div>

            <!-- buttons -->
            <div class="flex gap-4">
                <a href="https://timglobal.uk" target="_blank"
                  class="inline-flex items-center gap-2 bg-[#0052cc] text-white px-5 py-3 rounded-md">
                    Visit timglobal.uk <ExternalLink class="w-4 h-4"/>
                </a>
                <button class="border border-[#0052cc] text-[#0052cc] px-5 py-3 rounded-md">
                    Watch Demo
                </button>
            </div>

        </div>

      </div>
    </section>

    <!-- FEATURED PROJECTS SECTION -->
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-6">

        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900">Featured Projects</h2>
          <p class="text-gray-700 mt-2 font-semibold">Explore some of our best work for amazing clients</p>
        </div>

        <!-- PROJECT 1 -->
        <div class="flex flex-col md:flex-row items-center border-2 border-green-500 rounded-xl overflow-hidden mb-12 bg-blue-50 relative">
          
          <!-- LEFT CONTENT -->
          <div class="md:w-1/2 p-8">
            <h3 class="text-[#0052cc] text-2xl font-bold">
              African & Caribbean Online Supermarket Delivering Fresh & Quality Groceries
            </h3>
            <p class="mt-4 text-gray-900 text-sm leading-relaxed">
              Kofo is a modern African and Caribbean supermarket that provides customers
              with easy access to authentic food items from across Africa and the Caribbean.<br />
              The platform offers a seamless online shopping experience , allowing customers  to
              browse, order and recieve fresh groceries conveniently at their doorstep.
            </p>

            <h4 class="text-[#0052cc] font-semibold mt-6">Services Provided:</h4>
            <div class="flex flex-wrap gap-2 mt-2">
              <span class="px-3 py-1 border border-blue-500 bg-transparent text-black-700 rounded-md text-sm">Website Development</span>
              <span class="px-3 py-1 border border-blue-500 bg-transparent text-black-700 rounded-md text-sm">UI/UX Design</span>
              <span class="px-3 py-1 border border-blue-500 bg-transparent text-black-700 rounded-md text-sm">Content Writing</span>
              <span class="px-3 py-1 border border-blue-500 bg-transparent text-black-700 rounded-md text-sm">Database Architecture</span>
            </div>
          </div>

          <!-- RIGHT IMAGE -->
          <div class="md:w-1/2">
            <img src="/kofoipad.png" alt="Project 1" class="w-full h-full object-cover" />
          </div>

          <!-- BOTTOM BUTTON CENTERED -->
          <div class="absolute left-1/2 transform -translate-x-1/2 bottom-4">
            <a href="https://kofo.uk" target="_blank"
                  class="inline-flex items-center gap-2 bg-[#0052cc] text-white px-5 py-3 rounded-md">
                    Visit kofo.uk <ExternalLink class="w-4 h-4"/>
                </a>
          </div>
        </div>

        <!-- PROJECT 2 -->
        <div class="flex flex-col md:flex-row items-center border-2 border-blue-500 rounded-xl overflow-hidden mb-12 bg-amber-50 relative">
          
          <!-- LEFT CONTENT -->
          <div class="md:w-1/2 p-8">
            <h3 class="text-[#0052cc] text-2xl font-bold">
              Smart Service Management Platform for Homes & Businesses
            </h3>
            <p class="mt-4 text-gray-900 text-sm leading-relaxed">
             Service Connect is an all-in-one service marketplace that links customers with reliable
             service providers across various industries. The platform streamlines service discovery, booking,
             communication, and workflow management-making it easier for individuals and organisations
             to access trusted professionals on demand
            </p>

            <h4 class="text-[#0052cc] font-semibold mt-6">Services Provided:</h4>
            <div class="flex flex-wrap gap-2 mt-2">
              <span class="px-3 py-1 border border-blue-500 bg-transparent text-black-700 rounded-md text-sm">Website Development</span>
              <span class="px-3 py-1 border border-blue-500 bg-transparent text-black-700 rounded-md text-sm">UI/UX Design</span>
              <span class="px-3 py-1 border border-blue-500 bg-transparent text-black-700 rounded-md text-sm">Content Writing</span>
              <span class="px-3 py-1 border border-blue-500 bg-transparent text-black-700 rounded-md text-sm">Database Architecture</span>
              <span class="px-3 py-1 border border-blue-500 bg-transparent text-black-700 rounded-md text-sm">User Flow Development</span>
            </div>
          </div>

          <!-- RIGHT IMAGE -->
          <div class="md:w-1/2">
            <img src="/serviceconnect.png" alt="Project 2" class="w-full h-full object-cover" />
          </div>

          <!-- BOTTOM BUTTON CENTERED -->
          <div class="absolute left-1/2 transform -translate-x-1/2 bottom-4">
            <a href="https://serviceconnect.uk" target="_blank"
                  class="inline-flex items-center gap-2 bg-[#0052cc] text-white px-5 py-3 rounded-md">
                    Visit serviceconnect.uk <ExternalLink class="w-4 h-4"/>
                </a>
          </div>
        </div>

      </div>
    </section>

    <!-- WHY PARTNER WITH US -->
      <section class="bg-white py-20">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <!-- LEFT IMAGE -->
          <div class="flex justify-center">
            <img 
              src="/whypartnerwithus.png" 
              alt="Team" 
              class="w-80 h-80 object-cover rounded-full shadow-lg"
            />
          </div>

          <!-- RIGHT CONTENT -->
          <div>

            <!-- HEADING -->
            <h2 class="text-3xl font-bold text-center md:text-left text-gray-900 mb-8">
              Why Partner With Us
            </h2>

            <div class="space-y-8">

              <!-- POINT 1 -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
                  <User2 class="w-6 h-6 text-black" />
                </div>

                <div>
                  <h3 class="text-xl font-semibold text-gray-900">Expert Team</h3>
                  <p class="text-gray-600 text-sm mt-1">
                    Our team consists of experienced developers, designers, and strategists
                    dedicated to delivering world-class digital solutions.
                  </p>
                </div>
              </div>

              <!-- POINT 2 -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
                  <ContactRound class="w-6 h-6 text-black" />
                </div>

                <div>
                  <h3 class="text-xl font-semibold text-gray-900">End-to-End Solutions</h3>
                  <p class="text-gray-600 text-sm mt-1">
                    From strategy to deployment, we manage the entire lifecycle of your digital
                    products with precision and excellence.
                  </p>
                </div>
              </div>

              <!-- POINT 3 -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
                  <Lightbulb class="w-6 h-6 text-black" />
                </div>

                <div>
                  <h3 class="text-xl font-semibold text-gray-900">Innovation-Driven</h3>
                  <p class="text-gray-600 text-sm mt-1">
                    We integrate creativity, modern technologies, and forward-thinking ideas
                    to build solutions that stand out.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

  </div>
</template>

<script setup>
/* lucide icons */
import { Code, Smartphone, PenTool, Palette, Search, Megaphone, Check, HeartHandshake, Star, ExternalLink,  User2, ContactRound, Lightbulb  } from 'lucide-vue-next'
</script>

<style scoped>
/* small visual tweak so hero image slightly overflows on narrow screens */
@media (min-width: 768px) {
  section > .max-w-7xl { padding-left: 1.5rem; padding-right: 1.5rem; }
}

/* subtle shadow for service icons */
.w-14.h-14 { box-shadow: 0 1px 2px rgba(0,0,0,0.04); }

/* ensure overlapping small image doesn't push layout on small screens */
@media (max-width: 767px){
  img[alt="about small"] { position: static !important; width: 60% !important; margin-top: 1rem; }
}
@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-scroll {
  animation: scroll 22s linear infinite;
}

</style>


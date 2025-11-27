<template>
  <div class="w-full">

   <!-- ==================== HERO ==================== -->
    <section 
      class="relative h-[70vh] w-full bg-cover bg-center flex flex-col items-center justify-center text-white text-center"
      style="background-image: url('/heroconc.png')"
    >
      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-black/50"></div>

      <!-- Content on top -->
      <div class="relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold">About Us</h1>
        <p class="mt-3 text-lg md:text-xl font-light">
          Building Digital Excellence And Innovative Solutions
        </p>
      </div>
    </section>

    <!-- ==================== ABOUT SECTION ==================== -->
    <section class="bg-white pt-20 pb-16 md:pb-20">
      <div class="max-w-7xl mx-auto px-6 md:flex md:items-start md:gap-12">

        <!-- LEFT IMAGE CLUSTER -->
        <div class="md:w-1/2 relative flex flex-col justify-between">

          <!-- BIG IMAGE -->
          <img 
            src="/big.png" 
            class="rounded-xl shadow-xl w-[60%] md:w-[62%] object-cover"
          />

          <!-- ICON -->
          <div 
            class="absolute top-5 -left-4 bg-red-500 w-10 h-10 rounded-full 
                  flex items-center justify-center text-white shadow-lg"
          >
            <HeartHandshake class="w-5 h-5" />
          </div>

          <!-- SMALL IMAGE (fixed!) -->
          <img 
            src="/smaller.png" 
            class="rounded-xl shadow-lg w-[50%] absolute bottom-0 md:-bottom-32 right-0"
          />
        </div>

        <!-- RIGHT TEXT -->
        <div class="md:w-1/2 mt-20 md:mt-0">
          <h3 class="text-[#0052cc] text-lg font-semibold">About Us</h3>

          <h2 class="text-3xl md:text-4xl font-bold mt-2">
            Your Partner in Digital Innovation
          </h2>

          <div class="mt-3">
            <div class="h-1 w-14 bg-red-500"></div>
          </div>

          <p class="mt-6 text-gray-700 leading-relaxed max-w-xl">
            Timglobal is a full-service digital agency that transforms businesses
            through innovative technology solutions.
            From our roots as a healthcare platform to a
            comprehensive digital services agency, we are committed to delivering
            digital experiences that drive real business results.
          </p>

          <h3 class="mt-8 text-2xl font-bold">Four Core Pillars</h3>

          <ul class="mt-4 flex flex-col gap-2 max-w-md">
            <li class="flex items-center gap-3">
              <span class="bg-[#0052cc] text-white w-6 h-6 rounded-full flex justify-center items-center">
                <Check class="w-4 h-4" />
              </span>
              Build innovative digital solutions
            </li>
            <li class="flex items-center gap-3">
              <span class="bg-[#0052cc] text-white w-6 h-6 rounded-full flex justify-center items-center">
                <Check class="w-4 h-4" />
              </span>
              Create compelling brand identities
            </li>
            <li class="flex items-center gap-3">
              <span class="bg-[#0052cc] text-white w-6 h-6 rounded-full flex justify-center items-center">
                <Check class="w-4 h-4" />
              </span>
              Design compelling experiences
            </li>
            <li class="flex items-center gap-3">
              <span class="bg-[#0052cc] text-white w-6 h-6 rounded-full flex justify-center items-center">
                <Check class="w-4 h-4" />
              </span>
              Drive measurable growth
            </li>
          </ul>

          <button class="mt-6 bg-[#0052cc] text-white px-6 py-3 rounded-md font-semibold">
            Contact Us
          </button>

        </div>

      </div>
    </section>


    <!-- ==================== AUTO SCROLL LOGOS ==================== -->
    <section class="bg-[#EAF4FF] py-6 overflow-hidden mb-20 md:mb-28">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex gap-10 animate-scroll whitespace-nowrap">
          <img src="/likenesshealth.png" class="h-10 inline-block" />
          <img src="/serviceconnectlogo.png" class="h-6 inline-block" />
          <img src="/yackiss.png" class="h-12 inline-block" />
          <img src="/timgloballogo.png" class="h-8 inline-block" />
          <img src="/kofologo.png" class="h-8 inline-block" />
        </div>
      </div>
    </section>


   <!-- ==================== VISION & MISSION ==================== -->
      <section 
        class="relative w-full py-24 bg-cover bg-center"
        style="background-image: url('/vision-bg.png')"
      >

        <!-- DARK DIMMER -->
        <div class="absolute inset-0 bg-black/40"></div>

        <!-- BLUE DIAGONAL OVERLAY -->
        <div 
          class="absolute inset-0 bg-[#0342A6]/90"
          style="clip-path: polygon(0 0, 35% 0, 20% 100%, 0% 100%);"
        ></div>

        <!-- TEXT ON BLUE AREA -->
        <div class="relative z-10 text-white pl-10 md:pl-16 max-w-lg text-left">
          <h2 class="  text-lg md:text-xl font-semibold tracking-wide">
            Our Vision & Mission
          </h2>

          <p class="mt-2 text-xl md:text-2xl font-light">
            <span class="relative inline-block">
              Dis
              <span class="absolute left-0 -bottom-1 h-[3px] w-6 bg-red-500"></span>
            </span>cover our core Principles
          </p>

        </div>


        <!-- WHITE BOXES -->
        <div class="relative z-10 max-w-6xl mx-auto px-6 mt-16 flex flex-col md:flex-row gap-10">

          <!-- VISION BOX -->
          <div class="bg-white rounded-xl shadow-xl p-8 w-full md:w-1/2 relative">
            <Eye class="mx-auto w-10 h-10 text-blue-600" />
            <h3 class="mt-3 text-lg font-bold text-gray-800">Our Vision</h3>
            <p class="mt-3 text-gray-600 leading-relaxed">
              To be the innovative partner of choice for businesses seeking to
              lead in the digital era.
            </p>

            <!-- RED FOOT LINE -->
            <div class="absolute bottom-0 left-0 w-full h-[6px] bg-red-500 rounded-b-xl"></div>
          </div>

          <!-- MISSION BOX -->
          <div class="bg-white rounded-xl shadow-xl p-8 w-full md:w-1/2 relative">
            <CircleDot class="mx-auto w-10 h-10 text-blue-600" />
            <h3 class="mt-3 text-lg font-bold text-gray-800">Our Mission</h3>
            <p class="mt-3 text-gray-600 leading-relaxed">
              To deliver digital solutions that empower growth,
              innovation, and long-term success.
            </p>

            <!-- RED FOOT LINE -->
            <div class="absolute bottom-0 left-0 w-full h-[6px] bg-red-500 rounded-b-xl"></div>
          </div>

        </div>

      </section>



    <!-- ==================== CORE VALUES ==================== -->
    <section class="py-20 bg-white text-center">
      <h2 class="text-3xl font-bold">Our Core Values</h2>

      <div class="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">

        <!-- Accountability -->
        <div class="flex flex-col items-center">
          <div class="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
            <Handshake class="w-10 h-10 text-blue-600" />
          </div>
          <p class="mt-3 font-semibold">Accountability</p>
        </div>

        <!-- Customer First -->
        <div class="flex flex-col items-center">
          <div class="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            <Users class="w-10 h-10 text-green-600" />
          </div>
          <p class="mt-3 font-semibold">Customer First</p>
        </div>

        <!-- Integrity -->
        <div class="flex flex-col items-center">
          <div class="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
            <ShieldCheck class="w-10 h-10 text-red-600" />
          </div>
          <p class="mt-3 font-semibold">Integrity</p>
        </div>

        <!-- Drive -->
        <div class="flex flex-col items-center">
          <div class="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            <MapPin class="w-10 h-10 text-green-600" />
          </div>
          <p class="mt-3 font-semibold">Drive</p>
        </div>

        <!-- Solution Provider -->
        <div class="flex flex-col items-center">
          <div class="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
            <FileUser class="w-10 h-10 text-orange-600" />
          </div>
          <p class="mt-3 font-semibold">Solution Provider</p>
        </div>

      </div>
    </section>


    <!-- ==================== WHY CHOOSE US ==================== -->
    <section class="py-20 bg-[#F8FAFF]">
      <div class="max-w-7xl mx-auto px-6 text-center">
        
        <h2 class="text-3xl font-bold">Why Choose Us</h2>
        <p class="text-gray-600 mt-3">
          What sets us apart in the digital landscape
        </p>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">

          <!-- BOX 1 -->
          <div class="bg-white p-6 rounded-xl shadow-md text-left">
            <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Library class="text-white w-6 h-6" />
            </div>
            <h3 class="mt-2 font-semibold text-lg">One Agency, Every Digital Service</h3>
            <p class="text-gray-600 text-sm mt-2">
              Get everything from a single integrated team that speaks the same language,
               shares the same vision, and works seamlessly together toward your success.
            </p>
          </div>

          <!-- BOX 2 -->
          <div class="bg-white p-6 rounded-xl shadow-md text-left">
            <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Plane class="text-white w-6 h-6" />
            </div>
            <h3 class="mt-2 font-semibold text-lg">Real Products, Real Innovation</h3>
            <p class="text-gray-600 text-sm mt-2">
              We are not just service providers, we are product builders. Our various 
              solution proves we can take ideas from concept to successful,
               revenue-generating platforms. That's the expertise we bring to your project.
            </p>
          </div>

          <!-- BOX 3 -->
          <div class="bg-white p-6 rounded-xl shadow-md text-left">
            <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <TrendingUp class="text-white w-6 h-6" />
            </div>
            <h3 class="mt-2 font-semibold text-lg">Technology That Scales with You</h3>
            <p class="text-gray-600 text-sm mt-2">
              Start small, grow big. We architect solutions with scalability baked in
              from day one. Whether you're serving 100 users or 100,000, 
              our platforms adapt and grow without expensive rebuilds or performance issues.
            </p>
          </div>

          <!-- BOX 4 -->
          <div class="bg-white p-6 rounded-xl shadow-md text-left">
            <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <UsersRound class="text-white w-6 h-6" />
            </div>
            <h3 class="mt-2 font-semibold text-lg">Strategic Partners</h3>
            <p class="text-gray-600 text-sm mt-2">
              Get a team that cares about your business outcomes, not just project
                completion. We provide strategic
                guidance, proactive
                recommendations, and honest advice.
                Your success is our metric.
            </p>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>
<script setup>
import { 
  HeartHandshake,
  Check,
  Eye,
  CircleDot,
  Handshake,
  Users,
  ShieldCheck,
  MapPin,
  FileUser,
  Library,
  Plane,
  TrendingUp,
  UsersRound
} from "lucide-vue-next";
</script>

<style scoped>
@keyframes scroll {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.animate-scroll {
  animation: scroll 22s linear infinite;
}
</style>

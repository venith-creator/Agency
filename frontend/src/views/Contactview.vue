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
        <h1 class="text-4xl md:text-5xl font-bold">contact Us</h1>
        <p class="mt-3 text-lg md:text-xl font-light">
          Have a question or ready to start your project?, We're just a message away
          . Let's turn your ideas into digital reality.
        </p>
      </div>
    </section>

    <!-- ==================== CONTACT SECTION ==================== -->
        <section class="w-full bg-[#FFF8E6] py-24 text-center">

        <!-- TOP BUTTON -->
        <div class="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-md">
            <span class="w-2 h-2 rounded-full bg-red-500"></span>
            <span class="text-black font-medium">Contact Us</span>
            <span class="w-2 h-2 rounded-full bg-red-500"></span>
        </div>

        <!-- SUBTITLE -->
        <p class="mt-4 text-black-200 text-lg">
            We respond to all inquiries <span class="font-semibold">within one business day.</span>
        </p>

        <!-- THREE INFO BOXES -->
        <div class="mt-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

            <!-- LOCATION BOX -->
            <div class="bg-white p-6 rounded-xl shadow-lg text-left">
            <div class="flex items-start gap-3">
                <!-- Location Icon -->
                <svg class="w-7 h-7 text-black" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19 10.5c0 7-7 11-7 11s-7-4-7-11a7 7 0 1114 0z" />
                </svg>

                <div>
                <h3 class="font-bold text-black text-lg">Visit Us</h3>
                <p class="mt-1 text-gray-700 leading-relaxed">
                    118 Shalford Road, B92 7NF,<br>
                    Solihull, Birmingham, UK
                </p>
                </div>
            </div>
            </div>

            <!-- CALL BOX -->
            <div class="bg-white p-6 rounded-xl shadow-lg text-left">
            <div class="flex items-start gap-3">
                <!-- Phone Icon -->
                <svg class="w-7 h-7 text-black" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2 5.5C2 15 9 22 18.5 22c1.2 0 2-.8 2-2v-2c0-.6-.4-1-1-1-1.3 0-2.6-.2-3.7-.7-.5-.2-1.1 0-1.4.4l-1.6 1.6c-3.8-1.9-6.2-4.3-8.1-8.1l1.6-1.6c.4-.4.6-.9.4-1.4C6.2 7.1 6 5.8 6 4.5c0-.6-.4-1-1-1H3.5c-.8 0-1.5.8-1.5 2z" />
                </svg>

                <div>
                <h3 class="font-bold text-black text-lg">Call Us</h3>
                <p class="mt-1 text-gray-700">
                    +44 7352 310353
                </p>
                </div>
            </div>
            </div>

            <!-- EMAIL BOX -->
            <div class="bg-white p-6 rounded-xl shadow-lg text-left">
            <div class="flex items-start gap-3">
                <!-- Email Icon -->
                <svg class="w-7 h-7 text-black" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 8l7.89 4.73c.69.41 1.54.41 2.23 0L21 8M4 6h16a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>

                <div>
                <h3 class="font-bold text-black text-lg">Send an Email</h3>
                <p class="mt-1 text-gray-700 leading-relaxed">
                    pmo@timglobal.uk <br>
                    info@timglobal.uk
                </p>
                </div>
            </div>
            </div>

        </div>
        </section>

        <!-- ==================== CONTACT FORM SECTION ==================== -->
        <section class="w-full bg-white py-24">
        <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

            <!-- LEFT IMAGE -->
            <div>
            <img 
                src="/contactus-removebg-preview.png" 
                alt="contact" 
                class="w-full rounded-xl object-cover -mt-10 "
            />
            </div>

            <!-- RIGHT FORM -->
            <div>

            <!-- Heading -->
            <h2 class="text-3xl font-bold">
                <span class="text-blue-600">Reach</span>
                <span class="text-black">& Get in Touch With Us!</span>
            </h2>

            <!-- FORM FIELDS -->
            <form class="mt-8 space-y-6">

                <!-- FULL NAME -->
                <div>
                <label class="font-semibold text-gray-800">
                    Full Name <span class="text-red-500">*</span>
                </label>
                <input 
                    type="text"
                    placeholder="John Smith"
                    class="w-full mt-2 p-3 rounded-lg border border-gray-300 bg-[#FFF8E6] placeholder-gray-500"
                />
                </div>

                <!-- EMAIL + PHONE ON SAME ROW -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                <!-- EMAIL -->
                <div>
                    <label class="font-semibold text-gray-800">
                    Email Address <span class="text-red-500">*</span>
                    </label>
                    <input 
                    type="email"
                    placeholder="John@example.com"
                    class="w-full mt-2 p-3 rounded-lg border border-gray-300 bg-[#FFF8E6] placeholder-gray-500"
                    />
                </div>

                <!-- PHONE -->
                <div>
                    <label class="font-semibold text-gray-800">
                    Phone Number <span class="text-gray-400">(optional)</span>
                    </label>
                    <input 
                    type="text"
                    placeholder="07933 487253"
                    class="w-full mt-2 p-3 rounded-lg border border-gray-300 bg-[#FFF8E6] placeholder-gray-500"
                    />
                </div>

                </div>

                <!-- MESSAGE -->
                <div>
                <label class="font-semibold text-gray-800">
                    Message <span class="text-red-500">*</span>
                </label>
                <textarea 
                    rows="5"
                    placeholder="Tell us briefly about your care needs......"
                    class="w-full mt-2 p-3 rounded-lg border border-gray-300 bg-[#FFF8E6] placeholder-gray-500"
                ></textarea>
                </div>

                <!-- SEND BUTTON -->
                <button 
                type="button"
                class="w-full  bg-blue-600 text-white p-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
                >
                Send Message
                </button>

                <!-- SMALL NOTE -->
                <p class="text-gray-500 text-sm text-center ">
                Our team will reach out soon with the next steps.
                </p>

            </form>
            </div>

        </div>
        </section>

    </div>
</template>
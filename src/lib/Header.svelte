<script lang="ts">
  let isMenuOpen = $state(false);
</script>

<header
  class="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-md"
>
  <div class="w-full px-6 py-4 flex items-center justify-between">
    <!-- Left: Logo + Navigation -->
    <div class="flex items-center space-x-12">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <div class="text-2xl font-serif font-semibold text-primary">Hotel</div>
        <div class="text-2xl font-serif font-light text-secondary italic">
          Scape
        </div>
      </div>

      <!-- Nav Links -->
      <div class="hidden md:flex items-center space-x-6">
        <a
          href="#story"
          class="text-secondary hover:text-primary font-medium transition duration-300"
        >
          Our Story
        </a>
        <a
          href="#packages"
          class="text-secondary hover:text-primary font-medium transition duration-300"
        >
          Packages
        </a>
        <a
          href="#contact"
          class="text-secondary hover:text-primary font-medium transition duration-300"
        >
          Contact
        </a>
      </div>
    </div>

    <!-- Right: Book Now Button -->
    <div class="hidden md:block">
      <button
        class="btn bg-sageGreen text-white border-0 hover:bg-forestGreen transition-all duration-300 hover:scale-110"
      >
        BOOK NOW
      </button>
    </div>

    <!-- Mobile Menu Toggle -->
    <button
      class="md:hidden btn btn-ghost"
      on:click={() => (isMenuOpen = !isMenuOpen)}
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>

  <!-- Mobile Dropdown Menu -->
  {#if isMenuOpen}
    <div
      class="md:hidden bg-white/80 backdrop-blur-md text-secondary px-6 py-4 space-y-4 border-t border-gray-300"
    >
      <a href="#story" class="block hover:text-primary">Our Story</a>
      <a href="#packages" class="block hover:text-primary">Packages</a>
      <a href="#contact" class="block hover:text-primary">Contact</a>
      <button class="btn btn-primary w-full"> BOOK NOW </button>
    </div>
  {/if}
</header>

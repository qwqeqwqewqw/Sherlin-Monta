<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import LocalTalents from '$lib/components/LocalTalents.svelte';
  import Features from '$lib/components/Features.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div data-theme="hotel" class="min-h-screen bg-base-100">
  <Header />
  <main>
    <Hero />
    <LocalTalents />
    <Features />
  </main>
  <Footer />
</div>
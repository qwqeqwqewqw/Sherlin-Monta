<script>
  import Header from "./lib/Header.svelte";
  import Hero from "./lib/Hero.svelte";
  import LocalTalents from "./lib/LocalTalents.svelte";
  import Features from "./lib/Features.svelte";
  import Footer from "./lib/Footer.svelte";
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

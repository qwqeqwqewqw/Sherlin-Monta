<script lang="ts">
  const features = [
    {
      title: "Luxury Amenities",
      description: "Experience world-class facilities designed for your comfort and relaxation.",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Fine Dining",
      description: "Savor exquisite culinary experiences crafted by renowned local chefs.",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Spa & Wellness",
      description: "Rejuvenate your mind and body with our comprehensive wellness services.",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];
</script>

<section class="py-20 bg-base-200">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="font-serif text-4xl md:text-5xl text-secondary mb-4">
        Exceptional Experiences
      </h2>
      <p class="text-lg text-secondary/80 max-w-2xl mx-auto">
        Every moment at Hotel Scape is carefully curated to create unforgettable memories
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      {#each features as feature}
        <div class="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <figure class="aspect-[4/3]">
            <img 
              src={feature.image} 
              alt={feature.title}
              class="w-full h-full object-cover"
            />
          </figure>
          <div class="card-body p-8">
            <h3 class="card-title font-serif text-2xl text-secondary mb-4">
              {feature.title}
            </h3>
            <p class="text-secondary/80 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
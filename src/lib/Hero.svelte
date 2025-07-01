<script lang="ts">
  let arrivalDate = $state("");
  let departureDate = $state("");
  let guests = $state(2);
</script>

<section class="relative min-h-screen bg-base-100">
  <div class="flex flex-col lg:flex-row min-h-screen">
    <!-- Left Side -->
    <div class="w-full lg:w-1/2 flex items-center px-6 py-20">
      <div class="space-y-8 w-full">
        <!-- Headings -->
        <div class="space-y-6">
          <div class="script-font text-accent text-3xl md:text-4xl">
            Memorable
          </div>
          <h1
            class="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-secondary"
          >
            Hotels for<br />
            moments
            <span class="script-font text-accent italic font-medium">Rich</span
            ><br />
            in emotions
          </h1>
          <p class="text-lg text-secondary/80 max-w-md leading-relaxed">
            Book now and get the best prices
          </p>
        </div>

        <!-- Booking Form -->
        <div class="bg-white p-8 rounded-2xl shadow-xl max-w-2xl">
          <div class="grid md:grid-cols-3 gap-6 mb-6">
            <div class="form-control">
              <label class="label">
                <span class="label-text font-medium text-secondary"
                  >Arrival date</span
                >
              </label>
              <input
                type="date"
                bind:value={arrivalDate}
                class="input input-bordered w-full focus:input-primary"
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text font-medium text-secondary"
                  >Departure date</span
                >
              </label>
              <input
                type="date"
                bind:value={departureDate}
                class="input input-bordered w-full focus:input-primary"
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text font-medium text-secondary"
                  >Number of people</span
                >
              </label>
              <select
                bind:value={guests}
                class="select select-bordered w-full focus:select-primary"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests</option>
                <option value={5}>5+ Guests</option>
              </select>
            </div>
          </div>

          <button
            class="btn btn-primary w-full text-white font-semibold py-4 h-auto"
          >
            BOOK A STAY
          </button>
        </div>
      </div>
    </div>

    <!-- Right Side - Image -->
    <div class="w-full lg:w-1/2 h-[500px] lg:h-auto">
      <img
        src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Luxury hotel room"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</section>

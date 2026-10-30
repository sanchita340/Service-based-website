const categories = [
  {
    title: 'Home Care & Cleaning',
    services: [
      { name: 'Hourly Booking', image: '/clock.png', price: 399 },
      { name: 'Sweeping & Mopping', image: '/sweeping.png', price: 299 },
      { name: 'Fridge cleaning', image: '/fridge.png', price: 299 },
      { name: 'Utensils cleaning', image: '/utensils.png', price: 299 },
      { name: 'Bathroom cleaning', image: '/bathe.png', price: 399 },
    ],
  },
  {
    title: 'Home Decor & Installation',
    services: [
      {
        name: 'Wall Art & Photo Hanging',
        image: '/wall art.png',
        price: 499,
      },
      {
        name: 'Curtain Installation',
        image: '/curtain.png',
        price: 299,
      },
      {
        name: 'Furniture Assembly',
        image: '/furniture.png',
        price: 399,
      },
      {
        name: 'Indoor Plant Styling',
        image: '/planting.png',
        price: 399,
      },
    ],
  },
  {
    title: 'Home Repairs & Maintenance',
    services: [
      {
        name: 'Plumbing service',
        image: '/plumber.png',
        price: 299,
      },
      {
        name: 'Electrical Repairs',
        image: '/electrical.png',
        price: 299,
      },
      {
        name: 'Carpentry',
        image: '/carpent.png',
        price: 299,
      },
    ],
  },
];

function Services({ addToCart }) {
  return (
    <section id="services" className="bg-[#F4F0E8] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#cd785e] sm:text-sm">
          our services
        </h2>
        <p className="mb-6 text-4xl font-bold leading-tight text-black sm:text-5xl md:text-6xl">
          Book  Trusted House
          <br />
          Help
        </p>

        <h3 className="mb-12 text-base font-semibold leading-6 text-gray-600 sm:text-lg">
          From hourly bookings to express cleans to daily upkeep, Daywell got you
          <br className="hidden sm:block" />
          covered. 20 services, transparent flat pricing
        </h3>

        {categories.map((category) => (
          <div key={category.title} className="mb-14">
            <h2 className="mb-6 text-2xl font-semibold text-black md:text-3xl">
              {category.title}
            </h2>

            
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6">
              {category.services.map((service) => (
                <div
                  key={service.name}
                  
                  className="group flex flex-col justify-between rounded-[28px] border border-[#E5E0D8] bg-white p-3.5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="aspect-square overflow-hidden rounded-[22px] bg-[#F7F5F0]">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-black sm:text-base">
                      {service.name}
                    </h3>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-lg font-bold text-[#CD785E]">
                      ₹{service.price}
                    </p>

                    <button
                      onClick={() => addToCart(service)}
                      className="w-full rounded-xl bg-[#CD785E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#AC6049]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
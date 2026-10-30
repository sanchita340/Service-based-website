import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-[#f2f0eb] px-6 py-16">

      
      <section className="mx-auto max-w-6xl text-center">
        <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-[#CD785E]">
          About Daywell
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
          A Better Way to Care for Your Home
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
          At Daywell, we make everyday home care simpler. From cleaning
          and home maintenance to decor and installation, we help you
          create a home that feels comfortable, cared for, and welcoming.
        </p>
      </section>

    
      <section className="mx-auto mt-20 grid max-w-6xl items-center gap-10 md:grid-cols-2 ">
        <div>
          <img
            src="/sofa.png"
            alt="A clean and comfortable home"
            className="h-80 w-full rounded-3xl object-cover shadow-md"
          />
        </div>

        <div>
          <p className="mb-3 font-semibold uppercase tracking-widest text-[#CD785E]">
            Our Story
          </p>

          <h2 className="mb-5 text-3xl font-bold text-gray-900">
            More Comfort Less Worry
          </h2>

          <p className="mb-4 leading-7 text-gray-600">
            We believe taking care of your home should not feel stressful.
            Daywell brings everyday home services together in one convenient
            place, so you can spend less time managing chores and more time
            enjoying life.
          </p>

          <p className="leading-7 text-gray-600">
            Our goal is to make finding and booking home services simple,
            clear, and convenient.
          </p>
        </div>
      </section>

      
      <section className="mx-auto mt-24 max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-[#CD785E]">
            The Daywell Difference
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Why Choose Daywell?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            A convenient way to find the services your home needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-7 shadow-sm">
            <div className="mb-5 text-4xl">✓</div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Trusted Professionals
            </h3>
            <p className="leading-7 text-gray-600">
              Find service providers for your everyday home care and
              maintenance needs.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-lg">
            <div className="mb-5 text-4xl">◷</div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Convenient Booking
            </h3>
            <p className="leading-7 text-gray-600">
              Explore available services and arrange bookings in a
              way that suits your schedule.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm">
            <div className="mb-5 text-4xl">♡</div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Home Comes First
            </h3>
            <p className="leading-7 text-gray-600">
              We aim to make home care easier, more comfortable,
              and less time-consuming.
            </p>
          </div>

        </div>
      </section>

    
      <section className="mx-auto mt-20 max-w-6xl rounded-3xl bg-[#c97d66] px-8 py-14 text-center md:px-16">
        <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">
          Our Mission
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-white">
          To make home services easier to discover and book, helping
          people enjoy more comfort, convenience, and peace of mind
          in their everyday lives.
        </p>
      </section>

    </div>
  );
}

export default About;
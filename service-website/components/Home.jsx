function Home() {
  return (
    <div>
      <section
        className="relative flex min-h-[90vh] items-center bg-cover bg-center px-6 md:px-16"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23,42,58,0.55), rgba(23,42,58,0.05)), url('/photo.png')",
        }}
      >
        <div className="max-w-3xl text-white">
            <p className="mb-5 font-semibold uppercase tracking-[0.25em] text-[#D8795B]">
             Your home, cared for
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              A Better Home
            <br />
             Starts with {" "}
            <span className="text-[#E99A7E]">Daywell</span>
            </h1>
            <p className="mt-6 max-w-xl leading-8 text-lg text-gray-200"  > From everyday cleaning to home care, book trusted professionals
             and make more time for what matters.</p>
            
            <div className="mt-8 flex flex-wrap gap-4">

               
               
                 <button onClick={() => {
                       document.getElementById('services')?.scrollIntoView({
                        behavior: 'smooth',
                                           });
                       }}className="rounded-full bg-[#D8795B] px-7 py-3 font-semibold text-white transition hover:bg-[#c56649]">
                        Explore services
                </button>

               
               
          </div>


        </div>

      </section>
    </div>
  )
}

export default Home
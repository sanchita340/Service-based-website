
import { useState } from 'react'

function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const guide = [
    {
      category: "Costs & Pricing",
      title: "House Help Salary in India: City-Wise Monthly Ranges",
      date: "October 21, 2026",
      image: "/guide1.png",
      introduction:
    "Hiring household help can make everyday life easier. Understanding the factors that affect monthly costs helps you plan your household budget.",

  sections: [
    {
      heading: "What affects house help costs?",
      paragraphs: [
        "The cost depends on your city, the type of work, the number of hours required, and how frequently the service is needed.",
        "The size of your home and additional tasks can also affect the final price."
      ]
    },
    {
      heading: "Types of household help",
      paragraphs: [
        "Hourly help is useful when you need assistance with a particular task or occasional cleaning.",
        "Regular daily help is suitable for households that need ongoing assistance with routine chores.",
        "Deep cleaning focuses on areas that need more time and attention, such as bathroom tiles and kitchen surfaces."
      ]
    },
    {
      heading: "How to plan your budget",
      paragraphs: [
        "List the tasks you need, decide how frequently you need them, and compare the services included in different prices.",
        "Confirm the working hours, extra charges, and cancellation policy before booking."
      ]
    }
  ],

  tips: [
    "List your household tasks before comparing prices.",
    "Confirm what is included in the service.",
    "Check for additional charges before booking."
  ]
    
    },
    {
      category: "Costs & Pricing",
      title: "How Much Does House Cleaning Cost in India?",
      date: "October 21, 2026",
      image: "/guide2.png",
       introduction:
    'A clean home creates a comfortable and welcoming environment for your family. However, house cleaning costs can vary depending on the size of your home, the type of cleaning required, and how frequently you book a service. Understanding these factors helps you plan your budget and choose the right cleaning option.',

  sections: [
    {
      heading: 'What affects house cleaning costs?',
      paragraphs: [
        'The size of your home is one of the main factors that influences cleaning costs. Larger homes generally require more time and effort to clean.',
        'The type of service also matters. Regular cleaning focuses on everyday dust and dirt, while deep cleaning covers areas that need extra attention.',
        'Additional tasks such as cleaning windows, appliances, or hard-to-reach areas may affect the final price.'
      ]
    },
    {
      heading: 'Types of house cleaning services',
      paragraphs: [
        'Regular cleaning includes common household tasks such as sweeping, mopping, dusting, and tidying rooms.',
        'Deep cleaning involves more detailed attention to corners, bathroom tiles, kitchen surfaces, and areas that are often missed during everyday cleaning.',
        'Kitchen and bathroom cleaning can also be booked separately when these areas need extra care.'
      ]
    },
    {
      heading: 'How to choose the right cleaning service',
      paragraphs: [
        'Start by identifying which rooms and tasks need attention. This helps you select a service that suits your home.',
        'Compare the tasks included in each package instead of considering price alone.',
        'Before confirming a booking, ask about additional charges, the estimated duration, and the cancellation policy.'
      ]
    }
  ],

  tips: [
    'Decide whether you need regular cleaning or deep cleaning.',
    'Confirm which rooms and tasks are included.',
    'Ask about extra charges before booking.',
    'Choose a service based on your household needs and budget.'
  ]
    },
    {
      category: "Costs & Pricing",
      title: "How to clean a Bathroom Step-by-Step Guide",
      date: "October 21, 2026",
      image: "/guide3.png",
       introduction:
    'Bathrooms need regular cleaning to remove soap residue, water stains, dirt, and germs from frequently touched surfaces. Following a simple cleaning routine makes the task more manageable and helps keep your bathroom fresh, hygienic, and comfortable.',

  sections: [
    {
      heading: 'Gather your cleaning supplies',
      paragraphs: [
        'Before starting, collect bathroom cleaner, a mild detergent, microfiber cloths, a scrub brush, a toilet brush, and gloves.',
        'Read product labels carefully and make sure the products are suitable for the surfaces you intend to clean. Never mix cleaning chemicals, especially bleach with acidic cleaners or ammonia.'
      ]
    },
    {
      heading: 'Clean the sink and mirror',
      paragraphs: [
        'Remove toiletries and other items from the sink area. Apply a suitable cleaner and wipe the basin, taps, and surrounding surface.',
        'Use a glass-safe cleaner and a clean microfiber cloth to wipe the mirror. Finish by drying the taps to reduce water spots.'
      ]
    },
    {
      heading: 'Scrub the toilet and shower area',
      paragraphs: [
        'Apply a toilet cleaner according to its instructions and scrub the bowl with a dedicated toilet brush.',
        'Clean shower walls, taps, and tiles with a suitable bathroom cleaner. Pay attention to soap residue and corners where dirt may accumulate.',
        'Keep the room ventilated and follow the recommended contact time on cleaning products.'
      ]
    },
    {
      heading: 'Finish with the floor',
      paragraphs: [
        'Sweep or collect loose hair and dust before mopping the floor with an appropriate cleaner.',
        'Rinse away residue where necessary and allow the floor to dry before replacing bathroom items.'
      ]
    }
  ],

  tips: [
    'Wear gloves while cleaning.',
    'Keep the bathroom ventilated.',
    'Use separate cleaning tools for the toilet and sink.',
    'Never mix different cleaning chemicals.',
    'Clean frequently touched surfaces regularly.'
  ]
    },
    {
      category: "Home cleaning",
      title: "Bathroom Cleaning cost and charges in India",
      date: "October 21, 2026",
      image: "/guide4.png",
      introduction:
    'Bathroom cleaning charges can differ depending on the bathroom size, the amount of dirt, the type of surfaces, and whether you need routine cleaning or a more detailed deep clean. Understanding what a service includes can help you compare options and make an informed booking decision.',

  sections: [
    {
      heading: 'What determines bathroom cleaning charges?',
      paragraphs: [
        'Bathroom size can affect the time and effort required. Larger bathrooms may have more floor space, fixtures, and surfaces to clean.',
        'The current condition of the bathroom is another factor. Heavy soap deposits, water stains, and accumulated grime may require additional work.',
        'The number of bathrooms and any extra requests can also affect the total service cost.'
      ]
    },
    {
      heading: 'Regular cleaning versus deep cleaning',
      paragraphs: [
        'Regular bathroom cleaning usually focuses on maintaining everyday hygiene by cleaning the toilet, sink, mirror, floor, and accessible surfaces.',
        'Deep cleaning involves more detailed work on areas such as tile grout, corners, shower fittings, and stubborn deposits, depending on the service package.',
        'The exact tasks included vary by provider, so it is important to check the service description before booking.'
      ]
    },
    {
      heading: 'How to compare cleaning services',
      paragraphs: [
        'Check whether the quoted price covers one bathroom or multiple bathrooms.',
        'Ask whether cleaning products and equipment are included in the price.',
        'Review the expected service duration and any additional charges for heavily soiled areas or special requests.'
      ]
    },
    {
      heading: 'When should you book a deep clean?',
      paragraphs: [
        'A deep clean may be useful when regular maintenance has not removed built-up residue or before moving into a new home.',
        'Between deep cleans, regular wiping, ventilation, and prompt removal of soap residue can help maintain the bathroom.'
      ]
    }
  ],

  tips: [
    'Compare the tasks included rather than price alone.',
    'Confirm the price before the service begins.',
    'Mention stubborn stains or special requirements in advance.',
    'Maintain your bathroom regularly between professional cleanings.'
  ]
    },
    {
      category: "Home cleaning",
      title: "How to clean ceiling fan Safely: Step-By-Step",
      date: "October 21, 2026",
      image: "/guide6.png",
      introduction:
    'Ceiling fans collect dust on their blades and around their motor housing over time. When the fan runs, some of this dust can spread around the room. A careful cleaning routine helps keep the fan tidy and reduces the amount of dust accumulating on nearby furniture.',

  sections: [
    {
      heading: 'Prepare the area before cleaning',
      paragraphs: [
        'Switch off the fan and turn off its power at the switch. Allow the blades to stop completely before you begin.',
        'Move furniture or other objects away from the area and place an old sheet or cloth underneath to catch falling dust.',
        'Use a stable step ladder only if you can reach the fan safely. Never lean or stretch dangerously to reach the blades.'
      ]
    },
    {
      heading: 'Remove dust from the blades',
      paragraphs: [
        'Use a microfiber cloth or a purpose-made fan blade duster to remove loose dust gently.',
        'You can slide a pillowcase over each blade and wipe it carefully so that dust falls inside the pillowcase instead of onto the floor.',
        'Support each blade while cleaning and avoid applying excessive pressure that could bend or damage it.'
      ]
    },
    {
      heading: 'Wipe the fan clean',
      paragraphs: [
        'For stubborn dirt, use a lightly damp cloth if the manufacturer permits it. Avoid spraying liquid directly onto the fan or its motor.',
        'Wipe the blade surfaces and accessible exterior parts, then allow them to dry completely before restoring power.'
      ]
    },
    {
      heading: 'Keep the fan dust-free',
      paragraphs: [
        'Include ceiling fans in your regular dusting routine, especially in rooms that collect dust quickly.',
        'Check the manufacturer instructions for cleaning guidance and arrange professional assistance if the fan is loose, damaged, or difficult to reach safely.'
      ]
    }
  ],

  tips: [
    'Always switch off power before cleaning.',
    'Never clean moving fan blades.',
    'Avoid spraying water or cleaner onto the motor.',
    'Do not stand on unstable furniture.',
    'Clean blades regularly to prevent heavy dust buildup.'
  ]
    },
    {
      category: "Kitchen prep",
      title: "How to clean Kitchen gas stove and chimney",
      date: "October 21, 2026",
      image: "/guide5.png",
      introduction:
    'Cooking can leave oil splashes, food particles, and sticky grease on a gas stove and kitchen chimney. Regular cleaning helps maintain a neat cooking area and prevents grease from accumulating. With the right products and a little care, you can clean these surfaces without damaging them.',

  sections: [
    {
      heading: 'Prepare the kitchen for cleaning',
      paragraphs: [
        'Turn off the gas and allow the stove and all its components to cool completely before cleaning.',
        'Remove loose food particles and gather a soft cloth, sponge, mild dishwashing liquid, and a suitable kitchen degreaser.',
        'Check the appliance instructions before removing burner parts or cleaning filters.'
      ]
    },
    {
      heading: 'Clean the gas stove surface',
      paragraphs: [
        'Remove the pan supports and removable parts only when they are cool and safe to handle.',
        'Wipe the stove surface with a soft sponge and a solution of mild dishwashing liquid. Use a suitable cleaner for stubborn grease.',
        'Avoid abrasive pads that may scratch the surface. Keep water away from gas outlets, igniters, and other electrical components.'
      ]
    },
    {
      heading: 'Clean the chimney exterior and filters',
      paragraphs: [
        'Switch off the chimney and isolate its power before cleaning. Wipe the exterior with a soft cloth and a cleaner suitable for its finish.',
        "If the filters are removable, follow the manufacturer's instructions for removing and washing them. Some filters require a different cleaning method.",
        'Do not pour water into the motor or electrical areas. Let washed filters dry completely before reinstalling them.'
      ]
    },
    {
      heading: 'Finish and maintain your kitchen',
      paragraphs: [
        'Wipe away any cleaning residue and dry the stove surface before using it again.',
        'Clean small spills soon after cooking once the surface is cool. Regular maintenance is usually easier than removing layers of hardened grease.'
      ]
    }
  ],

  tips: [
    'Make sure the stove is cool before cleaning.',
    'Never use open flames to dry stove components.',
    'Keep liquid away from burners, igniters, and electrical parts.',
    "Follow the manufacturer's instructions for chimney filters.",
    'Never mix cleaning chemicals.'
  ]
    },
    {
      category: "Home decor",
      title: "Small Living Room Decor Ideas on a Budget",
      date: "October 21, 2026",
      image: "/guide7.png",

  introduction:
    'A small living room can be beautiful, comfortable, and practical without requiring a large budget. Thoughtful furniture placement, lighter colors, clever storage, and a few well-chosen decorative pieces can make the room feel more open while reflecting your personal style.',

  sections: [
    {
      heading: 'Choose furniture that fits your space',
      paragraphs: [
        'Measure your living room before buying furniture. Pieces that are too large can make the room feel crowded and restrict movement.',
        'Consider compact sofas, nesting tables, or multipurpose furniture that offers storage without taking up unnecessary space.',
        'Keep walking paths clear so the room remains comfortable and functional.'
      ]
    },
    {
      heading: 'Use colors and lighting wisely',
      paragraphs: [
        'Light neutral shades can help a room feel brighter, while cushions or artwork can introduce your favorite accent colors.',
        'Use a combination of natural light, floor lamps, or table lamps to create a warm atmosphere.',
        'Mirrors placed thoughtfully can reflect light and create a greater sense of space.'
      ]
    },
    {
      heading: 'Decorate with affordable accents',
      paragraphs: [
        'Add personality with cushion covers, a simple rug, framed prints, or a small collection of decorative objects.',
        'Indoor plants can bring freshness and texture to a room. Choose varieties suited to your available light and maintenance routine.',
        'You can also rearrange existing furniture or reuse items from other rooms before purchasing anything new.'
      ]
    },
    {
      heading: 'Keep clutter under control',
      paragraphs: [
        'Use baskets, shelves, or storage ottomans to keep everyday items organized.',
        'Display a few favorite objects rather than filling every surface with decorations.',
        'A regular decluttering routine helps the room feel more open and makes cleaning easier.'
      ]
    }
  ],

  tips: [
    'Measure furniture before buying it.',
    'Use light colors to make the room feel brighter.',
    'Choose multipurpose furniture when possible.',
    'Reuse existing decorations creatively.',
    'Keep walkways and surfaces free of clutter.'
  ]
    },
    {
      category: "Home decor",
      title: "Simple Home Decor Ideas for Indian Homes",
      date: "October 21, 2026",
      image: "/guide8.png",
      introduction:
    'A welcoming home does not need expensive furniture or major renovations. Small changes to colors, lighting, textiles, and everyday arrangements can make Indian homes feel warm and personal. The best decor choices balance your style with the needs of your family and the space you have available.',

  sections: [
    {
      heading: 'Create a balanced color palette',
      paragraphs: [
        'Start with a few colors that work well together. Cream, beige, soft brown, and other neutral shades can create a calm foundation.',
        'Introduce brighter colors through cushion covers, curtains, artwork, or decorative accessories inspired by patterns and textiles you enjoy.',
        'Repeating one or two accent colors in different rooms can help the overall home feel coordinated.'
      ]
    },
    {
      heading: 'Use textiles to add warmth',
      paragraphs: [
        'Curtains, rugs, cushions, and bed linen can change the appearance of a room without requiring major purchases.',
        'Choose fabrics that suit the climate and are easy to maintain. Washable covers can be particularly useful in busy households.',
        'Mixing textures thoughtfully can add interest while keeping the room comfortable.'
      ]
    },
    {
      heading: 'Bring nature indoors',
      paragraphs: [
        'Indoor plants can add color and life to living rooms, balconies, and other suitable spaces.',
        'Choose plants based on the light, temperature, and care requirements of your home.',
        'Use simple planters or group a few plants together to create a neat display without overcrowding the room.'
      ]
    },
    {
      heading: 'Make the most of storage and lighting',
      paragraphs: [
        'Use shelves, baskets, and closed storage to keep everyday items organized and maintain a tidy appearance.',
        'Combine natural daylight with warm indoor lighting to make rooms feel inviting in the evening.',
        'Keep frequently used items easy to reach and avoid placing too many decorative objects on surfaces that need regular cleaning.'
      ]
    }
  ],

  tips: [
    'Choose decor that suits your lifestyle and budget.',
    'Coordinate a few colors throughout the home.',
    'Use washable textiles where practical.',
    "Select plants that suit your home's lighting conditions.",
    'Keep decorations organized to make daily cleaning easier.'
  ]
    },
  ]

  const categories = [
    'All',
    'Home cleaning',
    'Kitchen prep',
    'Home decor',
    'Costs & Pricing',
  ]

  const filteredGuides = guide.filter((item) => {
    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory
    const query = searchQuery.trim().toLowerCase()
    const matchesSearch =
      query === '' ||
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)

    return matchesCategory && matchesSearch
  })

  if (selectedBlog) {
    return (
      <div className='w-full bg-white px-4 py-6 md:px-10'>
        <article className="mx-auto w-full max-w-5xl p-4 md:p-8">
          <button
            type="button"
            onClick={() => {
              setSelectedBlog(null)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="mb-8 font-semibold text-[#AC8174] hover:underline"
          >
            ← Back to Blog
          </button>

          <p className="mb-3 text-sm font-semibold text-[#AC8174]">
            {selectedBlog.category}
          </p>

          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {selectedBlog.title}
          </h1>

          <p className="mb-6 text-sm text-gray-500">
            {selectedBlog.date} · Daywell Home Care
          </p>

          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="mb-8 h-64 w-full rounded-2xl object-cover md:h-96"
          />

          {selectedBlog.introduction && (
            <p className="mb-8 text-lg leading-8 text-gray-700">
              {selectedBlog.introduction}
            </p>
          )}

          {selectedBlog.sections?.length > 0 && (
            <div className="space-y-8">
              {selectedBlog.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="mb-3 text-2xl font-semibold text-gray-900">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mb-4 leading-8 text-gray-700"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          )}

          {selectedBlog.tips?.length > 0 && (
            <div className="mt-10 rounded-2xl bg-[#F4F0E8] p-6">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                Helpful Tips
              </h2>

              <ul className="space-y-3">
                {selectedBlog.tips.map((tip) => (
                  <li key={tip} className="flex gap-3 text-gray-700">
                    <span className="font-bold text-[#AC8174]">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </div>
    )
  }

  return (
     <div className="min-h-screen bg-white mx-auto">

      <section className="mx-auto mt-7 max-w-5xl px-4">
        <h1 className="mb-4 text-5xl font-medium text-black">
          Home Care Tips & Cleaning Guides
        </h1>

        <p className="mb-4 text-lg text-gray-600">
          Practical home cleaning tips, step-by-step guides and checklists for
          Indian homes, from trained Daywell Experts.
        </p>
      </section>

      <section className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-0 px-4 md:grid-cols-2 ">
        <div>
          <img
            src="/lady.png"
            alt="Helper"
            className="h-72 w-full rounded-l-3xl object-cover shadow-md"
          />
        </div>

        <div className="h-72 w-full rounded-r-3xl bg-[#c08674] p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Meet Your Trusted Home Helper
          </h2>

          <p className="leading-7 text-gray-700">
            At Daywell, we make home care simple and stress-free.
            Our trusted professionals help keep your home clean and comfortable.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-5xl px-4">
        <h2 className="mt-8 text-2xl font-medium tracking-tight text-black">
          Browse all guides
        </h2>

        <div className="flex flex-wrap items-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`mt-3 rounded-full px-5 py-2 font-semibold transition-colors ${
                activeCategory === category
                  ? 'bg-[#ac8174] text-white'
                  : 'text-gray-600 hover:bg-[#ac8174] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}

          <input
            type="text"
            placeholder="Search guides..."
            aria-label="Search guides"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="ml-4 mt-3 w-44 rounded-full bg-gray-100 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#c68d7c]"
          />
        </div>

        <section className="mx-auto mt-8 max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredGuides.length > 0 ? (
              filteredGuides.map((item) => (
                <button
                  type="button"
                  key={item.title}
                  onClick={() => {
                    setSelectedBlog(item)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="rounded-3xl border border-gray-200 bg-white p-3 text-left shadow-sm transition hover:shadow-lg"
                >
                  <div className="px-1 pt-2">
                    <p className="mb-3 text-sm text-gray-600">
                      {item.category}
                    </p>

                    <h3 className="text-lg font-medium text-black">
                      {item.title}
                    </h3>

                    <p className="mb-5 mt-2 text-sm text-gray-600">
                      {item.date}
                    </p>
                  </div>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full rounded-2xl object-cover"
                  />

                  <p className="px-1 py-3 font-semibold text-[#AC8174]">
                    Read Article →
                  </p>
                </button>
              ))
            ) : (
              <p className="col-span-full py-8 text-center text-gray-600">
                No guides found. Try another search or category.
              </p>
            )}

          </div>
        </section>
      </section>
    </div>
  )
}

export default Blog

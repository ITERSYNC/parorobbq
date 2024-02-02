import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Offerings() {
  return (
    <div className='md:py-12 text-center bg-white py-24'>
      <h1 className='font-bold tracking-wide text-[#caad66] pb-12 mobile:text-[20px] ipadV:text-5xl'>
        OUR OFFERINGS
      </h1>
      <div className=' text-white flex flex-col justify-center items-center  gap-12 md:flex-row'>
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <div className='ipadV:w-1/2 mobile:w-4/5'>
            <div className='inline-block'>
              <Image
                src='/assets/korean-bbq.jpg'
                alt='KoreanBBQ'
                width={400}
                height={400}
              />
            </div>
            <div className='mt-5'>
              <h2 className='font-bold text-2xl text-black'>KOREAN BARBECUE</h2>
              <p className='text-gray-500 my-6'>
                The smoky richness of charred meat and rendered fat is the
                foundation of Korean style BBQ. The most common proteins in
                Korean cuisine are pork and beef, but your choices are endless
                with additional selections of chicken, seafood and vegetables.
                Depending on the cut, meats are prepared lightly seasoned or
                flavorfully marinated to be grilled at your table. Served with
                an array of side dishes made of vegetables (banchan in Korean)
                to complement the proteins, your meal will be well rounded with
                a bowl of rice.
              </p>
              <Link href='#location'>
                <button className='bg-[#caad66] hover:bg-[#dbc87c] rounded p-4 w-[200px]'>
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 flex justify-center md:justify-start'>
          <div className='ipadV:w-1/2 mobile:w-4/5'>
            <div className='inline-block'>
              <Image
                src='/assets/thai.jpg'
                alt='Thai-style ceviche'
                width={400}
                height={400}
              />
            </div>
            <div className='mt-5'>
              <h2 className='font-bold text-2xl text-black'>
                THAT-STYLE CEVICHE
              </h2>
              <p className='text-gray-500 my-6'>
                Thai-style ceviche is a culinary delight, featuring fresh, raw
                seafood marinated in a zesty blend of citrus juices, typically
                lime or lemon, which cures the seafood. This dish often includes
                a vibrant mix of Thai herbs like cilantro, mint, and lemongrass,
                along with chili peppers for a spicy kick. The acidity of the
                citrus not only cooks the fish but also imparts a tangy flavor
                that complements the heat from the chili. Alongside the seafood,
                thinly sliced vegetables such as cucumber, red onions, and bell
                peppers add crunch and freshness.
              </p>
              <Link href='#location'>
                <button className='bg-[#caad66] hover:bg-[#dbc87c] rounded p-4 w-[200px]'>
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offerings

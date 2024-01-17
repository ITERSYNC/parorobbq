import React from 'react'
import Image from 'next/image'

function Offerings() {
  return (
    <div className='py-12 text-center bg-white'>
      <h1 className='font-bold text-5xl tracking-widest text-yellow-500 pb-12'>
        OUR OFFERINGS
      </h1>
      <div className=' text-white flex gap-12'>
        <div className='w-1/2 flex justify-end'>
          <div className='w-1/2'>
            <div className='inline-block'>
              <Image
                src='/assets/KoreanBBQ.jpg'
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
              <button className='bg-yellow-500 p-4 w-[200px]'>
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <div className='w-1/2'>
            <div className='inline-block'>
              <Image
                src='/assets/Thai.jpg'
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
              <button className='bg-yellow-500 p-4 w-[200px]'>
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offerings

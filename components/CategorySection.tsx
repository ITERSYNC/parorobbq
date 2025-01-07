// components/CategorySection.tsx

export default function CategorySection() {
  return (
    <section aria-labelledby='category-heading' className='bg-background'>
      <div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <h2
          id='category-heading'
          className='mb-20 text-4xl font-bold tracking-tight text-gray-900 sm:text-8xl'
        >
          Grill, Chill, and Fill
        </h2>
        {/* 这里是你分类的图片+标题等逻辑 */}
      </div>
    </section>
  )
}

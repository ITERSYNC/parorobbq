// components/Footer.tsx

import { footerNavigation } from '@/lib/data'

export default function Footer() {
  return (
    <footer aria-labelledby='footer-heading' className='text-white'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='py-20 xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
            {/* 1 */}
            <div className='space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0'>
              <div>
                <h3 className='text-sm font-medium'>Shop</h3>
                <ul role='list' className='mt-6 space-y-6'>
                  {footerNavigation.shop.map(item => (
                    <li key={item.name} className='text-sm'>
                      <a
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className='text-sm font-medium'>
                  Opening 7 Days
                </h3>
                <ul role='list' className='mt-6 space-y-6'>
                  {footerNavigation.opening.map(item => (
                    <li key={item.name} className='text-sm'>
                      <a
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2 */}
            <div className='space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0'>
              <div>
                <h3 className='text-sm font-medium '>
                  Contact Us
                </h3>
                <ul role='list' className='mt-6 space-y-6'>
                  {footerNavigation.contact.map(item => (
                    <li key={item.name} className='text-sm'>
                      <a
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className='text-sm font-medium '>Connect</h3>
                <ul role='list' className='mt-6 space-y-6'>
                  {footerNavigation.connect.map(item => (
                    <li key={item.name} className='text-sm'>
                      <a
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Newsletter */}
          <div className='mt-16 md:mt-16 xl:mt-0'>
            <h3 className='text-sm font-medium '>
              Sign up for our newsletter
            </h3>
            <p className='mt-6 text-sm '>
              The latest deals and savings, sent to your inbox weekly.
            </p>
            <form className='mt-2 flex sm:max-w-md'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                type='text'
                autoComplete='email'
                required
                className='w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-indigo-500 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'
              />
              <div className='ml-4 flex-shrink-0'>
                <button
                  type='submit'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='border-t border-white py-10'>
          <p className='text-sm '>
            Copyright &copy; 2024 Paroro Korean BBQ, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}

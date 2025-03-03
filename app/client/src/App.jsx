import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//import { logo, logo1 } from "./assets";
import { CreatePost, Home, Createchat } from "./pages";
import Login from './pages/Login';
import { ClerkProvider } from '@clerk/clerk-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const navigation = [
  { name: 'AI Image Generator', href: '/create-post', current: false },
  { name: 'AI Chat', href: '/create-chat', current: false },
  { name: 'Dashboard', href: '', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const App = () => {
  const [dark, setdark] = useState(true);
  const toggledarkmode = () => {
    setdark(dark ? false : true);
  }

  return (
    <BrowserRouter>
      <React.StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
          <div className={dark && "dark"}>

            <Disclosure as="nav" className="bg-gray-800">
              <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                      <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                    </DisclosureButton>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex shrink-0 items-center">
                      {/* <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              /> */}
                      <Link to="/">
                        <div className='flex'>
                          {/* <img src={dark?logo1:logo} alt="logo" className='w-28  object-contain' /> */}
                          <svg height="25px" className='pt-1' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M465.4 409.4l87.1-150.2-32-.3-55.1 95L259.2 0 23 407.4l32 .3L259.2 55.6zm-355.3-44.1h32.1l117.4-202.5L463 511.9l32.5 .1-235.8-404.6z" /></svg>
                          <p className='dark:text-white font-mono flex text-xl'>air<p className='text-pink-700 font-mono'>.</p><p className='text-xl font-mono'>ai</p></p>
                        </div>
                      </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          // <a

                          //   href={item.href}

                          //   className={classNames(
                          //     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          //     'rounded-md px-3 py-2 text-sm font-medium',
                          //   )}
                          // >

                          // </a>
                          <Link key={item.name} aria-current={item.current ? 'page' : undefined} to={item.href} className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-[#7276e0]',
                            'rounded-md px-3 py-2 text-sm font-medium',
                          )}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      {/* <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                      <div>
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="size-8 rounded-full"
                          />

                      </div>
                        </MenuButton> */}
                      <div className='inline-flex align-bottom font-inter  font-medium hover:text-[#6469ff]  dark:text-white dark:hover:text-[#6469ff] text-black px-5 py-2 rounded-md'>
                        <SignedOut>
                          <SignInButton />
                        </SignedOut>
                        <SignedIn>
                          <UserButton className="" />
                        </SignedIn>
                      </div>

                    </Menu>
                  </div>
                </div>
              </div>

              <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium',
                      )}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              </DisclosurePanel>
            </Disclosure>
            <main className='sm:p-8 px-4 py-8 w-full  bg-[#f9fafe] dark:bg-neutral-900  min-h-[calc(100vh-64px)] flex justify-center items-center'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/create-chat' element={<Createchat />} />
                <Route path='/create-post' element={<CreatePost />} />
              </Routes>
            </main>
          </div>
        </ClerkProvider>
      </React.StrictMode>
    </BrowserRouter>
  )
}

export default App

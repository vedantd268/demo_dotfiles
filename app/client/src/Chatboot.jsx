<div className={dark && "dark"}>
  <header className='w-full flex justify-between items-center bg-white dark:bg-neutral-950 sm:px-8 px-4 py-3 border-b border-b-[#e6ebf4]'>
    <Link to="/">
      {/* <img src={dark?logo1:logo} alt="logo" className='w-28  object-contain' /> */}
      <p className='dark:text-white font-mono flex text-xl'>air<p className='text-pink-700 font-mono'>.</p><p className='text-xl font-mono'>ai</p></p>
    </Link>
    <div>
      <Link to="/create-chat" className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
        AI Chat
      </Link>
      <Link to="/create-post" className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
        AI Image Generator
      </Link>
      {/* <Link to="/login" className='font-inter  font-medium hover:text-[#6469ff] dark:text-white dark:hover:text-[#6469ff] text-black px-5 py-2 rounded-md'>
          Login
        </Link> */}
      <button onClick={toggledarkmode} className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
        {dark ? "Light" : "Dark"}
      </button>
      <div className='inline-flex align-bottom font-inter  font-medium hover:text-[#6469ff]  dark:text-white dark:hover:text-[#6469ff] text-black px-5 py-2 rounded-md'>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton className="" />
        </SignedIn>
      </div>



    </div>
  </header>
  <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] dark:bg-neutral-900  min-h-[calc(100vh-73px)]'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/create-chat' element={<Createchat />} />
      <Route path='/create-post' element={<CreatePost />} />
    </Routes>
  </main>
</div>

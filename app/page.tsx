import Image from 'next/image'

export default function Home() {
  return (
    <div className="m-auto grid gap-5 bg-black">
        {/* SIDEBAR START */}
        <div className="sidebar hidden md:block w-[30%] h-full fixed left-0 pl-2 py-2">
          <div className='bg-zinc-800 p-4 rounded-xl'>
            <div className='grid grid-cols-12'>
              <div className='text-center col-span-2'> <i className='fa-solid fa-house'></i> </div>
              <div className='col-span-10 text-xs self-center'> Home </div>
            </div>
            <div className="my-3"></div>
            <div className='grid grid-cols-12 opacity-70'>
              <div className='text-center col-span-2'> <i className='fa-solid fa-magnifying-glass'></i> </div>
              <div className='col-span-10 text-xs self-center'> Search </div>
            </div>
          </div>
          <div className="my-2"></div>
          <div className='bg-zinc-800 p-4 rounded-xl'>
            <div className='grid grid-cols-12 opacity-70'>
              <div className='text-center col-span-2 self-center'> <i className='fa-solid fa-book'></i> </div>
              <div className='col-span-6 text-xs self-center'> Library </div>
              <div className='col-span-2 p-1 text-center rounded-full hover:bg-black'> <i className='fa-solid fa-plus'></i> </div>
              <div className='col-span-2 p-1 text-center rounded-full hover:bg-black'> <i className='fa-solid fa-arrow-right'></i> </div>
            </div>
            <div className="my-2"></div>
            <div className="pill mr-1 bg-gray-700 px-4 py-1 rounded-full inline-block text-xs">Musik</div>
            <div className="my-2"></div>
            <div className="grid grid-cols-12 overflow-y-scroll">
              <div className="col-span-2 opacity-70 p-1 text-center rounded-full hover:bg-black"> <i className='fa-solid fa-magnifying-glass'></i> </div>
              <div className="col-span-8 opacity-70 text-right self-center">
                <p className='text-xs'>Recents</p>
              </div>
              <div className="col-span-2 opacity-70 p-1 text-center"> <i className="fa-solid fa-caret-down"></i> </div>
              <div className="my-2 col-span-12"></div>
              <div className="item col-span-12 grid grid-cols-12 my-2">
                <div className="col-span-3 self-center">
                  <img className='w-full rounded-full' src="spotify (2).jpg" alt="" />
                </div>
                <div className="col-span-9 text-xs px-5 self-center"> <span className='font-bold'>Nama Band</span> <br /> <span className='opacity-70'>Artist</span></div>
              </div>
              <div className="item col-span-12 grid grid-cols-12 my-2">
                <div className="col-span-3 self-center">
                  <img className='w-full rounded-full' src="spotify (2).jpg" alt="" />
                </div>
                <div className="col-span-9 text-xs px-5 self-center"> <span className='font-bold'>Nama Band</span> <br /> <span className='opacity-70'>Artist</span></div>
              </div>
              <div className="item col-span-12 grid grid-cols-12 my-2">
                <div className="col-span-3 self-center">
                  <img className='w-full rounded-full' src="spotify (2).jpg" alt="" />
                </div>
                <div className="col-span-9 text-xs px-5 self-center"> <span className='font-bold'>Nama Band</span> <br /> <span className='opacity-70'>Artist</span></div>
              </div>
            </div>
          </div>
        </div>
        {/* SIDEBAR END */}

        {/* PLAYER START */}
        <div className="hidden md:grid grid-cols-12 bg-black text-[rgba(255,255,255,.6)] z-50 w-full h-[4rem] fixed bottom-0 left-0 box-border py-1 p-2">
          <div className="col-span-4"></div>
          <div className="col-span-4 flex justify-center">
              <div className='self-center mx-1 round_button w-[25px] h-[25px] leading-[25px] bg-transparent text-center text-xs rounded-full'>
                <i className="fa-solid fa-shuffle"></i>
              </div>
              <div className='self-center mx-1 round_button w-[25px] h-[25px] leading-[25px] bg-transparent text-center text-xs rounded-full'>
                <i className="fa-solid fa-backward"></i>
              </div>
              <div className='self-center mx-1 round_button w-[30px] h-[30px] leading-[30px] bg-transparent text-center text-2xl rounded-full'>
                <i className="fa-solid fa-circle-pause"></i>
              </div>
              <div className='self-center mx-1 round_button w-[25px] h-[25px] leading-[25px] bg-transparent text-center text-xs rounded-full'>
                <i className="fa-solid fa-forward"></i>
              </div>
              <div className='self-center mx-1 round_button w-[25px] h-[25px] leading-[25px] bg-transparent text-center text-xs rounded-full'>
                <i className="fa-solid fa-repeat"></i>
              </div>
          </div>
          <div className="col-span-4 flex justify-end">
              <div className='self-center round_button w-[25px] h-[25px] leading-[25px] bg-transparent text-center text-xs rounded-full'>
                <i className='fa-solid fa-layer-group'></i>
              </div>
              <div className='self-center round_button w-[25px] h-[25px] leading-[25px] bg-transparent text-center text-xs rounded-full'>
                <i className='fa-solid fa-mobile'></i>
              </div>
              <div className='self-center round_button w-[25px] h-[25px] leading-[25px] bg-transparent text-center text-xs rounded-full'>
                <i className='fa-solid fa-volume-low'></i>
              </div>
              <div className="self-center h-[4px] w-[4rem] rounded-full bg-[rgba(255,255,255,.6)]"></div>
          </div>
          <div className="col-span-12 grid grid-cols-12">
            <div className="col-span-3 self-center px-3 text-xs text-right">-:--</div>
            <div className="col-span-6 self-center px-3 text-xs h-[4px] rounded-full bg-[rgba(255,255,255,.6)]"></div>
            <div className="col-span-3 self-center px-3 text-xs text-left">-:--</div>

          </div>
        </div>
        {/* PLAYER END */}

        {/* MAIN START */}
        <div className='md:w-[70%] main relative ml-auto p-2'>
          <div className='md:bg-zinc-800 rounded-lg grid gap-4' >
              <div className="md:hidden px-5 py-2 text-white bg-gradient-to-t from-black via-[rgba(0,0,0,0.8)] to-transparent navbar fixed bottom-0 w-full grid grid-cols-12">
                <div className="col-span-3">
                  <div className='text-center text-lg'> <i className="fa-solid fa-house"></i> </div>
                  <p className='text-center text-[.6rem]'>Home</p>
                </div>
                <div className="col-span-3">
                  <div className='text-center text-lg'> <i className="fa-solid fa-magnifying-glass"></i> </div>
                  <p className='text-center text-[.6rem]'>Cari</p>
                </div>
                <div className="col-span-3">
                  <div className='text-center text-lg'> <i className="fa-solid fa-book"></i> </div>
                  <p className='text-center text-[.6rem]'>Koleksi Kamu</p>
                </div>
                <div className="col-span-3">
                  <div className='text-center text-lg'> <i className="fa-brands fa-spotify"></i> </div>
                  <p className='text-center text-[.6rem]'>Premium</p>
                </div>
              </div>
              <div className="md:hidden px-5 pt-5 grid grid-cols-12">
                  <h1 className="title col-span-8 font-semibold text-xl self-center">Selamat pagi</h1>
                  <div className="icons text-right col-span-4 grid grid-cols-12 self-center">
                      <div className="col-span-4 text-l m-3">
                          <i className="fa-regular fa-bell"></i>
                      </div>
                      <div className="col-span-4 text-l m-3">
                          <i className="fa-regular fa-clock"></i>
                      </div>
                      <div className="col-span-4 text-l m-3">
                          <i className="fa-regular fa-gear"></i>
                      </div>
                  </div>
              </div>
              <div className="md:hidden px-5 pills">
                  <div className="pill mr-1 bg-gray-700 px-4 py-1 rounded-full inline-block text-xs">Musik</div>
                  <div className="pill mr-1 bg-gray-700 px-4 py-1 rounded-full inline-block text-xs">Podcast & Acara</div>
              </div>

              <div className="hidden md:flex w-full justify-end content-center py-5 px-5">
                <div className="button h-[22px] leading-[22px] mr-3 text-[0.65rem] font-bold bg-white text-black rounded-full px-3 ">Explore Premium</div>
                <div className="button h-[22px] leading-[22px] mr-3 text-[0.65rem] font-bold bg-white text-black rounded-full px-3 "> <i className='fa-solid fa-arrow-circle-down'></i> Install App</div>
                <i className='inline-block fa-solid fa-user-circle text-[22px] self-center '></i>
              </div>
              {/* CARDS */}
              <h1 className="px-5 title font-semibold text-xl self-center">Podcast 100% bikin haha</h1>
              <div className="cards_container overflow-hidden m-auto w-full px-5">
                <div className="box-border container overflow-x-auto">
                  <div className="cards w-[36rem]">
                    <div className='card w-32 inline-block mr-4'>
                      <img className='w-full' src="spotify (1).jpg" alt="" />
                      <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                      <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
                    </div>
                    <div className='card w-32 inline-block mr-4'>
                      <img className='w-full' src="spotify (1).jpg" alt="" />
                      <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                      <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
                    </div>
                    <div className='card w-32 inline-block mr-4'>
                      <img className='w-full' src="spotify (1).jpg" alt="" />
                      <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                      <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
                    </div>
                    <div className='card w-32 inline-block mr-4'>
                      <img className='w-full' src="spotify (1).jpg" alt="" />
                      <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                      <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pembatas my-2"></div>
              {/* CARDS END */}
              {/* CARDS */}
              <h1 className="px-5 title font-semibold text-xl self-center">Podcast 100% bikin haha</h1>
              <div className="cards_container overflow-hidden m-auto w-full px-5">
                <div className="box-border container overflow-x-auto">
                  <div className="cards w-[36rem]">
                    <div className='card w-32 inline-block mr-4'>
                      <img className='w-full' src="spotify (1).jpg" alt="" />
                      <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                      <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
                    </div>
                    <div className='card w-32 inline-block mr-4'>
                      <img className='w-full' src="spotify (1).jpg" alt="" />
                      <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                      <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
                    </div>
                    <div className='card w-32 inline-block mr-4'>
                      <img className='w-full' src="spotify (1).jpg" alt="" />
                      <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                      <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
                    </div>
                    <div className='card w-32 inline-block mr-4'>
                      <img className='w-full' src="spotify (1).jpg" alt="" />
                      <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                      <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pembatas my-2"></div>
              {/* CARDS END */}
              {/* CARDS */}
              <h1 className="px-5 title font-semibold text-xl self-center">Podcast 100% bikin haha</h1>
              <div className="cards_container overflow-hidden m-auto w-full px-5">
                <div className="box-border container overflow-x-auto">
                  <div className="cards w-[36rem]">
                    <div className='card w-32 inline-block mr-4'>
                      <img className='w-full' src="spotify (1).jpg" alt="" />
                      <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                      <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
                    </div>
                    <div className='card w-32 inline-block mr-4'>
                      <img className='w-full' src="spotify (1).jpg" alt="" />
                      <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                      <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
                    </div>
                    <div className='card w-32 inline-block mr-4'>
                      <img className='w-full' src="spotify (1).jpg" alt="" />
                      <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                      <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
                    </div>
                    <div className='card w-32 inline-block mr-4'>
                      <img className='w-full' src="spotify (1).jpg" alt="" />
                      <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                      <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pembatas my-2"></div>
              {/* CARDS END */}
              <div className="hidden md:grid footer grid-cols-12 px-5 gap-3 md:gap-10 overflow-hidden">
                <div className="col-span-6 md:col-span-3 text-xs">
                  <div className='font-extrabold py-1'>Company</div>
                  <div className='opacity-70 py-1'>About</div>
                  <div className='opacity-70 py-1'>Jobs</div>
                  <div className='opacity-70 py-1'>For the Record</div>
                </div>
                <div className="col-span-6 md:col-span-3 text-xs">
                  <div className='font-extrabold py-1'>Company</div>
                  <div className='opacity-70 py-1'>About</div>
                  <div className='opacity-70 py-1'>Jobs</div>
                  <div className='opacity-70 py-1'>For the Record</div>
                </div>
                <div className="col-span-6 md:col-span-3 text-xs">
                  <div className='font-extrabold py-1'>Company</div>
                  <div className='opacity-70 py-1'>About</div>
                  <div className='opacity-70 py-1'>Jobs</div>
                  <div className='opacity-70 py-1'>For the Record</div>
                </div>
                <div className="col-span-6 md:col-span-3 flex gap-2">
                  <div className=' round_button w-[25px] h-[25px] leading-[25px] bg-zinc-600 text-center text-xs rounded-full'>
                    <i className='fa-brands fa-instagram'></i>
                  </div>
                  <div className=' round_button w-[25px] h-[25px] leading-[25px] bg-zinc-600 text-center text-xs rounded-full'>
                    <i className='fa-brands fa-facebook'></i>
                  </div>
                  <div className=' round_button w-[25px] h-[25px] leading-[25px] bg-zinc-600 text-center text-xs rounded-full'>
                    <i className='fa-brands fa-twitter'></i>
                  </div>
                </div>
              </div>
              <hr className='hidden md:block mx-5 opacity-20' />
              <div className="hidden md:grid copyright grid-cols-12 px-5 py-2">
                <div className="col-span-8 self-center">
                  <div className="inline-block pr-2 text-[0.6rem] opacity-70 mr-auto">Legal</div>
                  <div className="inline-block pr-2 text-[0.6rem] opacity-70 mr-auto">Privacy Center</div>
                  <div className="inline-block pr-2 text-[0.6rem] opacity-70 mr-auto">Cookies</div>
                  <div className="inline-block pr-2 text-[0.6rem] opacity-70 mr-auto">About Ads</div>
                  <div className="inline-block pr-2 text-[0.6rem] opacity-70 mr-auto">Accessibility</div>
                </div>
                <div className="col-span-4 self-center text-right text-[0.6rem] inline-block opacity-70">
                  &copy; Spotify AB
                </div>
              </div>
              <div className="hidden md:block my-8"></div>
          </div>
        
        </div>
        {/* MAIN END */}
    </div>
  )
}

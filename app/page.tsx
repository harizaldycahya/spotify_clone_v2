import Image from 'next/image'

export default function Home() {
  return (
    <div className="m-auto grid gap-5 bg-black">
        {/* SIDEBAR START */}
        <div className="sidebar hidden md:block w-[30%] lg:w-[23%] h-full fixed left-0 pl-2 py-2 2xl:pl-6 2xl:py-6">
          <div className='bg-neutral-900 p-4 2xl:p-10 rounded-xl'>
            <div className='grid grid-cols-12'>
              <div className='text-center 2xl:text-3xl col-span-2'> <i className='fa-solid fa-house'></i> </div>
              <div className='col-span-10 text-xs lg:text-sm 2xl:text-3xl self-center'> Home </div>
            </div>
            <div className="my-3 2xl:my-10"></div>
            <div className='grid grid-cols-12 opacity-70'>
              <div className='text-center 2xl:text-3xl col-span-2'> <i className='fa-solid fa-magnifying-glass'></i> </div>
              <div className='col-span-10 text-xs lg:text-sm 2xl:text-3xl self-center'> Search </div>
            </div>
          </div>
          <div className="my-2 2xl:my-6"></div>
          <div className='h-full bg-neutral-900 p-4 2xl:p-10 rounded-xl'>
            <div className='grid grid-cols-12 opacity-70'>
              <div className='text-center col-span-2 self-center 2xl:text-3xl'> <i className='fa-solid fa-book'></i> </div>
              <div className='col-span-6 text-xs lg:text-sm 2xl:text-3xl self-center'> Library </div>
              <div className='col-span-2 p-1 text-center rounded-full 2xl:text-3xl hover:bg-black'> <i className='fa-solid fa-plus'></i> </div>
              <div className='col-span-2 p-1 text-center rounded-full 2xl:text-3xl hover:bg-black'> <i className='fa-solid fa-arrow-right'></i> </div>
            </div>
            <div className="my-2 2xl:my-10"></div>
            <div className="pill mr-1 bg-gray-700 px-4 py-1 2xl:px-6 2xl:py-4 rounded-full inline-block text-xs lg:text-sm 2xl:text-3xl">Musik</div>
            <div className="my-2 2xl:my-10"></div>
            <div className="grid grid-cols-12">
              <div className="col-span-2 opacity-70 p-1 text-center rounded-full hover:bg-black 2xl:text-3xl"> <i className='fa-solid fa-magnifying-glass'></i> </div>
              <div className="col-span-8 opacity-70 text-right self-center">
                <p className='text-xs lg:text-sm 2xl:text-3xl'>Recents</p>
              </div>
              <div className="col-span-2 opacity-70 p-1 text-center 2xl:text-3xl"> <i className="fa-solid fa-caret-down"></i> </div>
              <div className="my-2 2xl:my-6 col-span-12"></div>
              <div className="item col-span-12 grid grid-cols-12 my-2 2xl:my-6">
                <div className="col-span-3 self-center">
                  <img className='w-full rounded-full' src="spotify (2).jpg" alt="" />
                </div>
                <div className="col-span-9 text-xs lg:text-sm 2xl:text-3xl px-5 self-center"> <span className='font-bold'>Nama Band</span> <br /> <span className='opacity-70'>Artist</span></div>
              </div>
              <div className="item col-span-12 grid grid-cols-12 my-2 2xl:my-6">
                <div className="col-span-3 self-center">
                  <img className='w-full rounded-full' src="spotify (2).jpg" alt="" />
                </div>
                <div className="col-span-9 text-xs lg:text-sm 2xl:text-3xl px-5 self-center"> <span className='font-bold'>Nama Band</span> <br /> <span className='opacity-70'>Artist</span></div>
              </div>
              <div className="item col-span-12 grid grid-cols-12 my-2 2xl:my-6">
                <div className="col-span-3 self-center">
                  <img className='w-full rounded-full' src="spotify (2).jpg" alt="" />
                </div>
                <div className="col-span-9 text-xs lg:text-sm 2xl:text-3xl px-5 self-center"> <span className='font-bold'>Nama Band</span> <br /> <span className='opacity-70'>Artist</span></div>
              </div>
            </div>
          </div>
        </div>
        {/* SIDEBAR END */}

        {/* PLAYER START */}
        <div className="hidden md:grid grid-cols-12 bg-black text-[rgba(255,255,255,.6)] z-50 w-full h-[5rem] 2xl:h-[14rem] fixed bottom-0 left-0 box-border py-2 px-2">
          <div className="col-span-4"></div>
          <div className="col-span-4 flex justify-center text-center mb-auto mt-3 2xl:mt-7">
              <div className='lg:pt-1 self-center mx-1 2xl:mx-8 round_button w-[25px] h-[25px] leading-[25px] 2xl:w-[50px] 2xl:h-[50px] 2xl:leading-[50px] bg-transparent text-center text-xs lg:text-sm 2xl:text-[2.5rem] rounded-full'>
                <i className="fa-solid fa-shuffle"></i>
              </div>
              <div className='lg:pt-1 self-center mx-1 2xl:mx-8 round_button w-[25px] h-[25px] leading-[25px] 2xl:w-[50px] 2xl:h-[50px] 2xl:leading-[50px] bg-transparent text-center text-xs lg:text-sm 2xl:text-[2.5rem] rounded-full'>
                <i className="fa-solid fa-backward"></i>
              </div>
              <div className='self-center mx-1 2xl:mx-8 round_button w-[30px] h-[30px] leading-[30px] 2xl:w-[96px] 2xl:h-[96px] 2xl:leading-[70px] bg-transparent text-center text-3xl 2xl:text-[6rem] rounded-full'>
                <i className="fa-solid fa-circle-pause"></i>
              </div>
              <div className='lg:pt-1 self-center mx-1 2xl:mx-8 round_button w-[25px] h-[25px] leading-[25px] 2xl:w-[50px] 2xl:h-[50px] 2xl:leading-[50px] bg-transparent text-center text-xs lg:text-sm 2xl:text-[2.5rem] rounded-full'>
                <i className="fa-solid fa-forward"></i>
              </div>
              <div className='lg:pt-1 self-center mx-1 2xl:mx-8 round_button w-[25px] h-[25px] leading-[25px] 2xl:w-[50px] 2xl:h-[50px] 2xl:leading-[50px] bg-transparent text-center text-xs lg:text-sm 2xl:text-[2.5rem] rounded-full'>
                <i className="fa-solid fa-repeat"></i>
              </div>
          </div>
          <div className="col-span-4 flex justify-end mb-auto mt-3 2xl:mt-7">
              <div className='self-center xl:mt-1 round_button 2xl:mr-10 w-[25px] h-[25px] leading-[25px] 2xl:w-[50px] 2xl:h-[50px] 2xl:leading-[50px] bg-transparent text-center text-xs lg:text-sm 2xl:text-[2.5rem] rounded-full'>
                <i className='fa-solid fa-layer-group'></i>
              </div>
              <div className='self-center xl:mt-1 round_button 2xl:mr-10 w-[25px] h-[25px] leading-[25px] 2xl:w-[50px] 2xl:h-[50px] 2xl:leading-[50px] bg-transparent text-center text-xs lg:text-sm 2xl:text-[2.5rem] rounded-full'>
                <i className='fa-solid fa-mobile'></i>
              </div>
              <div className='self-center xl:mt-1 round_button 2xl:mr-10 w-[25px] h-[25px] leading-[25px] 2xl:w-[50px] 2xl:h-[50px] 2xl:leading-[50px] bg-transparent text-center text-xs lg:text-sm 2xl:text-[2.5rem] rounded-full'>
                <i className='fa-solid fa-volume-low'></i>
              </div>
              <div className="self-center 2xl:mr-10 h-[4px] w-[4rem] 2xl:h-[10px] 2xl:w-[15rem] rounded-full bg-[rgba(255,255,255,.6)]"></div>
          </div>
          <div className="col-span-12 grid grid-cols-12 content-top">
            <div className="col-span-3 self-center px-3 text-xs lg:text-sm 2xl:text-3xl text-right">-:--</div>
            <div className="col-span-6 self-center px-3 h-[4px] 2xl:h-[10px] rounded-full bg-[rgba(255,255,255,.6)]"></div>
            <div className="col-span-3 self-center px-3 text-xs lg:text-sm 2xl:text-3xl text-left">-:--</div>
          </div>
          
        </div>
        {/* PLAYER END */}

        {/* MAIN START */}
        <div className='md:w-[70%] lg:w-[77%] main relative ml-auto p-2 2xl:p-6'>
          <div className='md:bg-neutral-900 min-h-screen rounded-lg grid gap-4' >
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
                  <div className="pill mr-1 bg-gray-700 px-4 py-1 rounded-full inline-block text-xs lg:text-sm 2xl:text-3xl">Musik</div>
                  <div className="pill mr-1 bg-gray-700 px-4 py-1 rounded-full inline-block text-xs lg:text-sm 2xl:text-3xl">Podcast & Acara</div>
              </div>

              <div className="hidden md:flex w-full justify-end content-center py-5 px-5">
                <div className="button px-[1rem] 2xl:px-[2rem] h-[22px] leading-[22px] lg:h-[30px] lg:leading-[30px] 2xl:h-[70px] 2xl:leading-[70px]  mr-3 text-[0.65rem] lg:text-sm 2xl:text-3xl font-bold bg-white text-black rounded-full">Explore Premium</div>
                <div className="button px-[1rem] 2xl:px-[2rem] h-[22px] leading-[22px] lg:h-[30px] lg:leading-[30px] 2xl:h-[70px] 2xl:leading-[70px]  mr-3 text-[0.65rem] lg:text-sm 2xl:text-3xl font-bold bg-black text-white rounded-full"> <i className='fa-solid fa-arrow-circle-down'></i>&nbsp; Install App</div>
                <i className='inline-block fa-solid fa-user-circle text-[22px] lg:text-[30px] 2xl:text-[70px] self-center '></i>
              </div>
              {/* CARDS */}
              <h1 className="px-5 2xl:px-16 title font-semibold text-xl 2xl:text-5xl self-center">Podcast 100% bikin haha</h1>
              <div className="cards_container overflow-hidden m-auto w-full px-5 2xl:px-16 box-border">
                <div className="box-border overflow-x-auto">
                  <div className="cards w-[36rem] lg:w-full 2xl:w-full lg:grid lg:grid-cols-12 lg:gap-5">
                    <div className='card p-4 cursor-pointer bg-[rgb(30,30,30)] hover:bg-[rgb(40,40,40)] rounded-lg w-32 lg:w-full lg:col-span-3 inline-block mr-4'>
                      <div className='w-full relative'>
                        <img className='w-full shadow-2xl shadow-neutral-900 rounded-md' src="spotify (1).jpg" alt="" />
                        {/* <div className='w-16 h-16 bg-green-400 position absolute right-0 bottom-0'></div> */}
                        <div className='absolute hidden right-0 bottom-0 round_button w-6 h-6 leading-6 lg:w-[30px] lg:h-[30px] lg:leading-[30px] xl:w-[55px] xl:h-[55px] xl:leading-[55px] 2xl:w-[60px] 2xl:h-[60px] 2xl:leading-[60px] xl:text-2xl bg-green-500 text-black text-center rounded-full'>
                          <i className='fa-solid fa-play'></i>
                        </div>
                      </div>
                      <div className="my-2"></div>
                      <p className='text-xs lg:text-sm 2xl:text-3xl font-semibold mt-1'>Debat Anak Jaksel</p>
                      <div className="my-2"></div>
                      <p className='text-xs lg:text-sm 2xl:text-3xl opacity-70 mt-1'>Podcast Raditya Dika</p>
                    </div>
                    <div className='card w-32 lg:w-full lg:col-span-3 inline-block mr-4'>
                      <img className='w-full' src="spotify (1).jpg" alt="" />
                      <p className='text-xs lg:text-sm 2xl:text-3xl font-semibold mt-1'>Debat Anak Jaksel</p>
                      <p className='text-xs lg:text-sm 2xl:text-3xl opacity-70 mt-1'>Podcast Raditya Dika</p>
                    </div>
                    <div className='card w-32 lg:w-full lg:col-span-3 inline-block mr-4'>
                      <img className='w-full' src="spotify (1).jpg" alt="" />
                      <p className='text-xs lg:text-sm 2xl:text-3xl font-semibold mt-1'>Debat Anak Jaksel</p>
                      <p className='text-xs lg:text-sm 2xl:text-3xl opacity-70 mt-1'>Podcast Raditya Dika</p>
                    </div>
                    <div className='card w-32 lg:w-full lg:col-span-3 inline-block mr-4'>
                      <img className='w-full' src="spotify (1).jpg" alt="" />
                      <p className='text-xs lg:text-sm 2xl:text-3xl font-semibold mt-1'>Debat Anak Jaksel</p>
                      <p className='text-xs lg:text-sm 2xl:text-3xl opacity-70 mt-1'>Podcast Raditya Dika</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pembatas my-2"></div>
              {/* CARDS END */}
              
              <div className="hidden md:grid footer grid-cols-12 px-5 2xl:px-16 gap-3 md:gap-10 overflow-hidden">
                <div className="col-span-6 md:col-span-3 text-xs lg:text-sm 2xl:text-3xl">
                  <div className='font-extrabold py-1'>Company</div>
                  <div className='opacity-70 py-1'>About</div>
                  <div className='opacity-70 py-1'>Jobs</div>
                  <div className='opacity-70 py-1'>For the Record</div>
                </div>
                <div className="col-span-6 md:col-span-3 text-xs lg:text-sm 2xl:text-3xl">
                  <div className='font-extrabold py-1'>Company</div>
                  <div className='opacity-70 py-1'>About</div>
                  <div className='opacity-70 py-1'>Jobs</div>
                  <div className='opacity-70 py-1'>For the Record</div>
                </div>
                <div className="col-span-6 md:col-span-3 text-xs lg:text-sm 2xl:text-3xl">
                  <div className='font-extrabold py-1'>Company</div>
                  <div className='opacity-70 py-1'>About</div>
                  <div className='opacity-70 py-1'>Jobs</div>
                  <div className='opacity-70 py-1'>For the Record</div>
                </div>
                <div className="col-span-6 md:col-span-3 flex gap-2">
                  <div className=' round_button w-[25px] h-[25px] leading-[25px] lg:w-[30px] lg:h-[30px] lg:leading-[30px] xl:w-[40px] xl:h-[40px] xl:leading-[40px] 2xl:w-[60px] 2xl:h-[60px] 2xl:leading-[60px] bg-zinc-600 text-center text-xs lg:text-sm xl:text-lg 2xl:text-3xl rounded-full'>
                    <i className='fa-brands fa-instagram'></i>
                  </div>
                  <div className=' round_button w-[25px] h-[25px] leading-[25px] lg:w-[30px] lg:h-[30px] lg:leading-[30px] xl:w-[40px] xl:h-[40px] xl:leading-[40px] 2xl:w-[60px] 2xl:h-[60px] 2xl:leading-[60px] bg-zinc-600 text-center text-xs lg:text-sm xl:text-lg 2xl:text-3xl rounded-full'>
                    <i className='fa-brands fa-facebook'></i>
                  </div>
                  <div className=' round_button w-[25px] h-[25px] leading-[25px] lg:w-[30px] lg:h-[30px] lg:leading-[30px] xl:w-[40px] xl:h-[40px] xl:leading-[40px] 2xl:w-[60px] 2xl:h-[60px] 2xl:leading-[60px] bg-zinc-600 text-center text-xs lg:text-sm xl:text-lg 2xl:text-3xl rounded-full'>
                    <i className='fa-brands fa-twitter'></i>
                  </div>
                </div>
              </div>
              <hr className='hidden md:block mx-5 2xl:mx-16 2xl:mt-10 2xl:mb-5 opacity-20' />
              <div className="hidden md:grid copyright grid-cols-12 px-5 py-2 2xl:px-16 2xl:py-6">
                <div className="col-span-8 self-center">
                  <div className="inline-block pr-2 lg:pr-4 text-[.6rem] lg:text-xs 2xl:text-3xl opacity-70 mr-auto">Legal</div>
                  <div className="inline-block pr-2 lg:pr-4 text-[.6rem] lg:text-xs 2xl:text-3xl opacity-70 mr-auto">Privacy Center</div>
                  <div className="inline-block pr-2 lg:pr-4 text-[.6rem] lg:text-xs 2xl:text-3xl opacity-70 mr-auto">Cookies</div>
                  <div className="inline-block pr-2 lg:pr-4 text-[.6rem] lg:text-xs 2xl:text-3xl opacity-70 mr-auto">About Ads</div>
                  <div className="inline-block pr-2 lg:pr-4 text-[.6rem] lg:text-xs 2xl:text-3xl opacity-70 mr-auto">Accessibility</div>
                </div>
                <div className="col-span-4 self-center text-right text-[0.6rem] lg:text-xs 2xl:text-3xl inline-block opacity-70">
                  &copy; Spotify AB
                </div>
              </div>
              <div className="hidden md:block my-8 2xl:my-40"></div>
          </div>
        
        </div>
        {/* MAIN END */}
    </div>
  )
}

import Image from 'next/image'

export default function Home() {
  return (
    <div className="m-auto grid gap-5 bg-black">
        <div className='md:w-[70%] md:bg-zinc-800 relative ml-auto grid gap-4'>
          <div className="sidebar hidden md:block w-[30%] mr-5 h-full fixed left-0 p-2">
            <div className='bg-zinc-800 p-4 rounded-xl'>
              <div className='grid grid-cols-12'>
                <div className='text-center col-span-2'> <i className='fa-solid fa-house'></i> </div>
                <div className='col-span-10 text-xs self-center'> Home </div>
              </div>
              <div className="my-3"></div>
              <div className='grid grid-cols-12'>
                <div className='text-center col-span-2'> <i className='fa-solid fa-magnifying-glass'></i> </div>
                <div className='col-span-10 text-xs self-center'> Search </div>
              </div>
            </div>
            <div className="my-2"></div>
            <div className='bg-zinc-800 p-4 rounded-xl'>
              <div className='grid grid-cols-12'>
                <div className='text-center col-span-2 self-center'> <i className='fa-solid fa-book'></i> </div>
                <div className='col-span-6 text-xs self-center'> Library </div>
                <div className='col-span-2 p-1 text-center rounded-full hover:bg-black'> <i className='fa-solid fa-plus'></i> </div>
                <div className='col-span-2 p-1 text-center rounded-full hover:bg-black'> <i className='fa-solid fa-arrow-right'></i> </div>
              </div>
              <div className="my-2"></div>
              <div className="pill mr-1 bg-gray-700 px-4 py-1 rounded-full inline-block text-xs">Musik</div>
              <div className="my-2"></div>
              <div className="grid grid-cols-12 overflow-y-scroll">
                <div className="col-span-2 p-1 text-center rounded-full hover:bg-black"> <i className='fa-solid fa-magnifying-glass'></i> </div>
                <div className="col-span-8 text-right self-center">
                  <p className='text-xs'>Recent</p>
                </div>
                <div className="col-span-2 p-1 text-center"> <i className="fa-solid fa-caret-down"></i> </div>
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
          <div className="pembatas py-2"></div>
          <h1 className="px-5 title font-semibold text-xl self-center">Podcast 100% bikin haha</h1>
          <div className="px-5 container overflow-x-auto">
            <div className="cards w-[37rem]">
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
            </div>

          </div>
          <div className="pembatas py-2"></div>
          <h1 className="px-5 title font-semibold text-xl self-center">Podcast 100% bikin haha</h1>
          <div className="px-5 container overflow-x-auto">
            <div className="cards w-[37rem]">
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
            </div>
          </div>
          <div className="pembatas py-2"></div>
          <h1 className="px-5 title font-semibold text-xl self-center">Podcast 100% bikin haha</h1>
          <div className="px-5 container overflow-x-auto">
            <div className="cards w-[37rem]">
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
            </div>
          </div>
          <div className="pembatas py-2"></div>
          <h1 className="px-5 title font-semibold text-xl self-center">Artis Populer</h1>
          <div className="px-5 container overflow-x-auto">
            <div className="cards w-[37rem]">
              <div className='card w-32 inline-block m-2'>
                <img className='w-full rounded-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs text-center font-semibold mt-2'>Taylor Swift</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full rounded-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs text-center font-semibold mt-2'>Taylor Swift</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full rounded-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs text-center font-semibold mt-2'>Taylor Swift</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full rounded-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs text-center font-semibold mt-2'>Taylor Swift</p>
              </div>
            </div>
          </div>
          <div className="pembatas py-2"></div>
          <h1 className="px-5 title font-semibold text-xl self-center">Podcast 100% bikin haha</h1>
          <div className="px-5 container overflow-x-auto">
            <div className="cards w-[37rem]">
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
            </div>
          </div>
          <div className="pembatas py-2"></div>
          <h1 className="px-5 title font-semibold text-xl self-center">Podcast 100% bikin haha</h1>
          <div className="px-5 container overflow-x-auto">
            <div className="cards w-[37rem]">
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
              <div className='card w-32 inline-block m-2'>
                <img className='w-full' src="spotify (1).jpg" alt="" />
                <p className='text-xs font-semibold mt-1'>Debat Anak Jaksel</p>
                <p className='text-xs opacity-70 mt-1'>Podcast Raditya Dika</p>
              </div>
            </div>
          </div>
          <div className="pembatas py-10"></div>
        
        </div>
        
    </div>
  )
}

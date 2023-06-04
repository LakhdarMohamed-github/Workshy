import Head from 'next/head'
// const inter = Inter({ subsets: ['latin'] })

export const getStaticProps=async()=>{

  const response=await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props:{users:data}
  }
}

export default function Home({users}) {
  return (
      <>
        <Head>
          <title>generate</title>
          <meta name='keywords' content='ads'/>
        </Head>

        <div className="flex flex-wrap items-center justify-center">
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
            <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{transform:"scale(1.5)",opacity:'0.1'}}>
              <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
              <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{background:'radial-gradient(black, transparent 60%)',transform:"rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",opacity
            :"0.2"}}></div>
              <img className="relative w-40" src="https://media.discordapp.net/attachments/1113166720140591246/1113851505968152646/Yellow_Modern_Burger_Discount_Poster.png?width=614&height=868" alt=""/>
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Ad three</span>
                <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">Check</span>
              </div>
            </div>
          </div>
        </div>
        
      </>
  )
}

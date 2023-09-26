import Head from 'next/head'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';


export default function useHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bgWhite">
      <header>
      <title>VCFAM</title>
    <meta name="description" content="VCFAM" />
    <link rel="manifest" href="/manifest.json" />
      </header>
      <Image src={"/samurai.png"} width={220} height={220} alt={'logosamura'}></Image>
      <div className='pt-8'>
        <div>
          <h1 className='text-red-500 text-6xl'>Coach <span className='text-black'>Vidal Calderon</span></h1>
        </div>

        <div>
          <p className='flex flex-col items-center text-black pt-4 text-xl'>Inicia Sesion Con tu cuenta de Google</p>
        </div>
      </div>


      <Link href={"/inicio"}>
      <div className='flex justify-center items-center bg-white mt-4 h-full gap-10 p-4 border-4 border-red-500 rounded-2xl'>
          <FcGoogle className="text-4xl"></FcGoogle>
          <p className='text-black text-4xl'>Inicia Sesion</p>
        </div>
      </Link>
    </main>
  )
}

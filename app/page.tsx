import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white p-4">
      <header>
      <title>VCFAM</title>
    <meta name="description" content="VCFAM" />
    <link rel="manifest" href="/manifest.json" />
      </header>
      <Image src={"/samurai.png"} width={280} height={280} alt={'logosamura'}></Image>
      <div className='pt-8'>
        <div>
          <h1 className='text-red-500 text-6xl'>Coach <span className='text-black'>Vidal Calderon</span></h1>
        </div>
      </div>
    </main>
  )
}

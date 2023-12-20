import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { TiThMenu } from 'react-icons/ti';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BiCircle, BiSolidBellRing } from 'react-icons/bi';
import { MdOutlineArrowRight } from 'react-icons/md';
import Image from 'next/image';



import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

export default function Header() {
    const [hasNotifications, setHasNotifications] = useState(true);
  return (
    <div>
        <div className='flex items-center justify-between p-6'>
            <div>
                <TiThMenu className="text-black text-4xl"></TiThMenu>
            </div>
            <div>
            <div>
      <div className="text-black">
        <Sheet>
          <style>
            {`
              .your-custom-class {
                background-color: rgba(0, 0, 0, 0.5);
              }
            `}
          </style>
          <SheetTrigger
            className={`text-black text-4xl ${hasNotifications ? 'animate-breathing animate-vibration text-red-500 text-6xl' : ''}`}
          >
            <BiSolidBellRing />
          </SheetTrigger>
          <SheetContent className="your-custom-class">
            <SheetHeader>
              <SheetTitle className="pt-2 text-white">VCFam</SheetTitle>
              <SheetDescription>
              <Alert>
  <MdOutlineArrowRight className="h-4 w-4" />
  <AlertTitle>Nuevo Pago de ArturoZR</AlertTitle>
  <AlertDescription>
    ArturoZR ha enviado un nuevo comprobante de pago
  </AlertDescription>
</Alert>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
    </div>
        </div>
        <div className="relative mb-14">
  <div className="w-full h-1 border-b-4 border-red-500"></div> {/* Línea */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <Image src="/samurai.png" alt="Logo" width={120} height={120} /> {/* Reemplaza '/ruta-del-logo.png' por la ruta de tu logo y ajusta width y height según tu logo */}
  </div>
</div>
    </div>
  )
}

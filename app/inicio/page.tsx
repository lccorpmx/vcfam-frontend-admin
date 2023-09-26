"use client";
import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { BiCircle, BiSolidBellRing } from 'react-icons/bi';
import { Switch } from "@/components/ui/switch"
import CircleStatus from '@/components/CircleStatus';


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



export default function page() {

  const [hasNotifications, setHasNotifications] = useState(true);
  //Crear la variable para el estado del switch
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  //Crear una funcion para manejra el cambio de estado
  const switchHandle = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  
  return (
    <div className='min-h-screen bg-bgWhite'>
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
              <SheetTitle className="pt-2">Bee High México</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
    </div>
        </div>
        <div className="border-b-4 border-red-500 pt-9"></div>
        


        <div className='m-8 border-4 border-red-500 rounded-lg p-4 bg-white'>
          <div className='flex items-center justify-between'>
            <div className='text-4xl font-bold'>Coach <span className='font-medium'><br />Vidal Calderon</span></div>
            <div className='text-2xl'><Switch aria-checked={isSwitchOn} onClick={switchHandle} ></Switch>{isSwitchOn ? 'Disponible' : 'No disponible'}</div>
          </div>

          <div className='border-2 border-red-500 rounded-lg mt-12 mb-6'>
              <Table className=''>
                <TableCaption>Lista de Asesorados Activos</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Prox. Pago</TableHead>
                    <TableHead className="text-right">Revision</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">01</TableCell>
                    <TableCell>ArturoZR</TableCell>
                    <TableCell>Definicion</TableCell>
                    <TableCell>12/05/2023</TableCell>
                    <TableCell className="text-right"><CircleStatus isActive={true}></CircleStatus></TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">02</TableCell>
                    <TableCell>Rafael</TableCell>
                    <TableCell>Definicion</TableCell>
                    <TableCell>12/05/2023</TableCell>
                    <TableCell className="text-right"><CircleStatus isActive={true}></CircleStatus></TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">03</TableCell>
                    <TableCell>Kevin</TableCell>
                    <TableCell>Volumen</TableCell>
                    <TableCell>12/05/2023</TableCell>
                    <TableCell className="text-right"><CircleStatus isActive={false}></CircleStatus></TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">03</TableCell>
                    <TableCell>Kevin</TableCell>
                    <TableCell>Volumen</TableCell>
                    <TableCell>12/05/2023</TableCell>
                    <TableCell className="text-right"><CircleStatus isActive={false}></CircleStatus></TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">04</TableCell>
                    <TableCell>Mabel</TableCell>
                    <TableCell>Volumen</TableCell>
                    <TableCell>12/05/2023</TableCell>
                    <TableCell className="text-right"><CircleStatus isActive={false}></CircleStatus></TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">05</TableCell>
                    <TableCell>Carlos</TableCell>
                    <TableCell>Definicion</TableCell>
                    <TableCell>12/05/2023</TableCell>
                    <TableCell className="text-right"><CircleStatus isActive={true}></CircleStatus></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
          </div>

        </div>

        <div className='m-8 border-4 border-red-500 rounded-lg p-4'>
          <div className='flex items-center justify-between'>
            <div className='text-4xl font-bold'>Pago <span className='font-medium'><br />Pendiente</span></div>
          </div>

          <div className='border-2 border-red-500 rounded-lg mt-12 mb-6'>
              <Table className=''>
                <TableCaption>Lista de Asesorados Inactivos</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Nombre</TableHead>
                    <TableHead className="text-right">Ultimo Pago</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">ArturoZR</TableCell>
                    <TableCell className="text-right">12/02/23</TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                <TableRow>
                    <TableCell className="font-medium">Ulises</TableCell>
                    <TableCell className="text-right">12/02/23</TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                <TableRow>
                    <TableCell className="font-medium">Cristi</TableCell>
                    <TableCell className="text-right">12/02/23</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
          </div>

        </div>


    </div>
  )
}

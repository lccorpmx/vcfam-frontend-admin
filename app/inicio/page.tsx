"use client";
import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { BiCircle, BiSolidBellRing } from 'react-icons/bi';
import { BsPersonCheckFill } from 'react-icons/bs';
import { FaUserEdit } from 'react-icons/fa';
import { MdOutlineArrowRight } from 'react-icons/md';
import { TbUserCancel } from 'react-icons/tb';
import { Switch } from "@/components/ui/switch"
import CircleStatus from '@/components/CircleStatus';
import Image from 'next/image';

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


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
import Link from 'next/link';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"




export default function useInicio() {

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

        <div className="relative">
  <div className="w-full h-1 border-b-4 border-red-500"></div> {/* Línea */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <Image src="/samurai.png" alt="Logo" width={120} height={120} /> {/* Reemplaza '/ruta-del-logo.png' por la ruta de tu logo y ajusta width y height según tu logo */}
  </div>
</div>

        


        <div className='m-8 border-4 border-red-500 rounded-lg p-4 bg-white mt-24'>
          <div className='flex items-center justify-between'>
            <div className='text-4xl font-bold'>COACH <span className='font-medium'><br />Vidal Calderon</span></div>
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
                    <TableHead>Revision</TableHead>
                    <TableHead>Editar</TableHead>
                    <TableHead>Expulsar</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">01</TableCell>
                    <TableCell>ArturoZR</TableCell>
                    <TableCell>Definicion</TableCell>
                    <TableCell>12/05/2023</TableCell>
                    <TableCell><CircleStatus isActive={true}></CircleStatus></TableCell>
                    <TableCell><Link href={"/user"}><FaUserEdit className='text-4xl text-blue-500'></FaUserEdit></Link></TableCell>
                    <TableCell>
                    <AlertDialog>
                          <AlertDialogTrigger><TbUserCancel className='text-4xl text-red-500'></TbUserCancel></AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Estas seguro que deseas expulsar al usuario?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Esta accion sera permanente y todo el progreso y datos almacenados del usuario seran eliminados y no podran ser recuperados
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction>Expulsar</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                <TableRow>
                    <TableCell className="font-medium">01</TableCell>
                    <TableCell>ArturoZR</TableCell>
                    <TableCell>Definicion</TableCell>
                    <TableCell>12/05/2023</TableCell>
                    <TableCell><CircleStatus isActive={true}></CircleStatus></TableCell>
                    <TableCell><Link href={"/user"}><FaUserEdit className='text-4xl text-blue-500'></FaUserEdit></Link></TableCell>
                    <TableCell>
                    <AlertDialog>
                          <AlertDialogTrigger><TbUserCancel className='text-4xl text-red-500'></TbUserCancel></AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Estas seguro que deseas expulsar al usuario?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Esta accion sera permanente y todo el progreso y datos almacenados del usuario seran eliminados y no podran ser recuperados
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction>Expulsar</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                <TableRow>
                    <TableCell className="font-medium">01</TableCell>
                    <TableCell>ArturoZR</TableCell>
                    <TableCell>Definicion</TableCell>
                    <TableCell>12/05/2023</TableCell>
                    <TableCell><CircleStatus isActive={false}></CircleStatus></TableCell>
                    <TableCell><Link href={"/user"}><FaUserEdit className='text-4xl text-blue-500'></FaUserEdit></Link></TableCell>
                    <TableCell>
                    <AlertDialog>
                          <AlertDialogTrigger><TbUserCancel className='text-4xl text-red-500'></TbUserCancel></AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Estas seguro que deseas expulsar al usuario?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Esta accion sera permanente y todo el progreso y datos almacenados del usuario seran eliminados y no podran ser recuperados
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction>Expulsar</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                <TableRow>
                    <TableCell className="font-medium">01</TableCell>
                    <TableCell>ArturoZR</TableCell>
                    <TableCell>Definicion</TableCell>
                    <TableCell>12/05/2023</TableCell>
                    <TableCell><CircleStatus isActive={true}></CircleStatus></TableCell>
                    <TableCell><Link href={"/user"}><FaUserEdit className='text-4xl text-blue-500'></FaUserEdit></Link></TableCell>
                    <TableCell>
                    <AlertDialog>
                          <AlertDialogTrigger><TbUserCancel className='text-4xl text-red-500'></TbUserCancel></AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Estas seguro que deseas expulsar al usuario?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Esta accion sera permanente y todo el progreso y datos almacenados del usuario seran eliminados y no podran ser recuperados
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction>Expulsar</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                <TableRow>
                    <TableCell className="font-medium">01</TableCell>
                    <TableCell>ArturoZR</TableCell>
                    <TableCell>Definicion</TableCell>
                    <TableCell>12/05/2023</TableCell>
                    <TableCell><CircleStatus isActive={false}></CircleStatus></TableCell>
                    <TableCell><Link href={"/user"}><FaUserEdit className='text-4xl text-blue-500'></FaUserEdit></Link></TableCell>
                    <TableCell>
                    <AlertDialog>
                          <AlertDialogTrigger><TbUserCancel className='text-4xl text-red-500'></TbUserCancel></AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Estas seguro que deseas expulsar al usuario?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Esta accion sera permanente y todo el progreso y datos almacenados del usuario seran eliminados y no podran ser recuperados
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction>Expulsar</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                <TableRow>
                    <TableCell className="font-medium">01</TableCell>
                    <TableCell>ArturoZR</TableCell>
                    <TableCell>Definicion</TableCell>
                    <TableCell>12/05/2023</TableCell>
                    <TableCell><CircleStatus isActive={true}></CircleStatus></TableCell>
                    <TableCell><Link href={"/user"}><FaUserEdit className='text-4xl text-blue-500'></FaUserEdit></Link></TableCell>
                    <TableCell>
                    <AlertDialog>
                          <AlertDialogTrigger><TbUserCancel className='text-4xl text-red-500'></TbUserCancel></AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Estas seguro que deseas expulsar al usuario?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Esta accion sera permanente y todo el progreso y datos almacenados del usuario seran eliminados y no podran ser recuperados
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction>Expulsar</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
          </div>

        </div>

        <div className='m-8 border-4 border-red-500 rounded-lg p-4'>
          <div className='flex items-center justify-between'>
            <div className='text-4xl font-bold'>PAGO <span className='font-medium'><br />Pendiente</span></div>
          </div>

          <div className='border-2 border-red-500 rounded-lg mt-12 mb-6'>
              <Table className=''>
                <TableCaption>Lista de Asesorados Inactivos</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="">Nombre</TableHead>
                    <TableHead className="">Ultimo Pago</TableHead>
                    <TableHead className="">Editar</TableHead>
                    <TableHead className="">Expulsar</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">ArturoZR</TableCell>
                    <TableCell className="">12/02/23</TableCell>
                    <TableCell><Link href={"/user"}><FaUserEdit className='text-4xl text-blue-500'></FaUserEdit></Link></TableCell>
                    <TableCell>
                    <AlertDialog>
                          <AlertDialogTrigger><TbUserCancel className='text-4xl text-red-500'></TbUserCancel></AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Estas seguro que deseas expulsar al usuario?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Esta accion sera permanente y todo el progreso y datos almacenados del usuario seran eliminados y no podran ser recuperados
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction>Expulsar</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
          </div>

        </div>


        <div className='m-8 border-4 border-red-500 rounded-lg p-4'>
          <div className='flex items-center justify-between'>
            <div className='text-4xl font-bold'>NUEVOS <span className='font-medium'><br />Asesorados</span></div>
          </div>

          <div className='border-2 border-red-500 rounded-lg mt-12 mb-6'>
              <Table className=''>
                <TableCaption>Lista de Nuevos Asesorados</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="">Nombre</TableHead>
                    <TableHead className="">Edad</TableHead>
                    <TableHead className="">Aceptar</TableHead>
                    <TableHead className="">Rechazar</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">ArturoZR</TableCell>
                    <TableCell className="">21</TableCell>
                    <TableCell>
                    <AlertDialog>
                          <AlertDialogTrigger><BsPersonCheckFill className='text-4xl text-green-500'></BsPersonCheckFill></AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Estas seguro que deseas aceptar al usuario?</AlertDialogTitle>
                              <AlertDialogDescription>
                              <Accordion type="single" collapsible>
                                            <AccordionItem value="item-1">
                                              <AccordionTrigger></AccordionTrigger>
                                              <AccordionContent>
                                                Yes. It adheres to the WAI-ARIA design pattern.
                                              </AccordionContent>
                                            </AccordionItem>
                                          </Accordion>

                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction>Expulsar</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                      <TableCell>
                    <AlertDialog>
                          <AlertDialogTrigger><TbUserCancel className='text-4xl text-orange-500'></TbUserCancel></AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Estas seguro que deseas rechazar al usuario?</AlertDialogTitle>
                              <AlertDialogDescription>
                              Al rechazar a usuario sus datos de registro seran olvidados y el usuario debera iniciar un nuevo registro
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction>Rechazar</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
          </div>

        </div>






        

    </div>
  )
}

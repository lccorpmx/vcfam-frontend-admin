"use client"
import { Button } from "@/components/ui/button"
import React, { useState } from 'react'
import { TiThMenu } from 'react-icons/ti';
import Image from 'next/image';
import { BiCircle, BiSolidBellRing } from 'react-icons/bi';
import { MdOutlineArrowRight } from 'react-icons/md';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Header from "@/components/Header"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";

export default function page( {params}: {params: {idAsesorado:string}}) {

  const [hasNotifications, setHasNotifications] = useState(true);
  //Crear la variable para el estado del switch
  return (
    <div>
          <div className='min-h-screen bg-bgWhite'>
          <Header></Header>

<div className='text-center pt-20'>
<div className='flex items-center flex-col'>
<Avatar  className="w-44 h-44" >
  <AvatarImage src="https://lh3.googleusercontent.com/a/ACg8ocLfuG5P7PRuNUJSmgNwqiGl9zqu3U0CxHHqh6zoKyyJxA=s288-c-no" />
  <AvatarFallback>Arturo ZR</AvatarFallback>
</Avatar>

<p className='mx-auto text-4xl pt-6'>Arturo Zilli Rios</p>
  <div className='pt-4 w-10/12'>
  <Accordion  className="mt-10" type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className='text-4xl'>Informacion</AccordionTrigger>
    <AccordionContent className='text-xl w-8/12'>
      <p>Nombre: Arturo Zilli Rios</p>
      <p>Edad: 22 anos</p>
      <p>Correo: azillirios@gmail.com</p>
      <p>Numero: 2712072596</p>
      <p>Peso Inicial: 100kg</p>
      <p>IMC: 35%</p>
      <p>Alimentos Alergicos: Ninguno</p>
      <p>Alimentos no Tolerados: Ninguno</p>
      <p>Tiempo Entrenando: 2</p>
      <p>Alimentacion Comun: pollo, arroz, sanwich, cereal</p>
      <p>Dia a Dia: estudio, trabajo y voy al gym</p>
      <p>Objetivo: Open</p>
      <p>Lesiones: Ninguna</p>
      <p>Enfermedades: Ninguno</p>
      <p>Tiempo Disponible: 3 Horas</p>
    </AccordionContent>
  </AccordionItem>
</Accordion>


<Accordion className="mt-8" type="single" collapsible>
  <AccordionItem value="item-2">
    <AccordionTrigger className='text-4xl'>Plan Actual</AccordionTrigger>
    <AccordionContent>
      <div>
      PROGRAMA PARA LA MODIFICACIÓN DE LA COMPOSICIÓN CORPORAL by VCFAM noviembre 25 de 2023*

Arturo Zilli Ríos 
Edad: 21 años
Peso: 98,3 kg
Seguimiento presencial 

Primera comida
-240 g de yogur griego Chobani, endulzar con 1 cucharada de miel natural.
-100 g avena cocida con canela 
-20 g almendras 
-1 manzana 
-1 taza de té de tu preferencia.

Segunda comida 
-200 g de pechuga de pollo o filete de pescado tilapia cocido con aceite en aerosol o a la plancha.
-250 g de arroz o 350 g de papa
-1/2 aguacate grande  
-1 taza de nopales 

Tercera comida 
-200 g de carne de res sin grasa 
-250 g de arroz o pasta
-50 g de queso panela 
-1 taza de espinacas o mezcla de lechugas y pepino sin semilla.

Comida post entrenamiento 
-200 g de claras en pan cake con 120 g avena, endulzar con 2 cucharadas de miel natural, y canela.
-1 plátano grande

Cena 
-1 lata de atún en agua  “Dolores Jumbo”
-1/2 aguacate
-1 taza de piña 
-3 paquetes de galletas “Salmas” 


________
PROGRAMA DE ENTRENAMIENTO

Lunes: Pecho 
Martes: Cuádriceps y pantorrilla 
Miércoles: Espalda 
Jueves: Deltoides 
Viernes: Isquiosurales, glúteo y pantorrilla  
Sábado: Bíceps y tríceps 

8,000 pasos al día DIARIO como mínimo. 20 minutos de cardio después de entrenar

Toda la rutina se va a trabajar en un sistema de 3 a 4 series entre 10 y 15 repeticiones, excepto donde indique algo diferente.

Pecho.- 
-Press inclinado con mancuernas 
-Press horizontal con barra
-Press declinado en máquina hammer
-Pec Dec 
-Cross over
-Lagartijas

Cuádriceps y pantorrilla.-
-Extensión de cuádriceps
-Press de pierna
-Sentadilla profunda en Smith 
-Desplantes búlgaros
-Sentadilla zizzy
-Elevación de talones en máquina 6x15-20

Espalda.-
-Dominadas 
-Pull over con cuerda en polea alta 
-Jalón al pecho agarre supino 
-Remo en polea baja agarre “v amplio”
-Remo agarre prono en máquina 
-Remo alto en máquina hammer 
-Hiperextensiones 

Deltoides.-
-Press militar con mancuernas 
-Elevaciones laterales con mancuernas 
-Press en máquina agarre neutro 
-Elevaciones frontales con cuerda
-Pec fly en máquina 
-Encogimiento de hombros 7x12

Isquiosurales, glúteo y pantorrilla.- 
-Curl femoral boca abajo en máquina hoist 
-Curl femoral sentado en máquina 
-Peso muerto rumano con barra 
-Desplantes búlgaros
-Hip thrust
-Abducciones en máquina
-Elevación de talones en máquina 6x15-20

Abdomen 3 veces por semana; 200 abdominales por sesión. Se pueden variar los ejercicios 

________
Recomendaciones generales.-
-Las proteínas se miden o pesan en crudo (claras, pescado, pollo, res, huevos, etc.)
-Nada frito, puedes utilizar aceite en aerosol PAM para evitar que tus alimentos se peguen en la sartén 
-La avena se mide en crudo y una vez medido, se coce con agua, canela 
-Los carbohidratos como arroz, pasta, papa y camote se pesan o miden en cocido.
-Comer cada 3 o 4 horas como máximo 
-Ingerir 4.5 a 5 litros de agua al día.
**2 comidas por convivencia a la semana como sushi no frito o algún corte de carne.
________
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion className="mt-8" type="single" collapsible>
  <AccordionItem value="item-2">
    <AccordionTrigger className='text-4xl'>Retroalimentacion</AccordionTrigger>
    <AccordionContent>
                      <div className='p-4 w-full'>
                    <Accordion type="single" collapsible>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className='text-2xl'>2/02/2023</AccordionTrigger>
                        <AccordionContent>
                           <div>
                              Me gustaria mas atencion presencial
                           </div>
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Link href="/actualizarPlan"><Button className="mt-4"  variant="destructive">Actualizar Plan</Button></Link>
  </div>
</div>
</div>
    </div>
    </div>
  )
}

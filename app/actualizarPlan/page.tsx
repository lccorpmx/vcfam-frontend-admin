'use client'
import React, { useState } from 'react'
import Editor from '@/components/TextEditor'
import { Button } from "@/components/ui/button"
import Header from '@/components/Header'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
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
  

export async function Page() {
    const [editorValue, setEditorValue] = useState('');

    const handleEditorChange = (value:any) => {
      setEditorValue(value);
    };
  return (
    <div>
      <Header></Header>
      <div className='p-8'>
        <p>Escriba el plan del Asesorado:</p>
        <Editor value={editorValue} onChange={handleEditorChange} />
        <div className='mt-4'>
        <AlertDialog>
          <AlertDialogTrigger className='bg-red-400 border border-red-600 text-2xl p-2 rounded-lg text-white'>Guardar Plan</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Estas Seguro de Actualizar el Plan</AlertDialogTitle>
              <AlertDialogDescription>
                Confirmar esta accion actualizara el PLAN ACTUAL
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction>Continuar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        </div>
      </div>

        <div className='p-9 w-full'>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
                <AccordionTrigger className='text-4xl'>Historial de Planes</AccordionTrigger>
                <AccordionContent>
                <div className='p-4 w-full'>
                    <Accordion type="single" collapsible>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className='text-2xl'>2/01/2023</AccordionTrigger>
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
                           <Button  variant="outline" className='mt-6 text-red-700'>Seleccionar Plan</Button>
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </div>

                <div className='p-4 w-full'>
                    <Accordion type="single" collapsible>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className='text-2xl'>2/02/2023</AccordionTrigger>
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
                           <Button  variant="outline" className='mt-6 text-red-700'>Seleccionar Plan</Button>
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </div>
                </AccordionContent>
            </AccordionItem>
            </Accordion>


        </div>
    </div>
      )
}

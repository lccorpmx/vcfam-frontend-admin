import React from 'react'

export default function page( {params}: {params: {idAsesorado:string}}) {
  return (
    <div>page
        {params.idAsesorado}
    </div>
  )
}

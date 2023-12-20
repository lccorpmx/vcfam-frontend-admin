// components/TextEditor.js
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilo por defecto de Quill
import dynamic from "next/dynamic";
import { useState, useMemo } from "react";


const TextEditor = ({ value, onChange }: {value:any, onChange:any}) => {
    console.log(onChange)
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);
  return (
    <ReactQuill
      theme="snow" // Puedes cambiar el tema según tus preferencias
      value={value}
      onChange={onChange}
    />
  );
};

export default TextEditor;

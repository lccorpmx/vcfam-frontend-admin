// components/TextEditor.js
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilo por defecto de Quill

const TextEditor = ({ value, onChange }: {value:any, onChange:any}) => {
    console.log(onChange)
  return (
    <ReactQuill
      theme="snow" // Puedes cambiar el tema según tus preferencias
      value={value}
      onChange={onChange}
    />
  );
};

export default TextEditor;

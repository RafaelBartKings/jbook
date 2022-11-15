import 'bulmaswatch/superhero/bulmaswatch.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import TextEditor from './components/text-editor';


const App = () => {
   return (
      <div>
         <TextEditor />
      </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
)

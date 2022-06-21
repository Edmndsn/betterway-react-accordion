import './App.css';
import Accordion from './components/Accordion.js';
import { AccordionData } from './components/AccordionData';

 export default function App() {
  return ( 

     <div className="App">    
      {AccordionData.map(({title, content}) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  )
}




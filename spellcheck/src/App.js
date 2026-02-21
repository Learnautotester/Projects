
import { useState } from 'react';
import './App.css';

function App() {
  const [inputtext,setinputtext]=useState("")
  const [suggestedtext,setsuggestedtext]=useState("");
  const customDictionary = {

  teh: "the",

  wrok: "work",

  fot: "for",

  exampl: "example"

};

const handleinputchange=(e)=>{
  const text = e.target.value;
  //console.log(text);
  setinputtext(text);

  const words = text.split(" ");
  //console.log(words);

  const correctwords=words.map((word)=>{
    const correctword=customDictionary[word.toLowerCase()];
  
     return correctword || word; 
  })

 
  //const correctedText = correctwords.join(" ");
  
   // Set the suggested text (first corrected word)
    const firstCorrection = correctwords.find(
      (word, index) => word !== words[index]
    );
    setsuggestedtext(firstCorrection||"");
}

  return (
   <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
         
          value={inputtext}
          placeholder="Enter text..."
          rows={5}
          cols={40}
          onChange={handleinputchange}
        />
          {suggestedtext && <p>
            Did you mean: <strong>{suggestedtext}</strong>?
          </p>}
      
      </div>
  );
}

export default App;

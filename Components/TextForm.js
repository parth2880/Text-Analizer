import React, {useState} from "react";


export default function TextForm(props) {

  const [text, setText] = useState('');
  // setText('hello world');

  const handleUpClick = () => {
    console.log("uppercase button was clicked " + text);
    let upText = text.toUpperCase();
    setText(upText);
  }

  const handleDownClick = () => {
    console.log("lowercase button was clicked: " + text);
    let downText = text.toLowerCase();
    setText(downText);
  }

  const handleSpeakClick = () => {
    console.log("clicked");
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleClearClick = () => {
    console.log("clear clicked");
    let clrText = ''
    setText(clrText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      <div className="mb-3">
          <h1>{props.heading}</h1>
        <textarea placeholder="Enter text here..." className="form-control" value={text} onChange={handleOnChange} rows="10" style={{"fontSize" : 16}}></textarea>
        <button className="btn btn-primary my-3" title="Convert to UpperCase Character" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-secondary ms-3" title="clear the textarea" onClick={handleDownClick}>Convert to Lowercase</button>
        <button className="btn btn-warning mx-2 my-2" title="clear the textarea" onClick={handleSpeakClick}>Read Aloud</button>
        <button className="btn btn-danger mx-2 my-2" title="clear the textarea" onClick={handleClearClick}>Clear</button>

        <h1>Your Text Summary</h1>
        <p><b>{text.split(' ').length}</b> Words and <b>{text.length}</b> characters</p>
        <p>{0.008 * text.split(' ').length} Minutes Read</p>
      </div>
    </div>
  );
}

import React, {useState} from 'react' //it is hook

export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "Success");
    }

    const handleloClick = ()=>{
        // console.log("Uppercase was clicked");
         let newText=text.toLowerCase();

         setText(newText);
         props.showAlert("Converted to Lowercase", "Success");
     }

    const handleOnChange = (event)=>{
        //console.log("On change" + text);
        setText(event.target.value);
    }

    const handleclear = ()=>{
       let newText=' ';
       setText(newText);
       props.showAlert("Text is removed", "Success");

    }

    const handleCopy = () => {
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to the clipboard", "Success");

    }

    const handleExtraSpaces = () =>
    {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces cleared", "Success");
    }
    
    const [text,setText]=useState('Enter text here2');
    //text="New State" ; is wrong way to change the state
    //setText("new text"); 
    return (
        <>
        <div className="Container my-2" style={{color: props.mode==='dark'?'white':'#042743'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary" onClick={handleloClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleclear}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="Container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008* text.split(" ").length} Minutes read</p>
            <p>Preview</p>
            <p>{text.length>0?text:"Enter something to preview here"}</p>
        </div>
        </>
    )
}

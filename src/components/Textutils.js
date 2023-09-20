import React,{useState} from 'react'

function Textutils(props) {

    const [text, setText] = useState('Enter Text Here')
    const [color, setColor] = useState('black')

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleOnUpper = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text Covert to UpperCase', 'success');
    }

    const handleOnLower = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text Covert to UpperCase', 'success');
    }

    const handleToRemoveSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Text Covert to UpperCase', 'success');
    }

    const colorChange = (event)=>{
        let text = document.getElementById('exampleFormControlTextarea1');
        setColor(text.style.color = event.target.value)
        props.showAlert('Text Covert to UpperCase', 'success');
    }
    const handleTextBold = ()=>{
        let text = document.getElementById('exampleFormControlTextarea1');
        setColor(text.style.fontWeight = 'bold')
        props.showAlert('Text Covert to UpperCase', 'success');
    }


    const handleCopy = ()=>{
        let text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Covert to UpperCase', 'success');
    }

    const resetHandle = ()=>{
        let text = document.getElementById('exampleFormControlTextarea1');
        setColor(text.style.fontWeight = 'normal');
        setText('');
    }

    const handleTextClear = ()=>{
        setText('');
        props.showAlert('Text Covert to UpperCase', 'success');
    }

    let colorr = { color: props.darkMode === 'light'? 'black' : 'white' }
    let bgc = { backgroundColor: props.darkMode === 'light'? 'white' : 'black' }

    return (
        <>

        <div className="container">
            <div className="row d-flex justify-content-center my-3">
                <div className="col-lg-10">
                    <div className="form-floating mb-3">
                        <div className="mb-3">
                            <h1 style={colorr}>{props.heading}</h1>
                            <textarea className="form-control my-3" style={{ ...colorr,...bgc }} onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
                            <div className='d-flex'>
                                <button disabled={text.length===0} type="button" onClick={handleOnUpper}  className="btn btn-primary ">Convert To UpperCase</button>
                                <button disabled={text.length===0} type="button" onClick={handleOnLower}  className="btn btn-primary mx-1">Convert To LowerCase</button>
                                <button disabled={text.length===0} type="button" onClick={handleToRemoveSpace}  className="btn btn-primary mx-1">Remove Space</button>
                                <button disabled={text.length===0} type="button" onClick={handleCopy}  className="btn btn-primary mx-1">Select Text</button>
                                <button disabled={text.length===0} type="button" onClick={handleTextClear}  className="btn btn-primary mx-1">Clear Text</button>
                                <button disabled={text.length===0} type="button" onClick={handleTextBold}  className="btn btn-primary mx-1">Bold Text</button>
                                <button disabled={text.length===0} type="button" onClick={resetHandle}  className="btn btn-primary mx-1">Reset Setting</button>
                                <div disabled={text.length===0}>
                                    <p style={{ color: color, ...colorr }}>Text Color Change</p>
                                    <input onChange={colorChange} style={{ border:'none', outline:'none', }} type="color" id="color" />
                                </div>
                            </div>
                            <p style={{ ...bgc, ...colorr }} className='my-2'>{text.split(' ').filter((element)=>{return element.length !== 0}).length} Words {text.length} TextUtils character</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row d-flex justify-content-center my-3">
                <div className="col-lg-10">
                    <div className="form-floating mb-3">
                        <div className="mb-3">
                            <h1 style={{ ...bgc, ...colorr }}>Your Preview Here</h1>
                            <p style={{ ...colorr }} >{text===''?'No Text Preview' : text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Textutils

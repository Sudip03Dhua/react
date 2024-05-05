import React, { useState } from 'react'

const TextAr = () => {

    const [text, setText] = useState('hello')

    const [bold, setBold] = useState(false)

    // const preview = (event)=>{
    //     setText(text)
    // } 

    const toLowerTxt = () => {
        setText(text.toLowerCase())
    }
    const toUpperTxt = () => {
        setText(text.toUpperCase())
    }

    const onChangeFun = (event) => {
        console.log("change");
        setText(event.target.value)
    }
    const Bold = () => {
        setBold(!bold)
    }
    const kq = text.split(' ');
    return (

        <div className='d-flex justify-content-center '>
            <div>
                <h1 className='mt-5 text-center'>Write Here</h1>

                <label htmlFor='txt' className='fs-1 fw-bold'>Enter the text</label>
                <br></br>
                <textarea id='txt' rows={5} onChange={onChangeFun} value={text} style={{ width: 700, fontWeight: bold ? 'bold' : 'normal' }}></textarea>
                <br></br>
                {/* <button type="button" onClick={preview} class="btn btn-primary mx-1">Load</button> */}
                <button type="button" onClick={toUpperTxt} class="btn btn-primary mx-1">toUpperTxt</button>
                <button type="button" onClick={toLowerTxt} class="btn btn-primary mx-1">toLowerTxt</button>
                <button type="button" onClick={Bold} class="btn btn-primary mx-1">Bold</button>
                <div className="form-check form-switch my-3" >
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" for="flexSwitchCheckDefault">Enable </label>
                </div>

                <h1 className='mt-3'>Text Summary</h1>
                <p>Words: {kq[0] !== "" ? kq.length : 0} Characters: {text.length}</p>

                <h1 className='mt-3'>Preview</h1>
                <p style={{ fontWeight: bold ? 'bold' : 'normal' }} >{text}</p>
            </div>
        </div>
    )
}

export default TextAr

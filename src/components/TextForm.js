import React from 'react'
import { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState("")

    function handleChange(e) {
        setText(e.target.value)
    }

    function upperCase(e) {
        e.preventDefault()
        let upperCaseText = text.toUpperCase()
        setText(upperCaseText)
        props.showAlert("Converted to Uppercase", "success")
    }

    function lowerCase(e) {
        e.preventDefault()
        let lowerCaseText = text.toLowerCase()
        setText(lowerCaseText)
        props.showAlert("Converted to Lowercase", "success")
    }

    function clearText(e) {
        e.preventDefault()
        setText("")
        props.showAlert("Text Cleared", "success")
    }

    function copyText(e) {
        e.preventDefault()
        let text = document.getElementById('Box')
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied", "success")
    }

    return (
        <>
            <div className={"container"} style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>Enter The Text Below</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="Box" rows={3} style={{ backgroundColor: props.mode === "dark" ? "#031f3a" : "white", color: props.mode === "dark" ? "white" : "black" }} value={text} onChange={handleChange} />
                </div>
                <button className="btn btn-primary mx-1" onClick={upperCase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={lowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
            </div>
            <div className="container py-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>Your text Summary</h1>
                <p>{text === "" ? 0 : text.trim().split(" ").length} words and {text.length}</p>
            </div>
        </>
    )
}

export default TextForm

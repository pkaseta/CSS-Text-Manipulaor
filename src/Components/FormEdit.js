import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import FontsArray from './FontsArray'
import classnames from 'classnames'

function FormEdit() {
    const [exampleText, setExampleText] = useState('' ? "Text" : "Text")
    const [fontSize, setFontSize] = useState(20)
    const [textColor, setTextColor] = useState("black")
    const [backgroundColor, setbackgroundColor] = useState("")
    const [fontFamily, setFontFamily] = useState("none")
    const [typewriter, setTypewriter] = useState(false)
    const [neon, setNeon] = useState(false)
    const [glitch, setGlitch] = useState(false)
    const [loading, setloading] = useState(false)
    console.log(exampleText)
    const background = document.querySelector(".background")
    const betaWarning = document.querySelector(".betaWarning")
    return (
        <div>
            <Form className="formDiv">
                <Form.Group style={{ textAlign: "center" }} controlId="exampleForm.ControlTextarea1">
                    <Form.Label >Text</Form.Label>
                    <Form.Control style={{ textAlign: "center" }} placeholder="Enter Text Here" type="text" rows={2}
                        onChange={(e) => {
                            setExampleText(e.target.value)
                        }} />
                </Form.Group>
                <Form.Group style={{ textAlign: "center" }} controlId="exampleForm.ControlInput1">
                    <Form.Label>Text Color</Form.Label>
                    <Form.Control style={{ textAlign: "center" }} type="text" placeholder="black" onChange={(e) => {
                        setTextColor(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group style={{ textAlign: "center" }} controlId="exampleForm.ControlInput1">
                    <Form.Label>Background Color</Form.Label>
                    <Form.Control style={{ textAlign: "center" }} type="text" placeholder="white" onChange={(e) => {
                        setbackgroundColor(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group style={{ textAlign: "center" }} controlId="exampleForm.ControlSelect1">
                    <Form.Label>Font</Form.Label>
                    <Form.Control as="select" onChange={(e) => {
                        setFontFamily(e.target.value)
                    }} >
                        {FontsArray.map((font) =>
                            (<option>{font}</option>)
                        )}
                    </Form.Control>
                </Form.Group>
                <Form>
                    <Form.Group style={{ textAlign: "center" }} controlId="formBasicRange">
                        <Form.Label >Font Size</Form.Label>
                        <Form.Control style={{ textAlign: "center" }} type="text" placeHolder="# of pixels" onChange={(e) => {
                            setFontSize(e.target.value)
                        }} />
                        Value: {fontSize}px
                    </Form.Group>
                </Form>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Label style={{ margin: "auto", textDecoration: "underline" }}>Animations</Form.Label>
                    <Form.Check type="checkbox" label="Typewriter Animation" onChange={() => setTypewriter(!typewriter)} />
                    <Form.Check type="checkbox" label="Neon Sign" onChange={() => setNeon(!neon)} />
                    <Form.Check type="checkbox" label="Glitchy Text" onChange={() => setGlitch(!glitch)} />
                    <Form.Check type="checkbox" label="Loading" onChange={() => setloading(!loading)} />
                </Form.Group>
            </Form>
            {}
            <div className={loading !== true ? "textContainer" : "loadingTextContainer"}
                style={{
                    fontFamily: fontFamily,
                    color: textColor,
                    backgroundColor: backgroundColor,
                    fontSize: fontSize + "px"
                }}>
                <div className={classnames({
                    "typewriter": typewriter,
                    "neon": neon,
                    "glitch": glitch,
                    "loading": loading,
                })}>{loading ? (<span>{exampleText}</span>) : <p>{exampleText}</p>}</div>
            </div>

            <h3 style={{ textAlign: "center", marginTop: "10px" }}>CSS Code</h3>
            <div className="cssCodeContainer">
                <h2 style={{ textAlign: "center" }}>This will display all CSS code for the options selected. Coming Soon</h2>
                {/* <p>
                    {".className" + " \{"}
                    < br />
                    {textColor ? "color:" + textColor + ";" : ''}
                    <br />
                    {backgroundColor ? "backgroundColor:" + backgroundColor + ";" : ''}
                    <br />
                    {fontSize ? "fontSize:" + fontSize + ";" : ''}
                    <br />
                    {fontFamily !== "none" ? "fontFamily:" + fontFamily + ";" : ''}
                    <br />
                    {"\}"}
                </p> */}
            </div>
        </div >
    )
}

export default FormEdit

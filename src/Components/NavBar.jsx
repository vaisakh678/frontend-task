import React from "react";

import black from "../assets/Black.svg";
import blue from "../assets/Blue.svg";
import green from "../assets/Green.svg";
import red from "../assets/Red.svg";
import yellow from "../assets/Yellow.svg";

import check from "../assets/Check.svg";
import eraser from "../assets/Eraser.svg";
import pen from "../assets/Pen.svg";

function NavBar({
    tool,
    setTool,
    penSize,
    setPenSize,
    penColor,
    setPenColor,
    eraserSize,
    setEraserSize,
}) {
    console.log(tool);
    return (
        <div className="nav w-full flex items-center navHeight bg-slate-400s">
            <div className="flex items-center pl-12">
                <div
                    className={tool === "pen" ? "circle selected" : "circle"}
                    onClick={() => {
                        setTool((tool) => (tool === "pen" ? "noTool" : "pen"));
                    }}
                >
                    <img src={pen} alt="pen" />
                </div>
                <div className="px-4">
                    <input
                        type="range"
                        className="slider"
                        value={penSize}
                        onChange={(e) => setPenSize(e.target.value)}
                        min="1"
                        max="15"
                        id="myRange"
                    />
                </div>
                <div className="circle" onClick={() => setPenColor("black")}>
                    <img src={black} alt="black" />
                    {penColor === "black" ? (
                        <div className="check w-full h-full flex justify-center items-center">
                            <img src={check} alt="" />
                        </div>
                    ) : null}
                </div>
                <div className="circle" onClick={() => setPenColor("green")}>
                    <img src={green} alt="green" />

                    {penColor === "green" ? (
                        <div className="check w-full h-full flex justify-center items-center">
                            <img src={check} alt="" />
                        </div>
                    ) : null}
                </div>
                <div className="circle" onClick={() => setPenColor("yellow")}>
                    <img src={yellow} alt="yellow" />

                    {penColor === "yellow" ? (
                        <div className="check w-full h-full flex justify-center items-center">
                            <img src={check} alt="" />
                        </div>
                    ) : null}
                </div>
                <div className="circle" onClick={() => setPenColor("blue")}>
                    <img src={blue} alt="blue" />

                    {penColor === "blue" ? (
                        <div className="check w-full h-full flex justify-center items-center">
                            <img src={check} alt="" />
                        </div>
                    ) : null}
                </div>
                <div className="circle" onClick={() => setPenColor("red")}>
                    <img src={red} alt="red" />

                    {penColor === "red" ? (
                        <div className="check w-full h-full flex justify-center items-center">
                            <img src={check} alt="" />
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="flex items-center pl-32">
                <div
                    className={tool === "eraser" ? "circle selected" : "circle"}
                    onClick={() => {
                        setTool((tool) =>
                            tool === "eraser" ? "noTool" : "eraser"
                        );
                    }}
                >
                    <img src={eraser} alt="eraser" />
                </div>
                <div className="px-4">
                    <input
                        type="range"
                        className="slider"
                        value={eraserSize}
                        onChange={(e) => setEraserSize(e.target.value)}
                        min="1"
                        max="15"
                        id="myRange"
                    />
                </div>
            </div>
        </div>
    );
}

export default NavBar;

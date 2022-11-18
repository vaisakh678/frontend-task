import { useEffect, useState } from "react";
import { fabric } from "fabric";
import "./App.css";
import black from "./assets/Black.svg";
import blue from "./assets/Blue.svg";
import check from "./assets/Check.svg";
import eraserIcon from "./assets/Eraser.svg";
import green from "./assets/Green.svg";
import pen from "./assets/Pen.svg";
import red from "./assets/Red.svg";
import yellow from "./assets/Yellow.svg";

function App() {
    const [canvas, setCanvas] = useState(null);
    const [color, setColor] = useState("black");
    const [penSize, setPenSize] = useState(5);
    const [drawingMode, setDrawingMode] = useState(true);

    const [eraser, setEraser] = useState(null);
    const [eraserSize, setEraserSize] = useState(3);
    const [enableEraser, setEnableEraser] = useState(false);

    const initCanvas = () => {
        const can = new fabric.Canvas("canvas");
        can.setHeight(window.innerHeight);
        can.setWidth(window.innerWidth);
        can.isDrawingMode = true;
        return can;
    };

    const initEraser = () => {
        // canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
        // canvas.freeDrawingBrush.width = 10;
        // canvas.isDrawingMode = true;
        // const canvas = new fabric.Canvas("canvas", {
        //     width: 700,
        //     height: 500,
        //     backgroundColor: "#000",
        // });
        // canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
        // let e = fabric.eraser();
        // return e;
    };

    useEffect(() => {
        setCanvas(initCanvas());
    }, []);

    useEffect(() => {
        if (canvas != null) {
            canvas.freeDrawingBrush.color = color;
            canvas.freeDrawingBrush.width = penSize;
            canvas.isDrawingMode = drawingMode;
        }
    }, [color, penSize, drawingMode]);

    // useEffect(() => {
    //     if (canvas != null) {
    //         canvas.freeDrawingBrush.width = penSize;
    //         console.log(typeof penSize);
    //     }
    // }, [penSize]);

    // useEffect(() => {
    //     if (canvas != null) {
    //         console.log({ drawingMode });
    //         canvas.isDrawingMode = drawingMode;
    //     }
    // }, [drawingMode]);

    useEffect(() => {
        if (canvas != null) {
            canvas.isDrawingMode = false;
            setDrawingMode(false);
            initEraser();
        }
    }, [enableEraser]);

    return (
        <div className="App">
            <div className="tools">
                <div className="pen-tools">
                    <div
                        className="pen "
                        onClick={() => {
                            setDrawingMode((prev) => !prev);
                        }}
                    >
                        <img
                            alt="pen"
                            className={drawingMode ? "selected" : "notSelected"}
                            src={pen}
                        />
                    </div>

                    <input
                        type="range"
                        className="slider"
                        value={penSize}
                        onChange={(e) => setPenSize(Number(e.target.value))}
                        min="1"
                        max="10"
                        id="myRange"
                    />

                    <div
                        className="color black"
                        onClick={() => setColor("black")}
                    >
                        <img alt="" src={black} />
                        {color === "black" ? (
                            <img alt="check" className="check" src={check} />
                        ) : null}
                    </div>
                    <div
                        className="color green"
                        onClick={() => setColor("green")}
                    >
                        <img alt="green" src={green} />
                        {color === "green" ? (
                            <img alt="check" className="check" src={check} />
                        ) : null}
                    </div>
                    <div
                        className="color yellow"
                        onClick={() => setColor("yellow")}
                    >
                        <img alt="yellow" src={yellow} />

                        {color === "yellow" ? (
                            <img alt="check" className="check" src={check} />
                        ) : null}
                    </div>
                    <div
                        className="color blue"
                        onClick={() => setColor("blue")}
                    >
                        <img alt="blue" src={blue} />

                        {color === "blue" ? (
                            <img alt="check" className="check" src={check} />
                        ) : null}
                    </div>
                    <div className="color red" onClick={() => setColor("red")}>
                        <img alt="red" src={red} />

                        {color === "red" ? (
                            <img alt="check" className="check" src={check} />
                        ) : null}
                    </div>
                </div>
                <div className="pen-settings">
                    <div
                        className="eraser"
                        onClick={() => {
                            setEnableEraser(!enableEraser);
                        }}
                    >
                        <img
                            alt="eraser"
                            className={
                                enableEraser ? "selected" : "notSelected"
                            }
                            src={eraserIcon}
                        />
                    </div>

                    <input
                        type="range"
                        min="1"
                        max="10"
                        id="myRange"
                        className="slider"
                        value={eraserSize}
                        onChange={(e) => {
                            setEraserSize(Number(e.target.value));
                        }}
                    />
                </div>
            </div>
            <canvas id="canvas"></canvas>
        </div>
    );
}

export default App;

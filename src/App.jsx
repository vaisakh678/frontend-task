import "./App.css";

import { useState, useEffect, useRef } from "react";
import { fabric } from "fabric";
import NavBar from "./Components/NavBar";

function App() {
    const [tool, setTool] = useState("pen");
    const [penSize, setPenSize] = useState(5);
    const [penColor, setPenColor] = useState("black");
    const [eraserSize, setEraserSize] = useState(5);

    const canvas = useRef(null);

    useEffect(() => {
        canvas.current = new fabric.Canvas("canvas");
        canvas.current.setWidth(window.innerWidth);
        canvas.current.setHeight(Math.floor(window.innerHeight * 0.9));
    }, []);

    useEffect(() => {
        if (tool === "noTool") canvas.current.isDrawingMode = false;
        if (tool === "pen") {
            canvas.current.isDrawingMode = true;
            canvas.current.freeDrawingBrush.color = penColor;
            canvas.current.freeDrawingBrush.width = Number(penSize);
        } else if (tool === "eraser") {
            canvas.current.isDrawingMode = true;
            canvas.current.freeDrawingBrush.color = "white";
            canvas.current.freeDrawingBrush.width = Number(eraserSize);
        }
    }, [tool, penSize, penColor, eraserSize]);

    return (
        <div className="App w-full h-full">
            <NavBar
                tool={tool}
                penSize={penSize}
                penColor={penColor}
                eraserSize={eraserSize}
                setTool={setTool}
                setPenSize={setPenSize}
                setPenColor={setPenColor}
                setEraserSize={setEraserSize}
            />
            <canvas id="canvas"></canvas>
        </div>
    );
}

export default App;

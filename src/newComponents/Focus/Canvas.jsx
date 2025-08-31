import React from 'react';
import { useState, useRef } from 'react';

function handleAnimationCanvas(){
        const animate = () => {
            console.log('Mouse is over the canvas');
        }
        useEffect(() => {
            document.addEventListener('mousemove', animate);
        })
        useEffect(() => {
            return () => {
                document.removeEventListener('mousemove', animate);
            }
        }, [])
        return <CanvasComponent animation={animations[currentIndex]} />
    }

const CanvasComponent = () => {
    const [isDrawing, setIsDrawing] = useState(false);
    const canvasRef = useRef(null);

    const startDrawing = (event) => {
        setIsDrawing(true);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.moveTo(event.clientX, event.clientY);
    };

    const draw = (event) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    return (
        <canvas
            ref={setCanvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
        />
    );
};
export default CanvasComponent;

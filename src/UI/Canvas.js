import React, { useRef, useEffect } from 'react'

const Canvas = props => {

    const canvasRef = useRef(null)

    function drawBackground(ctx, radius) {
        var grad;
        ctx.beginPath();
        //ctx.moveTo(0, 0);
        //ctx.lineTo(300, 150);
        ctx.arc(150, 75, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        //ctx.stroke();

        //draw edge
        //grad = ctx.createRadialGradient(150, 75, radius * 1.2, 0, 0, radius * 1.05);
        //grad.addColorStop(0, '#333');
        //grad.addColorStop(0.5, 'white');
        //grad.addColorStop(1, '#333');
        //ctx.strokeStyle = grad;
        //ctx.lineWidth = radius * 0.1;
        //ctx.stroke();

        ctx.beginPath();
        ctx.arc(150, 75, radius * 0.05, 0, 2 * Math.PI);
        ctx.fillStyle = '#333';
        ctx.fill();
    }

    function drawNumbers(ctx, radius) {
        var ang;
        var num;
        ctx.font = radius * 0.15 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        for (num = 1; num < 13; num++) {
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, -radius * 0.85);
            ctx.rotate(-ang);
            ctx.fillText(num.toString(), 150, 75);
            ctx.rotate(ang);
            ctx.translate(0, radius * 0.85);
            ctx.rotate(-ang);
        }
    }

    function drawTime(ctx, radius) {
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        //hour
        hour = hour % 12;
        hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
        console.log(hour)
        //drawHand(ctx, hour, radius * 0.1, radius * 0.07);
        //minute
        minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
        //drawHand(ctx, minute, radius * 0.8, radius * 0.07);
        // second
        second = (second * Math.PI / 30);
        drawHand(ctx, second, radius * 0.9, radius * 0.02);

        //ctx.rotate(3.3);
        //ctx.beginPath();
        //ctx.moveTo(150, 75);
        //ctx.rotate(2 * Math.PI / 180);
        //ctx.lineTo(115, 75);
        //ctx.rotate(3.3);
        //ctx.stroke();
    }

    function drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(150, 75);
        ctx.rotate(pos);
        ctx.lineTo(115, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }
    function DrawRectangle(ctx) {
        ctx.beginPath();
        ctx.fillRect(0, 0, 300, 150)
        ctx.clearRect(5, 5, 290, 140);
        ctx.strokeRect(10, 10, 280, 130);

        ctx.beginPath();
        //ctx.moveTo(15, 80);
        //ctx.lineTo()
        //ctx.stroke();

        ctx.arc(15, 80, 1, 0, 2 * Math.PI);
        ctx.fillStyle = '#333';
        ctx.fill();

        ctx.arc(150, 15, 1, 0, 2 * Math.PI);
        ctx.fillStyle = '#333';
        ctx.fill();

        ctx.arc(150, 135, 1, 0, 2 * Math.PI);
        ctx.fillStyle = '#333';
        ctx.fill();

        ctx.arc(285, 80, 1, 0, 2 * Math.PI);
        ctx.fillStyle = '#333';
        ctx.fill();

        ctx.moveTo(150, 15);
        ctx.lineTo(285, 80);
        ctx.stroke();

    }
    function draw(ctx, radius) {
        //drawBackground(ctx, radius)
        //drawNumbers(ctx, radius);
        //drawTime(ctx, radius);
        DrawRectangle(ctx)
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        var radius = 70;
        //var radius = canvas.height / 2;
        //radius = radius * 0.90;
        //ctx.translate(radius, radius);
        //setInterval(draw, 1000);
        draw(ctx, radius)
    }, [draw])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas
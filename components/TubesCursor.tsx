"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

const tubeColors = ["#315bff", "#06b6d4", "#18cdb1", "#8b5cf6"];
const pointCount = 32;

export function TubesCursor() {
  const layerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!layer || !canvas || !context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (reducedMotion || coarsePointer) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let visible = true;
    let pointerActive = false;
    let target: Point = { x: 0, y: 0 };
    const tubes: Point[][] = tubeColors.map(() => []);

    const resize = () => {
      const bounds = layer.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(bounds.width, 1);
      height = Math.max(bounds.height, 1);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      target = { x: width * 0.58, y: height * 0.48 };

      tubes.forEach((tube, tubeIndex) => {
        tube.length = 0;
        for (let index = 0; index < pointCount; index += 1) {
          tube.push({
            x: target.x - index * 8,
            y: target.y + (tubeIndex - 1.5) * 20,
          });
        }
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = layer.getBoundingClientRect();
      pointerActive =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      if (pointerActive) {
        target.x = event.clientX - bounds.left;
        target.y = event.clientY - bounds.top;
      }
    };

    const onPointerLeave = () => {
      pointerActive = false;
    };

    const drawTube = (tube: Point[], color: string, index: number) => {
      if (tube.length < 3) return;

      context.beginPath();
      context.moveTo(tube[0].x, tube[0].y);
      for (let pointIndex = 1; pointIndex < tube.length - 1; pointIndex += 1) {
        const point = tube[pointIndex];
        const next = tube[pointIndex + 1];
        context.quadraticCurveTo(
          point.x,
          point.y,
          (point.x + next.x) / 2,
          (point.y + next.y) / 2,
        );
      }

      context.lineCap = "round";
      context.lineJoin = "round";
      context.globalAlpha = 0.5;
      context.strokeStyle = "rgba(255, 255, 255, 0.92)";
      context.lineWidth = 18 - index;
      context.shadowColor = color;
      context.shadowBlur = 26;
      context.stroke();

      context.globalAlpha = 0.88;
      context.strokeStyle = color;
      context.lineWidth = 8.5 - index * 0.5;
      context.shadowBlur = 15;
      context.stroke();

      const head = tube[0];
      context.beginPath();
      context.arc(head.x, head.y, 4.5, 0, Math.PI * 2);
      context.fillStyle = "#ffffff";
      context.globalAlpha = 0.92;
      context.shadowBlur = 15;
      context.fill();
    };

    const render = (time: number) => {
      animationFrame = window.requestAnimationFrame(render);
      if (!visible || !width || !height) return;

      if (!pointerActive) {
        target.x = width * (0.56 + Math.sin(time * 0.00038) * 0.17);
        target.y = height * (0.49 + Math.cos(time * 0.00052) * 0.2);
      }

      context.clearRect(0, 0, width, height);
      tubes.forEach((tube, tubeIndex) => {
        const verticalOffset =
          (tubeIndex - (tubes.length - 1) / 2) * 18 +
          Math.sin(time * 0.0014 + tubeIndex * 1.2) * 8;
        const horizontalOffset = Math.cos(time * 0.001 + tubeIndex) * 10;
        const head = tube[0];
        head.x += (target.x + horizontalOffset - head.x) * 0.16;
        head.y += (target.y + verticalOffset - head.y) * 0.16;

        for (let pointIndex = 1; pointIndex < tube.length; pointIndex += 1) {
          const point = tube[pointIndex];
          const previous = tube[pointIndex - 1];
          const drag = Math.max(0.11, 0.24 - pointIndex * 0.0045);
          point.x += (previous.x - point.x) * drag;
          point.y += (previous.y - point.y) * drag;
        }

        drawTube(tube, tubeColors[tubeIndex], tubeIndex);
      });

      context.globalAlpha = 1;
      context.shadowBlur = 0;
    };

    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );

    resizeObserver.observe(layer);
    visibilityObserver.observe(layer);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    resize();
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave,
      );
    };
  }, []);

  return (
    <div ref={layerRef} className="tubes-cursor-layer" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}

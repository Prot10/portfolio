import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const network = {
  layers: [{ nodes: 3 }, { nodes: 5 }, { nodes: 4 }, { nodes: 2 }],
};

const Node = styled.circle`
  fill: #1e1e1e;
  stroke: #00f0ff;
  stroke-width: 2;
`;

const Edge = styled.line`
  stroke: #00f0ff;
  stroke-width: 2;
  stroke-linecap: round;
  opacity: 0.2;
`;

const GlowingEdge = styled.line`
  stroke: #00f0ff;
  stroke-width: 4;
  stroke-linecap: round;
  opacity: 0;
`;

const NeuralNetworkVisualization = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const layerSpacing = 200;
  const nodeSpacing = 100;
  const containerHeight = 525;
  const containerWidth = 800;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const svg = svgRef.current;
      const glowingEdges = svg?.querySelectorAll(".glowing-edge");

      if (!glowingEdges) return;

      // Create the timeline
      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      // Animate each layer
      network.layers.forEach((layer, layerIndex) => {
        const layerGlowingEdges = Array.from(glowingEdges).filter((edge) =>
          edge.classList.contains(`edge-${layerIndex}`)
        );

        if (layerGlowingEdges.length > 0) {
          layerGlowingEdges.forEach((edge) => {
            const lineElement = edge as SVGLineElement; // Type assertion to SVGLineElement
            const length = lineElement.getTotalLength(); // Now `getTotalLength()` is recognized

            timeline.fromTo(
              lineElement,
              { strokeDashoffset: length, opacity: 0 },
              {
                strokeDashoffset: 0,
                opacity: 1,
                duration: 1.5,
                ease: "none",
              },
              `layer${layerIndex}`
            );

            timeline.to(
              lineElement,
              {
                opacity: 0,
                duration: 0.5,
                ease: "none",
              },
              `layer${layerIndex}+=1.25`
            );
          });
        }

        // Add a slight pause before the next layer
        timeline.to({}, { duration: 0.5 });
      });

      // Set up glowing edges
      glowingEdges.forEach((edge) => {
        const lineElement = edge as SVGLineElement; // Type assertion to SVGLineElement
        const length = lineElement.getTotalLength();
        gsap.set(lineElement, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      // Cleanup function to kill the GSAP timeline
      return () => {
        if (timeline) {
          timeline.kill(); // Properly kill the timeline
        }
      };
    }
  }, []);

  const renderLayer = (nodeCount: number, layerIndex: number) => {
    const layerHeight = nodeSpacing * (nodeCount - 1);
    const offsetY = (containerHeight - layerHeight) / 2;

    return Array.from({ length: nodeCount }).map((_, index) => (
      <Node
        key={`${layerIndex}-${index}`}
        cx={layerIndex * layerSpacing + 30}
        cy={offsetY + index * nodeSpacing + 30}
        r={30}
        className={`node node-${layerIndex}`}
      />
    ));
  };

  const renderConnections = (
    fromLayerIndex: number,
    fromNodeCount: number,
    toNodeCount: number
  ) => {
    const fromLayerHeight = nodeSpacing * (fromNodeCount - 1);
    const toLayerHeight = nodeSpacing * (toNodeCount - 1);
    const fromOffsetY = (containerHeight - fromLayerHeight) / 2;
    const toOffsetY = (containerHeight - toLayerHeight) / 2;

    return Array.from({ length: fromNodeCount }).flatMap((_, fromIndex) =>
      Array.from({ length: toNodeCount }).map((_, toIndex) => {
        const x1 = fromLayerIndex * layerSpacing + 30;
        const y1 = fromOffsetY + fromIndex * nodeSpacing + 30;
        const x2 = (fromLayerIndex + 1) * layerSpacing + 30;
        const y2 = toOffsetY + toIndex * nodeSpacing + 30;

        return (
          <React.Fragment key={`${fromLayerIndex}-${fromIndex}-${toIndex}`}>
            <Edge
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className={`edge edge-${fromLayerIndex}`}
            />
            <GlowingEdge
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className={`glowing-edge edge-${fromLayerIndex}`}
            />
          </React.Fragment>
        );
      })
    );
  };

  return (
    <div
      style={{
        position: "relative",
        height: `${containerHeight}px`,
        width: `${containerWidth}px`,
        overflow: "hidden",
      }}
    >
      <svg
        ref={svgRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      >
        <g opacity={0.7}>
          <g className="edges">
            {network.layers.map((layer, index) => {
              if (index < network.layers.length - 1) {
                const nextLayer = network.layers[index + 1];
                return renderConnections(index, layer.nodes, nextLayer.nodes);
              }
              return null;
            })}
          </g>
          <g className="nodes">
            {network.layers.map((layer, index) =>
              renderLayer(layer.nodes, index)
            )}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default NeuralNetworkVisualization;

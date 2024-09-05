import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

// Define the structure of the network
const network = {
  layers: [{ nodes: 3 }, { nodes: 5 }, { nodes: 4 }, { nodes: 2 }],
};

// Styled component for nodes
const Node = styled.circle`
  fill: #1e1e1e;
  stroke: #00f0ff;
  stroke-width: 2;
  box-shadow: 0 0 15px #00f0ff;
`;

const StaticLine = styled.line`
  stroke: #00f0ff;
  stroke-width: 3;
  stroke-linecap: round;
  opacity: 0.6;
`;

const NeuralNetworkVisualization: React.FC = () => {
  const layerSpacing = 200;
  const nodeSpacing = 100;
  const containerHeight = 525;
  const containerWidth = 800;

  const renderLayer = (nodeCount: number, layerIndex: number) => {
    const layerHeight = nodeSpacing * (nodeCount - 1);
    const offsetY = (containerHeight - layerHeight) / 2;

    return Array.from({ length: nodeCount }).map((_, index) => (
      <Node
        key={`${layerIndex}-${index}`}
        cx={layerIndex * layerSpacing + 30}
        cy={offsetY + index * nodeSpacing + 30}
        r={30}
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

    return Array.from({ length: fromNodeCount }).map((_, fromIndex) => {
      return Array.from({ length: toNodeCount }).map((_, toIndex) => {
        const x1 = fromLayerIndex * layerSpacing + 30;
        const y1 = fromOffsetY + fromIndex * nodeSpacing + 30;
        const x2 = (fromLayerIndex + 1) * layerSpacing + 30;
        const y2 = toOffsetY + toIndex * nodeSpacing + 30;

        return (
          <StaticLine
            key={`${fromLayerIndex}-${fromIndex}-${toIndex}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
          />
        );
      });
    });
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
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      >
        <defs>
          <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "rgba(0, 240, 255, 0)" }} />
            <stop
              offset="50%"
              style={{ stopColor: "rgba(0, 240, 255, 0.5)" }}
            />
            <stop offset="100%" style={{ stopColor: "rgba(0, 240, 255, 0)" }} />
          </linearGradient>

          <mask id="mask">
            <motion.rect
              x="-100%"
              y="0"
              width="200%"
              height="100%"
              fill="url(#glowGrad)"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </mask>
        </defs>

        <g mask="url(#mask)">
          {network.layers.map((layer, index) => {
            if (index < network.layers.length - 1) {
              const nextLayer = network.layers[index + 1];
              return renderConnections(index, layer.nodes, nextLayer.nodes);
            }
            return null;
          })}
          {network.layers.map((layer, index) =>
            renderLayer(layer.nodes, index)
          )}
        </g>
      </svg>
    </div>
  );
};

export default NeuralNetworkVisualization;

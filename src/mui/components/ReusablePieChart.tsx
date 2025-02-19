import * as React from 'react';
import { PieChart, PieChartProps } from '@mui/x-charts/PieChart';
import { css, keyframes } from '@emotion/react';

interface ReusablePieChartProps extends PieChartProps {
  animateArc: boolean;
  highlightedId: number;
  gradientColors: string[];
}

const piechartArcPulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const ReusablePieChart: React.FC<ReusablePieChartProps> = ({ animateArc, highlightedId, gradientColors, ...pieChartProps }) => {
  return (
    <PieChart
      className="my-pie-chart"
      {...pieChartProps}
      sx={{
        ...(animateArc && {
          [`path:nth-of-type(${highlightedId})`]: {
            animation: `${piechartArcPulse} 7s infinite ease-out`,
            fill: "url(#moving-shadow2)",
          },
        }),
      }}
    >
      <defs>
        <radialGradient
          id="moving-shadow2"
          gradientUnits="userSpaceOnUse"
          cx="200"
          cy="100"
          r="190"
          fx="300"
          fy="120"
          gradientTransform="skewX(20) translate(-35, 0)"
        >
          {gradientColors.map((color, index) => (
            <stop key={index} offset={`${index * (100 / (gradientColors.length - 1))}%`} stopColor={color} />
          ))}
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            values="150,0; -150,0; 150,0"
            dur="7s"
            repeatCount="indefinite"
          />
        </radialGradient>
      </defs>
    </PieChart>
  );
};

export default ReusablePieChart;
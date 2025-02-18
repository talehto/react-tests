import * as React from 'react';
import { PieChart, PieChartProps } from '@mui/x-charts/PieChart';

interface ReusablePieChartProps extends PieChartProps {
  animateArc: boolean;
  highlightedId: number;
}

const ReusablePieChart: React.FC<ReusablePieChartProps> = ({ animateArc, highlightedId, ...pieChartProps }) => {
  return (
    <PieChart
      className="my-pie-chart"
      {...pieChartProps}
      sx={{
        [animateArc && `path:nth-of-type(${highlightedId})`]: {
          animation: "piechart-arc-pulse 10s infinite ease-out;",
          fill: "url(#moving-shadow2)",
        },
      }}
    >
      <defs>
        <radialGradient
          id="moving-shadow2"
          gradientUnits="userSpaceOnUse"
          cx="100"
          cy="100"
          r="190"
          fx="220"
          fy="120"
          gradientTransform="skewX(20) translate(-35, 0)"
        >
          <stop offset="0%" stopColor="#eeee8b" />
          <stop offset="50%" stopColor="#f7f77b" />
          <stop offset="70%" stopColor="#f8f8a5" />
          <stop offset="100%" stopColor="#eeee8b" />
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

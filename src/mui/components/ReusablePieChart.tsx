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
          cx="170"
          cy="100"
          r="190"
          fx="200"
          fy="120"
          gradientTransform="skewX(20) translate(-35, 0)"
        >
          <stop offset="0%" stopColor="#eeee7e" />
          <stop offset="50%" stopColor="#f3f33f" />
          <stop offset="70%" stopColor="#f3f331" />
          <stop offset="100%" stopColor="#f1f170" />
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

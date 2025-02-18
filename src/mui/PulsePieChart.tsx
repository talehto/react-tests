import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PieChart, PieChartProps } from '@mui/x-charts/PieChart';
import Button from '@mui/material/Button';

export default function PulsePieChart() {

  const [animateArc, setAnimateArc] = React.useState(false);

    const [arcData, setArcData] = React.useState([
      { id: 0, value: 30, label: 'A', color: 'red' },
      { id: 1, value: 30, label: 'B', color: 'yellow' },
      { id: 2, value: 30, label: 'C', color: 'green' },
    ]);
    const highlightedId = 2;

    const handleClick = () => {
      setAnimateArc(!animateArc)
    }

    const pieChartProps: PieChartProps = {
      series: [
        {
          id: 'sync',
          data: arcData,
          innerRadius: 45,
          paddingAngle: 5,
          cornerRadius: 8,
        },
      ],
      width: 400,
      height: 400,
      skipAnimation: false,
      slotProps: {
        legend: {
          hidden: true,
        },
      }
    };

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Stack
        direction={{ xs: 'column', xl: 'row' }}
        spacing={1}
        sx={{ width: '30%', justifyContent: 'center' }}>
        <PieChart
          //ref={chartRef}
          className="my-pie-chart"
          {...pieChartProps}
          sx={{
            [animateArc && `path:nth-of-type(${highlightedId})`]: {
              animation: "piechart-arc-pulse 10s infinite ease-out;",
              fill: "url(#moving-shadow2)",
              //style: "filter: url(#moving-stripes2)",
            },
          }}
          >
          <defs>
          <radialGradient
          id="moving-shadow2"
          gradientUnits="userSpaceOnUse"
          cx="100"
          cy="100"
          r="180"
          fx="220"
          fy="120"
          gradientTransform="skewX(20) translate(-35, 0)">
          <stop offset="0%" stopColor="#eeee8b" />
          <stop offset="50%" stopColor="#f7f77b" />
          <stop offset="70%" stopColor="#f8f8a5" />
          <stop offset="100%" stopColor="#f7f793ea" />
          <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values="150,0; -150,0; 150,0"
              dur="7s"
              repeatCount="indefinite"
            />
        </radialGradient>
        {/* <rect
          x="0"
          y="0"
          width="5"
          height="5"
          /> */}
          </defs>
        </PieChart>
          
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button id="button1" variant="contained" className="button1-animated"
            sx={{ width: '60%' }}
            onClick={handleClick}>
            {animateArc ? "Stop animation" : "Start animation"}
          </Button>
        </div>
      </Stack>
    </div>
    </>
  );
}

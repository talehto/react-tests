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
    //const stripedId = 1;
    //const chartRef = React.useRef<SVGSVGElement | null>(null);

    // React.useEffect(() => {
    //   if (chartRef.current) {
    //     console.log("Here we go...")
    //     const paths = chartRef.current.querySelectorAll("path");
    //     if (animateArc && paths[stripedId]) {
    //       //paths[stripedId].setAttribute("fill", "url(#moving-stripes2)");
    //       //paths[stripedId].fill = "url(#stripes-pattern2)";
    //       //paths[stripedId].style.fill = "yellow";
    //     }
    //   }
    // }, []);

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
            fill: "url(#moving-stripes2)",
          },
        }}
        />
        {/* SVG Pattern: Moved stripes */}
        <svg viewBox="0 0 0 0">
          <defs>
            <pattern
              id="moving-stripes2"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
                <animate
                  attributeType="XML"
                  attributeName="x"
                  type="translate"
                  from="0%"
                  to="100%"
                  dur="30s"
                  repeatCount="indefinite"
                />
              <rect width="5" height="10" fill="yellow">
              </rect>
            </pattern>
          </defs>
        </svg>
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

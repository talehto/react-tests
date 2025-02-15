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
    // const stripedId = 0;
    const chartRef = React.useRef<SVGSVGElement | null>(null);

    // React.useEffect(() => {
    //   if (chartRef.current) {
    //     console.log("Here we go...")
    //     const paths = chartRef.current.querySelectorAll("path");
    //     if (paths[stripedId]) {
    //       //paths[stripedId].style.fill = "url(#stripes-pattern)";
    //       //paths[stripedId].style.fill = "black";
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
        ref={chartRef}
        className="my-pie-chart"
        {...pieChartProps}
        sx={{
          [animateArc && `path:nth-of-type(${highlightedId})`]: {
            animation: "piechart-arc-pulse 10s infinite ease-out;",
            //stroke: "#ffc733",
            //strokeWidth: 3,
            fill: "yellow",
          },
        }}
        />
    </Stack>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button id="button1" variant="contained" className="button1-animated"
          sx={{ width: '25%' }}
          onClick={handleClick}>
          {animateArc ? "Stop animation" : "Start animation"}
        </Button>
      </div>
      </>
  );
}

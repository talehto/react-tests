import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PieChart, PieChartProps } from '@mui/x-charts/PieChart';
import Button from '@mui/material/Button';
import ReusablePieChart from './components/ReusablePieChart';

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
        
        <ReusablePieChart
          {...pieChartProps}
          animateArc={animateArc}
          highlightedId={highlightedId}
        />
        
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

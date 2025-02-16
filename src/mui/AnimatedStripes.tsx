import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useRef } from "react";

export default function AnimatedStripedPieChart() {
  const chartRef = useRef<SVGSVGElement | null>(null);
  const stripedId = 1; // Striped arc

  useEffect(() => {
    if (chartRef.current) {
      const paths = chartRef.current.querySelectorAll("path");
      if (paths[stripedId]) {
        paths[stripedId].setAttribute("fill", "url(#moving-stripes)");
      }
    }
  }, []);

  return (
    <div style={{ width: 300, height: 200 }}>
      <PieChart
        ref={chartRef}
        width={300}
        height={200}
        series={[
          {
            data: [
              { id: 0, value: 40, label: "A" },
              { id: 1, value: 30, label: "B" }, // Striped arc
              { id: 2, value: 20, label: "C" },
              { id: 3, value: 10, label: "D" },
            ],
            innerRadius: 50,
            outerRadius: 100,
          },
        ]}
      />

      {/* SVG Pattern: Moved stripes */}
      <svg viewBox="0 0 120 120">
        <defs>
          <pattern
            id="moving-stripes"
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
                dur="15s"
                repeatCount="indefinite"
              />
            <rect width="5" height="10" fill="yellow">
            </rect>
          </pattern>
        </defs>
      </svg>
    </div>
  );
}

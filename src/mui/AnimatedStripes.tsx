import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useRef } from "react";

// THIS EXAMPLE DOES NOT WORK!

export default function StripedPieChart() {
  const chartRef = useRef<SVGSVGElement | null>(null);
  const stripedId = 1; // 🎯 Tämä lohko saa animoidut raidat

  useEffect(() => {
    if (chartRef.current) {
      const paths = chartRef.current.querySelectorAll("path");
      if (paths[stripedId]) {
        paths[stripedId].style.fill = "url(#stripes-pattern)"; // Lisää raidat vain valittuun lohkoon
      }
    }
  }, []);

  return (
    <PieChart
      ref={chartRef}
      width={300}
      height={200}
      series={[
        {
          data: [
            { id: 0, value: 40, label: "A" },
            { id: 1, value: 30, label: "B" }, // 🎯 Tämä lohko saa animoidut raidat
            { id: 2, value: 20, label: "C" },
            { id: 3, value: 10, label: "D" },
          ],
          innerRadius: 50,
          outerRadius: 100,
        },
      ]}
      slotProps={{
        svg: {
          children: (
            <defs>
              {/* 🏁 SVG Pattern: Animoidut raidat */}
              <pattern
                id="stripes-pattern"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <rect width="5" height="10" fill="black">
                  <animateTransform
                    attributeType="XML"
                    attributeName="patternTransform"
                    type="translate"
                    from="0,0"
                    to="10,10"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </rect>
              </pattern>
            </defs>
          ),
        },
      }}
    />
  );
}

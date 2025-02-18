import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useRef } from "react";

export default function ShadowPieChart() {
  const chartRef = useRef<SVGSVGElement | null>(null);
  const shadowId = 1; // 🎯 Tämä lohko saa varjoefektin

  useEffect(() => {
    if (chartRef.current) {
      const paths = chartRef.current.querySelectorAll("path");
      if (paths[shadowId]) {
        paths[shadowId].setAttribute("fill", "url(#moving-shadow)");
        //paths[shadowId].setAttribute("style", "transform: translateX(400px);");
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
              { id: 1, value: 30, label: "B" }, // 🎯 Tämä lohko saa varjon
              { id: 2, value: 20, label: "C" },
              { id: 3, value: 10, label: "D" },
            ],
            innerRadius: 50,
            outerRadius: 100,
          },
        ]}
      />

      {/* 🏁 SVG LinearGradient: Pehmeästi liikkuva varjo */}
      <svg viewBox="0 0 120 120">
        <defs>
        <radialGradient
          id="moving-shadow"
          gradientUnits="userSpaceOnUse"
          cx="9"
          cy="100"
          r="200"
          fx="200"
          fy="100"
          gradientTransform="skewX(20) translate(-35, 0)">
          <stop offset="0%" stopColor="#ececa7" />
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
        <rect
          x="0"
          y="0"
          width="200"
          height="200"
          />
        </defs>
      </svg>
    </div>
  );
}

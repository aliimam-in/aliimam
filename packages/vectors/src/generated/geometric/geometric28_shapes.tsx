/**
 * Auto-generated logo component: Geometric28 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric28ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric28Shapes = React.forwardRef<SVGSVGElement, Geometric28ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 713 357"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M549.72 239.344L651.319 180.685L633.333 149.532L529.507 209.476C525.515 204.5 521.313 199.7 516.915 195.089L602.567 109.437L577.13 84.0001L490.021 171.109C485.164 167.437 480.151 163.96 474.995 160.69L537.035 53.2338L505.881 35.2475L443.124 143.947C437.71 141.644 432.186 139.55 426.562 137.675L459.19 15.9071L424.443 6.59666L391.612 129.123C385.922 128.214 380.161 127.522 374.336 127.055V0H338.363V127.055C332.538 127.522 326.777 128.214 321.087 129.123L288.256 6.59666L253.51 15.9071L286.137 137.675C280.513 139.55 274.989 141.644 269.575 143.947L206.817 35.2475L175.664 53.2338L237.704 160.691C232.548 163.96 227.535 167.437 222.678 171.109L135.569 84.0001L110.132 109.437L195.784 195.089C191.386 199.7 187.184 204.5 183.192 209.476L79.3661 149.532L61.3798 180.685L162.979 239.344C159.684 245.185 156.645 251.19 153.879 257.345L42.0394 227.377L32.729 262.124L141.832 291.358C140.025 298.192 138.537 305.155 137.384 312.231H26.1323V348.203H686.567V312.231H575.316C574.162 305.155 572.674 298.192 570.868 291.358L679.97 262.124L670.66 227.377L558.82 257.345C556.054 251.19 553.015 245.185 549.72 239.344Z" fill="#43A363"/>
    </svg>
  )
);

Geometric28Shapes.displayName = "Geometric28Shapes";

export const Geometric28ShapesMetadata = {
  id: "geometric28_shapes",
  baseId: "geometric28",
  variant: "shapes",
  name: "Geometric28",
  category: "geometric",
  tags: [],
  viewBox: "0 0 713 357",
} as const;

export default Geometric28Shapes;

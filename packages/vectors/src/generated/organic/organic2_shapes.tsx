
'use client';
import React from 'react';

export interface Organic2ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic2Shapes = React.forwardRef<SVGSVGElement, Organic2ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 300 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M15.6149 249.408C15.1239 254.865 14.6884 280.79 16.3153 288.221C17.6073 294.117 56.776 294.059 62.7468 291.931C72.926 288.299 69.9985 216.814 71 204.789C76.0085 144.64 84.0142 76.7954 151.869 59.1666C205.777 45.162 222.004 117.801 226.943 155.263C228.317 165.673 229.205 176.156 229.685 186.647C230.459 203.554 230.247 220.492 230.707 237.41C231.244 257.192 232.226 287.17 241.111 292.535C244.313 294.468 272.526 296.771 282.568 291.931C287.849 289.386 283.431 245.135 280.409 218.558C274.153 163.517 269.584 120.877 252.987 68.5933C236.446 16.4866 183.177 6.70183 153.854 5.79619C74.1975 3.33627 35.9518 81.0542 25.0416 148.289C16.882 198.574 20.1997 198.516 15.6149 249.408Z" fill="currentColor"/>
    </svg>
  )
);

Organic2Shapes.displayName = "Organic2Shapes";

export const Organic2ShapesMetadata = {
  id: "organic2_shapes",
  baseId: "organic2",
  variant: "shapes",
  name: "Organic2",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 300",
} as const;

export default Organic2Shapes;

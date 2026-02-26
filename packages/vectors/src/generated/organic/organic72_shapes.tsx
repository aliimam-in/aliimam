
'use client';
import React from 'react';

export interface Organic72ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic72Shapes = React.forwardRef<SVGSVGElement, Organic72ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 300 300"
      
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M72.994 224.035C81.9851 234.109 90.6398 243.741 102.753 250.116C117 257.615 155.439 272.957 170.738 269.132C210.366 259.225 246.658 222.788 259.385 185.518C265.372 167.983 271.933 150.425 280.869 134.129C290.527 116.519 290.753 97.9306 284.837 78.7734C281.824 69.0171 273.684 62.1538 265.772 56.4181C257.179 50.1879 249.133 44.5647 239.352 40.2565C229.06 35.7231 217.305 31.6581 206.013 30.7724C192.916 29.7452 179.323 30.5804 166.19 30.6756C119.647 31.0129 66.5232 34.3465 29.0576 65.2247C22.7222 70.4462 11.9542 80.8137 11.3959 89.4672C10.9864 95.8143 11.2282 102.295 12.0249 108.581C14.5221 128.28 20.5291 144.518 30.3157 161.807C35.6822 171.288 39.8796 181.518 46.187 190.453C54.453 202.163 63.4498 213.341 72.994 224.035Z" fill="#CF6F49"/>
    </svg>
  )
);

Organic72Shapes.displayName = "Organic72Shapes";

export const Organic72ShapesMetadata = {
  id: "organic72_shapes",
  baseId: "organic72",
  variant: "shapes",
  name: "Organic72",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 300",
} as const;

export default Organic72Shapes;

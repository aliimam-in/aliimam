
'use client';
import React from 'react';

export interface Organic34ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic34Shapes = React.forwardRef<SVGSVGElement, Organic34ShapesProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M109.026 51.3839C101.846 58.3271 86.0644 53.865 75.7856 53.865C54.872 53.865 33.2407 55.2406 17.4208 71.0623C13.4535 75.0295 10.79 81.8832 9.60384 87.2173C8.03519 94.2728 5.70153 101.834 7.51934 109.103C13.5974 133.417 46.5322 140.748 57.025 161.735C61.3151 170.314 40.8506 177.215 36.7026 179.975C10.8918 197.141 8.22471 219.304 10.125 232.607C13.4676 256.002 31.4071 275.624 54.9404 278.986C69.7918 281.108 85.0625 274.157 98.7137 269.606C110.122 265.804 126.949 252.196 139.883 258.662C151.493 264.468 163.09 278.744 172.191 287.845C180.47 296.122 199.96 294.718 210.232 293.578C215.473 292.995 222.341 290.902 226.908 287.845C266.365 261.434 226.875 228.693 227.429 223.227C228.338 214.263 247.299 218.34 260.78 213.847C286.636 205.228 305.974 176.087 298.301 149.228C293.186 131.329 274.615 122.226 258.695 116.92C252.158 114.741 231.921 117.369 228.993 108.582C227.284 103.455 231.404 67.2284 230.272 55.6723C225.996 12.0254 180.392 -0.369448 151.358 8.00373C129.109 14.4187 118.538 42.1843 109.026 51.3839Z" fill="#D88D3A"/>
    </svg>
  )
);

Organic34Shapes.displayName = "Organic34Shapes";

export const Organic34ShapesMetadata = {
  id: "organic34_shapes",
  baseId: "organic34",
  variant: "shapes",
  name: "Organic34",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 300",
} as const;

export default Organic34Shapes;

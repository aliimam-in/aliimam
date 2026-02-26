
'use client';
import React from 'react';

export interface Organic27ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic27Shapes = React.forwardRef<SVGSVGElement, Organic27ShapesProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M67.7993 51.9771C78.8256 40.9508 103.634 29.5157 108.975 28.4467C111.297 27.9824 116.214 26.9777 121.197 25.9594C126.235 24.9298 131.341 23.8864 133.901 23.374C149.561 20.2424 168.379 18.9562 184.114 22.1032C188.229 22.9263 192.298 23.595 196.318 24.2555C210.489 26.5843 224.051 28.8129 236.868 37.3574C253.031 48.1331 259.397 61.7977 266.671 77.4117C268.303 80.9148 269.981 84.5161 271.825 88.2049C296.851 138.254 314.333 222.216 261.656 261.724C246.678 272.957 230.006 273.224 213.189 273.494C205.169 273.623 197.116 273.752 189.199 275.071C161.646 279.664 125.912 281.461 97.6715 277.615C74.8372 274.504 43.9422 251.984 21.4003 226.131C13.5711 217.15 9.26955 199.89 6.45271 188.587C6.3485 188.169 6.24632 187.759 6.14607 187.358C-5.74057 139.813 35.5634 84.2113 67.7993 51.9771Z" fill="#E5D7CE"/>
    </svg>
  )
);

Organic27Shapes.displayName = "Organic27Shapes";

export const Organic27ShapesMetadata = {
  id: "organic27_shapes",
  baseId: "organic27",
  variant: "shapes",
  name: "Organic27",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 300",
} as const;

export default Organic27Shapes;

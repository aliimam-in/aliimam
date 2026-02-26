
'use client';
import React from 'react';

export interface Organic6ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic6Shapes = React.forwardRef<SVGSVGElement, Organic6ShapesProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M181.641 289.225C171.274 297.876 139.837 300.996 119.31 286.299C70.6523 251.463 61.6044 213.759 34.5316 164.058C25.5852 147.634 25.4476 144.177 22.5483 126.028C19.6489 107.879 30.4871 95.1437 56.9782 114.059C71.7821 131.059 72.9733 126.28 84.1613 146.509C84.8617 147.776 103.64 183.642 110.35 178.043C114.895 174.25 115.747 155.673 116.193 150.085C118.197 124.999 115.322 59.2511 119.31 34.2889C119.31 12.2889 150.443 -7.60015 157 14.2889C168.926 54.104 170.515 105.177 175.018 146.509C175.474 150.691 182.298 176.468 192.549 172.191C199.602 169.248 208.501 150.786 210.859 144.883C213.428 138.452 217.626 132.492 220.209 126.028C224.218 115.992 235.852 95.0585 251.43 102.059C267.009 109.059 261.025 126.028 251.43 164.058C238.69 214.556 227.464 214.453 214.755 243.387C203.313 258.663 197.083 276.339 181.641 289.225Z" fill="currentColor"/>
    </svg>
  )
);

Organic6Shapes.displayName = "Organic6Shapes";

export const Organic6ShapesMetadata = {
  id: "organic6_shapes",
  baseId: "organic6",
  variant: "shapes",
  name: "Organic6",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 300",
} as const;

export default Organic6Shapes;

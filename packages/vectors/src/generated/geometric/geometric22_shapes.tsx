
'use client';
import React from 'react';

export interface Geometric22ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric22Shapes = React.forwardRef<SVGSVGElement, Geometric22ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 357 357"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M127.22 15.9809C212.282 2.0014 271.629 88.659 271.629 182.926C271.629 277.193 212.282 363.851 127.22 349.871C111.373 347.267 99.2522 345.69 88.2155 336.843C83.5564 333.108 83.5564 326.019 88.2155 322.284L92.2004 319.089C98.9041 313.716 98.9041 303.515 92.2004 298.141C85.4968 292.767 85.4968 282.567 92.2004 277.193C98.9041 271.819 98.9041 261.619 92.2004 256.245C85.4968 250.871 85.4968 240.67 92.2004 235.297C98.9041 229.923 98.9041 219.722 92.2004 214.348C85.4968 208.975 85.4968 198.774 92.2004 193.4C98.9041 188.026 98.9041 177.826 92.2004 172.452C85.4968 167.078 85.4968 156.878 92.2004 151.504C98.9041 146.13 98.9041 135.929 92.2004 130.556C85.4968 125.182 85.4968 114.981 92.2004 109.607C98.9041 104.233 98.9041 94.0329 92.2004 88.6591C85.4968 83.2853 85.4968 73.0847 92.2004 67.7108C98.9041 62.337 98.9041 52.1365 92.2004 46.7626L88.2155 43.5682C83.5564 39.8333 83.5564 32.7437 88.2155 29.0088C99.2522 20.1616 111.373 18.5852 127.22 15.9809Z" fill="currentColor"/>
    </svg>
  )
);

Geometric22Shapes.displayName = "Geometric22Shapes";

export const Geometric22ShapesMetadata = {
  id: "geometric22_shapes",
  baseId: "geometric22",
  variant: "shapes",
  name: "Geometric22",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric22Shapes;

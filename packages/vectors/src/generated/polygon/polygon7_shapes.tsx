
'use client';
import React from 'react';

export interface Polygon7ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Polygon7Shapes = React.forwardRef<SVGSVGElement, Polygon7ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_2068_487)">
<path d="M10.2131 0.43215C11.3195 -0.144051 12.6805 -0.14405 13.787 0.432151L22.2007 4.81379C23.3138 5.39342 24 6.46796 24 7.63123V16.3688C24 17.532 23.3138 18.6066 22.2007 19.1862L13.7869 23.5679C12.6805 24.1441 11.3195 24.144 10.2131 23.5678L1.79926 19.1862C0.686213 18.6066 0 17.532 0 16.3688V7.63123C0 6.46796 0.686215 5.39342 1.79926 4.81379L10.2131 0.43215Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_487">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Polygon7Shapes.displayName = "Polygon7Shapes";

export const Polygon7ShapesMetadata = {
  id: "polygon7_shapes",
  baseId: "polygon7",
  variant: "shapes",
  name: "Polygon7",
  category: "polygon",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Polygon7Shapes;

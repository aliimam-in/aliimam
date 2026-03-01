
'use client';
import React from 'react';

export interface Flower14ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Flower14Shapes = React.forwardRef<SVGSVGElement, Flower14ShapesProps>(
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
      <g clipPath="url(#clip0_2068_575)">
<path d="M7.30435 3.2693C9.00651 -1.08977 14.9935 -1.08977 16.6957 3.2693C17.1253 4.36965 18.1301 5.12023 19.2779 5.20026C23.8173 5.51679 25.6778 11.3822 22.1824 14.3855C21.2977 15.1457 20.9142 16.3619 21.1959 17.5134C22.3088 22.0628 17.4548 25.6775 13.5982 23.1876C12.6227 22.5577 11.3773 22.5577 10.4018 23.1876C6.54521 25.6775 1.69122 22.0628 2.80414 17.5134C3.0858 16.3619 2.70228 15.1457 1.81758 14.3855C-1.67782 11.3822 0.182708 5.51679 4.72214 5.20026C5.86986 5.12023 6.87467 4.36965 7.30435 3.2693Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_575">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Flower14Shapes.displayName = "Flower14Shapes";

export const Flower14ShapesMetadata = {
  id: "flower14_shapes",
  baseId: "flower14",
  variant: "shapes",
  name: "Flower14",
  category: "flower",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Flower14Shapes;

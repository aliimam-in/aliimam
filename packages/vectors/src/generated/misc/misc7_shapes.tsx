
'use client';
import React from 'react';

export interface Misc7ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Misc7Shapes = React.forwardRef<SVGSVGElement, Misc7ShapesProps>(
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
      <g clipPath="url(#clip0_2068_651)">
<path d="M0 0H4.8V4.8H0V0Z" fill="currentColor"/>
<path d="M4.8 4.8H9.6V9.6H4.8V4.8Z" fill="currentColor"/>
<path d="M0 9.6H4.8V14.4H0V9.6Z" fill="currentColor"/>
<path d="M4.8 14.4H9.6V19.2H4.8V14.4Z" fill="currentColor"/>
<path d="M14.4 4.8H19.2V9.6H14.4V4.8Z" fill="currentColor"/>
<path d="M9.6 9.6H14.4V14.4H9.6V9.6Z" fill="currentColor"/>
<path d="M0 19.2H4.8V24H0V19.2Z" fill="currentColor"/>
<path d="M19.2 9.6H24V14.4H19.2V9.6Z" fill="currentColor"/>
<path d="M9.6 0H14.4V4.8H9.6V0Z" fill="currentColor"/>
<path d="M14.4 14.4H19.2V19.2H14.4V14.4Z" fill="currentColor"/>
<path d="M9.6 19.2H14.4V24H9.6V19.2Z" fill="currentColor"/>
<path d="M19.2 0H24V4.8H19.2V0Z" fill="currentColor"/>
<path d="M19.2 19.2H24V24H19.2V19.2Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_651">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Misc7Shapes.displayName = "Misc7Shapes";

export const Misc7ShapesMetadata = {
  id: "misc7_shapes",
  baseId: "misc7",
  variant: "shapes",
  name: "Misc7",
  category: "misc",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Misc7Shapes;


'use client';
import React from 'react';

export interface Number5ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Number5Shapes = React.forwardRef<SVGSVGElement, Number5ShapesProps>(
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
      <g clipPath="url(#clip0_2068_916)">
<path d="M12 19.2H0V10.8L12 0H24V24H12V19.2Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_916">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Number5Shapes.displayName = "Number5Shapes";

export const Number5ShapesMetadata = {
  id: "number5_shapes",
  baseId: "number5",
  variant: "shapes",
  name: "Number5",
  category: "number",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number5Shapes;

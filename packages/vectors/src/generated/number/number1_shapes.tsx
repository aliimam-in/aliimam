
'use client';
import React from 'react';

export interface Number1ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Number1Shapes = React.forwardRef<SVGSVGElement, Number1ShapesProps>(
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
      <g clipPath="url(#clip0_2068_920)">
<path fillRule="evenodd" clipRule="evenodd" d="M12 13.2C12.6627 13.2 13.2 12.6627 13.2 12C13.2 11.3373 12.6627 10.8 12 10.8C11.3373 10.8 10.8 11.3373 10.8 12C10.8 12.6627 11.3373 13.2 12 13.2ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_920">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Number1Shapes.displayName = "Number1Shapes";

export const Number1ShapesMetadata = {
  id: "number1_shapes",
  baseId: "number1",
  variant: "shapes",
  name: "Number1",
  category: "number",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number1Shapes;

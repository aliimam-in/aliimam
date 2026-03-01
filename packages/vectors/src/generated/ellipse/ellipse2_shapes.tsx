
'use client';
import React from 'react';

export interface Ellipse2ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Ellipse2Shapes = React.forwardRef<SVGSVGElement, Ellipse2ShapesProps>(
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
      <g clipPath="url(#clip0_2068_772)">
<path fillRule="evenodd" clipRule="evenodd" d="M12 8.64C10.1443 8.64 8.64 10.1443 8.64 12C8.64 13.8557 10.1443 15.36 12 15.36C13.8557 15.36 15.36 13.8557 15.36 12C15.36 10.1443 13.8557 8.64 12 8.64ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_772">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Ellipse2Shapes.displayName = "Ellipse2Shapes";

export const Ellipse2ShapesMetadata = {
  id: "ellipse2_shapes",
  baseId: "ellipse2",
  variant: "shapes",
  name: "Ellipse2",
  category: "ellipse",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Ellipse2Shapes;

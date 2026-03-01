
'use client';
import React from 'react';

export interface Polygon1ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Polygon1Shapes = React.forwardRef<SVGSVGElement, Polygon1ShapesProps>(
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
      <g clipPath="url(#clip0_2068_491)">
<path d="M23.5819 10.2679C24.1394 11.3397 24.1394 12.6603 23.5819 13.7321L19.1423 22.268C18.5848 23.3397 17.5546 24 16.4397 24H7.56035C6.44543 24 5.41521 23.3397 4.85775 22.2679L0.418094 13.7321C-0.139364 12.6603 -0.139365 11.3397 0.418094 10.2679L4.85775 1.73205C5.41521 0.660254 6.44543 -5.40974e-08 7.56035 0L16.4397 4.30837e-07C17.5546 4.84935e-07 18.5848 0.660254 19.1423 1.73205L23.5819 10.2679Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_491">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Polygon1Shapes.displayName = "Polygon1Shapes";

export const Polygon1ShapesMetadata = {
  id: "polygon1_shapes",
  baseId: "polygon1",
  variant: "shapes",
  name: "Polygon1",
  category: "polygon",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Polygon1Shapes;

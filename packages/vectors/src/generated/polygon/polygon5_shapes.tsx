
'use client';
import React from 'react';

export interface Polygon5ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Polygon5Shapes = React.forwardRef<SVGSVGElement, Polygon5ShapesProps>(
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
      <g clipPath="url(#clip0_2068_492)">
<path d="M10.0797 0.64707C11.225 -0.21569 12.775 -0.21569 13.9203 0.647069L22.6507 7.22356C23.7978 8.08772 24.2779 9.62073 23.8394 11.0198L20.5062 21.6561C20.0682 23.0538 18.8131 24 17.3971 24H6.6029C5.18687 24 3.93179 23.0538 3.49378 21.6561L0.160573 11.0198C-0.277883 9.62073 0.202164 8.08772 1.34934 7.22356L10.0797 0.64707Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_492">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Polygon5Shapes.displayName = "Polygon5Shapes";

export const Polygon5ShapesMetadata = {
  id: "polygon5_shapes",
  baseId: "polygon5",
  variant: "shapes",
  name: "Polygon5",
  category: "polygon",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Polygon5Shapes;


'use client';
import React from 'react';

export interface Flower7ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Flower7Shapes = React.forwardRef<SVGSVGElement, Flower7ShapesProps>(
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
      <g clipPath="url(#clip0_2068_579)">
<path d="M12 -8.15393e-06C10.3431 -8.08151e-06 9 1.34314 9 2.99999L9 4.71471L7.80396 3.51867C6.63239 2.3471 4.73289 2.3471 3.56132 3.51867C2.38975 4.69025 2.38975 6.58974 3.56132 7.76131L4.8 9L3 9C1.34315 9 -5.9696e-07 10.3431 -5.24537e-07 12C-4.52113e-07 13.6569 1.34315 15 3 15L4.68 15L3.51076 16.1692C2.33918 17.3408 2.33918 19.2403 3.51076 20.4119C4.68233 21.5835 6.58183 21.5835 7.7534 20.4119L9 19.1653L9 21C9 22.6569 10.3431 24 12 24C13.6569 24 15 22.6569 15 21L15 19.2L16.2892 20.4892C17.4608 21.6608 19.3603 21.6608 20.5319 20.4892C21.7035 19.3177 21.7035 17.4182 20.5319 16.2466L19.2853 15L21 15C22.6569 15 24 13.6568 24 12C24 10.3431 22.6569 8.99999 21 8.99999L19.1653 8.99999L20.4813 7.68396C21.6529 6.51238 21.6529 4.61289 20.4813 3.44131C19.3098 2.26974 17.4103 2.26974 16.2387 3.44131L15 4.67999L15 2.99999C15 1.34314 13.6569 -8.22635e-06 12 -8.15393e-06Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_579">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Flower7Shapes.displayName = "Flower7Shapes";

export const Flower7ShapesMetadata = {
  id: "flower7_shapes",
  baseId: "flower7",
  variant: "shapes",
  name: "Flower7",
  category: "flower",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Flower7Shapes;

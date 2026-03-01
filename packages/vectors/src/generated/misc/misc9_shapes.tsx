
'use client';
import React from 'react';

export interface Misc9ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Misc9Shapes = React.forwardRef<SVGSVGElement, Misc9ShapesProps>(
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
      <g clipPath="url(#clip0_2068_655)">
<path d="M1.01681 9.46607C3.24075 2.74795 8.49977 0.492938 10.7885 0.175654C24.017 -1.65824 26.6659 11.3201 21.5938 18.0283C17.2201 23.8128 9.51725 24.8906 4.89464 23.3895C0.823053 22.0673 -1.43821 16.8823 1.01681 9.46607Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_655">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Misc9Shapes.displayName = "Misc9Shapes";

export const Misc9ShapesMetadata = {
  id: "misc9_shapes",
  baseId: "misc9",
  variant: "shapes",
  name: "Misc9",
  category: "misc",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Misc9Shapes;

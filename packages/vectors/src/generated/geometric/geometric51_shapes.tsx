
'use client';
import React from 'react';

export interface Geometric51ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric51Shapes = React.forwardRef<SVGSVGElement, Geometric51ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 357 357"
      
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M178.8 34.4473C93.9862 86.0025 0 155.338 0 261.857C0 294.658 26.5905 321.248 59.3916 321.248C91.5442 321.248 117.729 295.699 118.752 263.795H118.814C119.837 295.699 146.022 321.248 178.175 321.248C210.327 321.248 236.513 295.699 237.535 263.795H237.597C238.62 295.699 264.805 321.248 296.958 321.248C329.759 321.248 356.35 294.658 356.35 261.857C356.35 154.741 264.736 86.6845 178.8 34.4473Z" fill="#F5BD33"/>
    </svg>
  )
);

Geometric51Shapes.displayName = "Geometric51Shapes";

export const Geometric51ShapesMetadata = {
  id: "geometric51_shapes",
  baseId: "geometric51",
  variant: "shapes",
  name: "Geometric51",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric51Shapes;

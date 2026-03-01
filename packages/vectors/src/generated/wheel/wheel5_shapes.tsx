
'use client';
import React from 'react';

export interface Wheel5ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Wheel5Shapes = React.forwardRef<SVGSVGElement, Wheel5ShapesProps>(
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
      <path d="M12.96 0H11.04V9.68238L4.1935 2.83588L2.83586 4.19353L9.68233 11.04H0V12.96H9.68235L2.83588 19.8065L4.19353 21.1641L11.04 14.3176V24H12.96V14.3177L19.8064 21.1641L21.1641 19.8064L14.3176 12.96H24V11.04H14.3176L21.1641 4.19355L19.8064 2.83591L12.96 9.68235V0Z" fill="currentColor"/>
    </svg>
  )
);

Wheel5Shapes.displayName = "Wheel5Shapes";

export const Wheel5ShapesMetadata = {
  id: "wheel5_shapes",
  baseId: "wheel5",
  variant: "shapes",
  name: "Wheel5",
  category: "wheel",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Wheel5Shapes;

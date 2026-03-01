
'use client';
import React from 'react';

export interface Rectangle4ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Rectangle4Shapes = React.forwardRef<SVGSVGElement, Rectangle4ShapesProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0009 12.0005L12.0005 0L0 12.0005L12.0005 24.0009L24.0009 12.0005ZM16.8006 11.2002C16.8006 8.9911 15.0097 7.20024 12.8006 7.20024H11.2002C8.9911 7.20024 7.20024 8.9911 7.20024 11.2002V12.8006C7.20024 15.0097 8.9911 16.8006 11.2002 16.8006H12.8006C15.0097 16.8006 16.8006 15.0097 16.8006 12.8006V11.2002Z" fill="currentColor"/>
    </svg>
  )
);

Rectangle4Shapes.displayName = "Rectangle4Shapes";

export const Rectangle4ShapesMetadata = {
  id: "rectangle4_shapes",
  baseId: "rectangle4",
  variant: "shapes",
  name: "Rectangle4",
  category: "rectangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rectangle4Shapes;

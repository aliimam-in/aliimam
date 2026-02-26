
'use client';
import React from 'react';

export interface Abstract23ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract23Shapes = React.forwardRef<SVGSVGElement, Abstract23ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M0.490331 12.653C5.69766 14.1893 9.80137 18.2958 11.3415 23.5103C11.534 24.1632 12.466 24.1632 12.6585 23.5103C14.1986 18.2958 18.3043 14.1893 23.5097 12.653C24.1634 12.4588 24.1634 11.5412 23.5097 11.347C18.3023 9.81065 14.1967 5.7042 12.6585 0.489747C12.466 -0.163249 11.534 -0.163249 11.3415 0.489747C9.80137 5.7042 5.69575 9.81065 0.490331 11.347C-0.163444 11.5412 -0.163444 12.4588 0.490331 12.653Z" />
    </svg>
  )
);

Abstract23Shapes.displayName = "Abstract23Shapes";

export const Abstract23ShapesMetadata = {
  id: "abstract23_shapes",
  baseId: "abstract23",
  variant: "shapes",
  name: "Abstract23",
  category: "abstract",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Abstract23Shapes;

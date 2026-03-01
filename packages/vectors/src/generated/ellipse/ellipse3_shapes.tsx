
'use client';
import React from 'react';

export interface Ellipse3ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Ellipse3Shapes = React.forwardRef<SVGSVGElement, Ellipse3ShapesProps>(
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
      <g clipPath="url(#clip0_2068_769)">
<path d="M24 3.6C24 5.58822 22.3882 7.2 20.4 7.2C18.4118 7.2 16.8 5.58822 16.8 3.6C16.8 1.61177 18.4118 0 20.4 0C22.3882 0 24 1.61177 24 3.6Z" fill="currentColor"/>
<path d="M24 20.4C24 22.3882 22.3882 24 20.4 24C18.4118 24 16.8 22.3882 16.8 20.4C16.8 18.4118 18.4118 16.8 20.4 16.8C22.3882 16.8 24 18.4118 24 20.4Z" fill="currentColor"/>
<path d="M18.12 12C18.12 15.38 15.38 18.12 12 18.12C8.62002 18.12 5.88 15.38 5.88 12C5.88 8.62002 8.62002 5.88 12 5.88C15.38 5.88 18.12 8.62002 18.12 12Z" fill="currentColor"/>
<path d="M7.2 3.6C7.2 5.58822 5.58822 7.2 3.6 7.2C1.61177 7.2 0 5.58822 0 3.6C0 1.61177 1.61177 0 3.6 0C5.58822 0 7.2 1.61177 7.2 3.6Z" fill="currentColor"/>
<path d="M7.2 20.4C7.2 22.3882 5.58822 24 3.6 24C1.61177 24 0 22.3882 0 20.4C0 18.4118 1.61177 16.8 3.6 16.8C5.58822 16.8 7.2 18.4118 7.2 20.4Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_769">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Ellipse3Shapes.displayName = "Ellipse3Shapes";

export const Ellipse3ShapesMetadata = {
  id: "ellipse3_shapes",
  baseId: "ellipse3",
  variant: "shapes",
  name: "Ellipse3",
  category: "ellipse",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Ellipse3Shapes;

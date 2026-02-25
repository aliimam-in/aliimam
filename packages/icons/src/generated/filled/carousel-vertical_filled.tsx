/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CarouselVerticalFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CarouselVerticalFilled = React.forwardRef<SVGSVGElement, CarouselVerticalFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M18 6h-12a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2z" />
  <path d="M16 19a2 2 0 0 1 1.995 1.85l.005 .15v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1h-8v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a2 2 0 0 1 1.85 -1.995l.15 -.005h8z" />
  <path d="M17 1a1 1 0 0 1 .993 .883l.007 .117v1a2 2 0 0 1 -1.85 1.995l-.15 .005h-8a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-1a1 1 0 0 1 1.993 -.117l.007 .117v1h8v-1a1 1 0 0 1 1 -1z" />
    </svg>
  )
);
CarouselVerticalFilled.displayName = "CarouselVerticalFilled";
export const CarouselVerticalFilledMetadata = { 
  id: "carousel-vertical_filled", 
  baseId: "carousel-vertical", 
  variant: "filled", 
  name: "Carousel Vertical", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CarouselVerticalFilled;

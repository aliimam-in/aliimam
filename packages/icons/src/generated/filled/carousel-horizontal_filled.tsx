/**
 * Auto-generated logo component: Carousel Horizontal (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CarouselHorizontalFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CarouselHorizontalFilledLogo = React.forwardRef<SVGSVGElement, CarouselHorizontalFilledLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M16 4h-8a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
  <path d="M22 6a1 1 0 0 1 .117 1.993l-.117 .007h-1v8h1a1 1 0 0 1 .117 1.993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-8a2 2 0 0 1 1.85 -1.995l.15 -.005h1z" />
  <path d="M3 6a2 2 0 0 1 1.995 1.85l.005 .15v8a2 2 0 0 1 -1.85 1.995l-.15 .005h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-8h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
    </svg>
  )
);

CarouselHorizontalFilledLogo.displayName = "CarouselHorizontalFilledLogo";

export const CarouselHorizontalFilledLogoMetadata = {
  id: "carousel-horizontal_filled",
  baseId: "carousel-horizontal",
  variant: "filled",
  name: "Carousel Horizontal",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CarouselHorizontalFilledLogo;

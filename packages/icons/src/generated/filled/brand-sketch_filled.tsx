/**
 * Auto-generated logo component: Brand Sketch (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSketchFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSketchFilledLogo = React.forwardRef<SVGSVGElement, BrandSketchFilledLogoProps>(
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
      <path d="M7.554 3.004h8.929a2 2 0 0 1 1.647 .873l3.536 5.193a2.006 2.006 0 0 1 -.173 2.48l-8 8.79a2.007 2.007 0 0 1 -2.97 0l-8 -8.789a1 1 0 0 1 -.13 -.175l-.012 -.026l-.051 -.072a2.01 2.01 0 0 1 -.056 -2.063l.09 -.146l3.541 -5.193c.372 -.544 .987 -.87 1.649 -.872" />
    </svg>
  )
);

BrandSketchFilledLogo.displayName = "BrandSketchFilledLogo";

export const BrandSketchFilledLogoMetadata = {
  id: "brand-sketch_filled",
  baseId: "brand-sketch",
  variant: "filled",
  name: "Brand Sketch",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSketchFilledLogo;

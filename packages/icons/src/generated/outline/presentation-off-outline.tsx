/**
 * Auto-generated logo component: Presentation Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PresentationOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PresentationOffOutlineLogo = React.forwardRef<SVGSVGElement, PresentationOffOutlineLogoProps>(
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
      <path d="M3 4h1m4 0h13" />
  <path d="M4 4v10a2 2 0 0 0 2 2h10m3.42 -.592c.359 -.362 .58 -.859 .58 -1.408v-10" />
  <path d="M12 16v4" />
  <path d="M9 20h6" />
  <path d="M8 12l2 -2m4 0l2 -2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PresentationOffOutlineLogo.displayName = "PresentationOffOutlineLogo";

export const PresentationOffOutlineLogoMetadata = {
  id: "presentation-off-outline",
  baseId: "presentation-off-outline",
  variant: "default",
  name: "Presentation Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PresentationOffOutlineLogo;

/**
 * Auto-generated logo component: Presentation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PresentationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PresentationOutlineLogo = React.forwardRef<SVGSVGElement, PresentationOutlineLogoProps>(
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
      <path d="M3 4l18 0" />
  <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
  <path d="M12 16l0 4" />
  <path d="M9 20l6 0" />
  <path d="M8 12l3 -3l2 2l3 -3" />
    </svg>
  )
);

PresentationOutlineLogo.displayName = "PresentationOutlineLogo";

export const PresentationOutlineLogoMetadata = {
  id: "presentation-outline",
  baseId: "presentation-outline",
  variant: "default",
  name: "Presentation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PresentationOutlineLogo;

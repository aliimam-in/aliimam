/**
 * Auto-generated logo component: Panels Left Bottom (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanelsLeftBottomLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanelsLeftBottomLogo = React.forwardRef<SVGSVGElement, PanelsLeftBottomLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M9 3v18" />
  <path d="M9 15h12" />
    </svg>
  )
);

PanelsLeftBottomLogo.displayName = "PanelsLeftBottomLogo";

export const PanelsLeftBottomLogoMetadata = {
  id: "panels-left-bottom",
  baseId: "panels-left-bottom",
  variant: "default",
  name: "Panels Left Bottom",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanelsLeftBottomLogo;

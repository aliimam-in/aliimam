/**
 * Auto-generated logo component: Panels Right Bottom (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanelsRightBottomLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanelsRightBottomLogo = React.forwardRef<SVGSVGElement, PanelsRightBottomLogoProps>(
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
  <path d="M3 15h12" />
  <path d="M15 3v18" />
    </svg>
  )
);

PanelsRightBottomLogo.displayName = "PanelsRightBottomLogo";

export const PanelsRightBottomLogoMetadata = {
  id: "panels-right-bottom",
  baseId: "panels-right-bottom",
  variant: "default",
  name: "Panels Right Bottom",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanelsRightBottomLogo;

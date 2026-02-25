/**
 * Auto-generated logo component: Live View Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LiveViewOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LiveViewOutlineLogo = React.forwardRef<SVGSVGElement, LiveViewOutlineLogoProps>(
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
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
  <path d="M12 11l0 .01" />
  <path d="M12 18l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
    </svg>
  )
);

LiveViewOutlineLogo.displayName = "LiveViewOutlineLogo";

export const LiveViewOutlineLogoMetadata = {
  id: "live-view-outline",
  baseId: "live-view-outline",
  variant: "default",
  name: "Live View Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LiveViewOutlineLogo;

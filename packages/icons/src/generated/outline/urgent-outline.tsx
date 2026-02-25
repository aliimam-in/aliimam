/**
 * Auto-generated logo component: Urgent Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UrgentOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UrgentOutlineLogo = React.forwardRef<SVGSVGElement, UrgentOutlineLogoProps>(
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
      <path d="M8 16v-4a4 4 0 0 1 8 0v4" />
  <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
  <path d="M6 17a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1l0 -2" />
    </svg>
  )
);

UrgentOutlineLogo.displayName = "UrgentOutlineLogo";

export const UrgentOutlineLogoMetadata = {
  id: "urgent-outline",
  baseId: "urgent-outline",
  variant: "default",
  name: "Urgent Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UrgentOutlineLogo;

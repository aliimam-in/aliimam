/**
 * Auto-generated logo component: Diaper Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DiaperOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DiaperOutlineLogo = React.forwardRef<SVGSVGElement, DiaperOutlineLogoProps>(
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
      <path d="M3 8.323c0 -.579 0 -.868 .044 -1.11a2.7 2.7 0 0 1 2.17 -2.169c.239 -.044 .529 -.044 1.109 -.044h11.353c.579 0 .868 0 1.11 .044a2.7 2.7 0 0 1 2.169 2.17c.044 .24 .044 .53 .044 1.11v2.676a9 9 0 0 1 -18 0l.001 -2.677" />
  <path d="M17 9h4" />
  <path d="M3 9h4" />
  <path d="M14.25 19.7v-1.4a6.3 6.3 0 0 1 6.3 -6.3" />
  <path d="M9.75 19.7v-1.4a6.3 6.3 0 0 0 -6.3 -6.3" />
    </svg>
  )
);

DiaperOutlineLogo.displayName = "DiaperOutlineLogo";

export const DiaperOutlineLogoMetadata = {
  id: "diaper-outline",
  baseId: "diaper-outline",
  variant: "default",
  name: "Diaper Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DiaperOutlineLogo;

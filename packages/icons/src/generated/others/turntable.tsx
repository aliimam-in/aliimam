/**
 * Auto-generated logo component: Turntable (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TurntableLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TurntableLogo = React.forwardRef<SVGSVGElement, TurntableLogoProps>(
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
      <path d="M10 12.01h.01" />
  <path d="M18 8v4a8 8 0 0 1-1.07 4" />
  <circle cx="10" cy="12" r="4" />
  <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  )
);

TurntableLogo.displayName = "TurntableLogo";

export const TurntableLogoMetadata = {
  id: "turntable",
  baseId: "turntable",
  variant: "default",
  name: "Turntable",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TurntableLogo;

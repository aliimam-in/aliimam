/**
 * Auto-generated logo component: Cake (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CakeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CakeLogo = React.forwardRef<SVGSVGElement, CakeLogoProps>(
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
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
  <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
  <path d="M2 21h20" />
  <path d="M7 8v3" />
  <path d="M12 8v3" />
  <path d="M17 8v3" />
  <path d="M7 4h.01" />
  <path d="M12 4h.01" />
  <path d="M17 4h.01" />
    </svg>
  )
);

CakeLogo.displayName = "CakeLogo";

export const CakeLogoMetadata = {
  id: "cake",
  baseId: "cake",
  variant: "default",
  name: "Cake",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CakeLogo;

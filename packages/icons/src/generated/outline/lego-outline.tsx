/**
 * Auto-generated logo component: Lego Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LegoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LegoOutlineLogo = React.forwardRef<SVGSVGElement, LegoOutlineLogoProps>(
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
      <path d="M9.5 11l.01 0" />
  <path d="M14.5 11l.01 0" />
  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
  <path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3" />
    </svg>
  )
);

LegoOutlineLogo.displayName = "LegoOutlineLogo";

export const LegoOutlineLogoMetadata = {
  id: "lego-outline",
  baseId: "lego-outline",
  variant: "default",
  name: "Lego Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LegoOutlineLogo;

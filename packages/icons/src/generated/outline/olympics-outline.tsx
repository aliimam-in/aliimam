/**
 * Auto-generated logo component: Olympics Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OlympicsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OlympicsOutlineLogo = React.forwardRef<SVGSVGElement, OlympicsOutlineLogoProps>(
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
      <path d="M3 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M15 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M9 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M6 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
  )
);

OlympicsOutlineLogo.displayName = "OlympicsOutlineLogo";

export const OlympicsOutlineLogoMetadata = {
  id: "olympics-outline",
  baseId: "olympics-outline",
  variant: "default",
  name: "Olympics Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OlympicsOutlineLogo;

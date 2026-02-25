/**
 * Auto-generated logo component: Oval Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OvalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OvalOutlineLogo = React.forwardRef<SVGSVGElement, OvalOutlineLogoProps>(
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
      <path d="M6 12a6 9 0 1 0 12 0a6 9 0 1 0 -12 0" />
    </svg>
  )
);

OvalOutlineLogo.displayName = "OvalOutlineLogo";

export const OvalOutlineLogoMetadata = {
  id: "oval-outline",
  baseId: "oval-outline",
  variant: "default",
  name: "Oval Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OvalOutlineLogo;

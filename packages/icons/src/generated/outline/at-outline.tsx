/**
 * Auto-generated logo component: At Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AtOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AtOutlineLogo = React.forwardRef<SVGSVGElement, AtOutlineLogoProps>(
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
      <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
    </svg>
  )
);

AtOutlineLogo.displayName = "AtOutlineLogo";

export const AtOutlineLogoMetadata = {
  id: "at-outline",
  baseId: "at-outline",
  variant: "default",
  name: "At Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AtOutlineLogo;

/**
 * Auto-generated logo component: Old Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OldOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OldOutlineLogo = React.forwardRef<SVGSVGElement, OldOutlineLogoProps>(
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
      <path d="M11 21l-1 -4l-2 -3v-6" />
  <path d="M5 14l-1 -3l4 -3l3 2l3 .5" />
  <path d="M7 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M7 17l-2 4" />
  <path d="M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" />
    </svg>
  )
);

OldOutlineLogo.displayName = "OldOutlineLogo";

export const OldOutlineLogoMetadata = {
  id: "old-outline",
  baseId: "old-outline",
  variant: "default",
  name: "Old Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OldOutlineLogo;

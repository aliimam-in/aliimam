/**
 * Auto-generated logo component: Repeat Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RepeatOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RepeatOffOutlineLogo = React.forwardRef<SVGSVGElement, RepeatOffOutlineLogoProps>(
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
      <path d="M4 12v-3c0 -1.336 .873 -2.468 2.08 -2.856m3.92 -.144h10m-3 -3l3 3l-3 3" />
  <path d="M20 12v3a3 3 0 0 1 -.133 .886m-1.99 1.984a3 3 0 0 1 -.877 .13h-13m3 3l-3 -3l3 -3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

RepeatOffOutlineLogo.displayName = "RepeatOffOutlineLogo";

export const RepeatOffOutlineLogoMetadata = {
  id: "repeat-off-outline",
  baseId: "repeat-off-outline",
  variant: "default",
  name: "Repeat Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RepeatOffOutlineLogo;

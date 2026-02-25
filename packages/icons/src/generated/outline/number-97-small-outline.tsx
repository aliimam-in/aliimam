/**
 * Auto-generated logo component: Number 97 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number97SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number97SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number97SmallOutlineLogoProps>(
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
      <path d="M14 8h4l-2 8" />
  <path d="M6 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
    </svg>
  )
);

Number97SmallOutlineLogo.displayName = "Number97SmallOutlineLogo";

export const Number97SmallOutlineLogoMetadata = {
  id: "number-97-small-outline",
  baseId: "number-97-small-outline",
  variant: "default",
  name: "Number 97 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number97SmallOutlineLogo;

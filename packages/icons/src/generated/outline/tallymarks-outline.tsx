/**
 * Auto-generated logo component: Tallymarks Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TallymarksOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TallymarksOutlineLogo = React.forwardRef<SVGSVGElement, TallymarksOutlineLogoProps>(
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
      <path d="M6 5l0 14" />
  <path d="M10 5l0 14" />
  <path d="M14 5l0 14" />
  <path d="M18 5l0 14" />
  <path d="M3 17l18 -10" />
    </svg>
  )
);

TallymarksOutlineLogo.displayName = "TallymarksOutlineLogo";

export const TallymarksOutlineLogoMetadata = {
  id: "tallymarks-outline",
  baseId: "tallymarks-outline",
  variant: "default",
  name: "Tallymarks Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TallymarksOutlineLogo;

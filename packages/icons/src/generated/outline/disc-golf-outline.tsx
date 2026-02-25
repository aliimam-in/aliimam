/**
 * Auto-generated logo component: Disc Golf Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DiscGolfOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DiscGolfOutlineLogo = React.forwardRef<SVGSVGElement, DiscGolfOutlineLogoProps>(
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
      <path d="M5 5h14" />
  <path d="M6 5c.32 6.744 2.74 9.246 6 10" />
  <path d="M18 5c-.32 6.744 -2.74 9.246 -6 10" />
  <path d="M10 5c0 4.915 .552 7.082 2 10" />
  <path d="M14 5c0 4.915 -.552 7.082 -2 10" />
  <path d="M12 15v6" />
  <path d="M12 3v2" />
  <path d="M7 16c.64 .64 1.509 1 2.414 1h5.172c.905 0 1.774 -.36 2.414 -1" />
  <path d="M11 21h2" />
    </svg>
  )
);

DiscGolfOutlineLogo.displayName = "DiscGolfOutlineLogo";

export const DiscGolfOutlineLogoMetadata = {
  id: "disc-golf-outline",
  baseId: "disc-golf-outline",
  variant: "default",
  name: "Disc Golf Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DiscGolfOutlineLogo;

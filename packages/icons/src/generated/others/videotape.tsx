/**
 * Auto-generated logo component: Videotape (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VideotapeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VideotapeLogo = React.forwardRef<SVGSVGElement, VideotapeLogoProps>(
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
  <path d="M2 8h20" />
  <circle cx="8" cy="14" r="2" />
  <path d="M8 12h8" />
  <circle cx="16" cy="14" r="2" />
    </svg>
  )
);

VideotapeLogo.displayName = "VideotapeLogo";

export const VideotapeLogoMetadata = {
  id: "videotape",
  baseId: "videotape",
  variant: "default",
  name: "Videotape",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VideotapeLogo;

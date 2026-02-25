/**
 * Auto-generated logo component: Ghost (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GhostLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GhostLogo = React.forwardRef<SVGSVGElement, GhostLogoProps>(
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
      <path d="M9 10h.01" />
  <path d="M15 10h.01" />
  <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
    </svg>
  )
);

GhostLogo.displayName = "GhostLogo";

export const GhostLogoMetadata = {
  id: "ghost",
  baseId: "ghost",
  variant: "default",
  name: "Ghost",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GhostLogo;

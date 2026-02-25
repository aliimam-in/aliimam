/**
 * Auto-generated logo component: Database Heart Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DatabaseHeartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DatabaseHeartOutlineLogo = React.forwardRef<SVGSVGElement, DatabaseHeartOutlineLogoProps>(
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
      <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
  <path d="M4 6v6c0 1.453 2.755 2.665 6.414 2.941" />
  <path d="M20 11v-5" />
  <path d="M4 12v6c0 1.579 3.253 2.873 7.383 2.991" />
  <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296" />
    </svg>
  )
);

DatabaseHeartOutlineLogo.displayName = "DatabaseHeartOutlineLogo";

export const DatabaseHeartOutlineLogoMetadata = {
  id: "database-heart-outline",
  baseId: "database-heart-outline",
  variant: "default",
  name: "Database Heart Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DatabaseHeartOutlineLogo;

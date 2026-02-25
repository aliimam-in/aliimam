/**
 * Auto-generated logo component: Bring To Front (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BringToFrontLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BringToFrontLogo = React.forwardRef<SVGSVGElement, BringToFrontLogoProps>(
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
      <rect x="8" y="8" width="8" height="8" rx="2" />
  <path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
  <path d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" />
    </svg>
  )
);

BringToFrontLogo.displayName = "BringToFrontLogo";

export const BringToFrontLogoMetadata = {
  id: "bring-to-front",
  baseId: "bring-to-front",
  variant: "default",
  name: "Bring To Front",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BringToFrontLogo;

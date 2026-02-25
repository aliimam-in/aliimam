/**
 * Auto-generated logo component: Unlink Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UnlinkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UnlinkOutlineLogo = React.forwardRef<SVGSVGElement, UnlinkOutlineLogoProps>(
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
      <path d="M17 22v-2" />
  <path d="M9 15l6 -6" />
  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
  <path d="M20 17h2" />
  <path d="M2 7h2" />
  <path d="M7 2v2" />
    </svg>
  )
);

UnlinkOutlineLogo.displayName = "UnlinkOutlineLogo";

export const UnlinkOutlineLogoMetadata = {
  id: "unlink-outline",
  baseId: "unlink-outline",
  variant: "default",
  name: "Unlink Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UnlinkOutlineLogo;

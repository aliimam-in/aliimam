/**
 * Auto-generated logo component: Link 2 Off (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Link2OffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Link2OffLogo = React.forwardRef<SVGSVGElement, Link2OffLogoProps>(
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
      <path d="M9 17H7A5 5 0 0 1 7 7" />
  <path d="M15 7h2a5 5 0 0 1 4 8" />
  <line x1="8" x2="12" y1="12" y2="12" />
  <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  )
);

Link2OffLogo.displayName = "Link2OffLogo";

export const Link2OffLogoMetadata = {
  id: "link-2-off",
  baseId: "link-2-off",
  variant: "default",
  name: "Link 2 Off",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Link2OffLogo;

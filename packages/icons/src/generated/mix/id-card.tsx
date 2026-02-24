/**
 * Auto-generated logo component: Id Card (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IdCardLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IdCardLogo = React.forwardRef<SVGSVGElement, IdCardLogoProps>(
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
      <path d="M16 10h2" />
  <path d="M16 14h2" />
  <path d="M6.17 15a3 3 0 0 1 5.66 0" />
  <circle cx="9" cy="11" r="2" />
  <rect x="2" y="5" width="20" height="14" rx="2" />
    </svg>
  )
);

IdCardLogo.displayName = "IdCardLogo";

export const IdCardLogoMetadata = {
  id: "id-card",
  baseId: "id-card",
  variant: "default",
  name: "Id Card",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IdCardLogo;

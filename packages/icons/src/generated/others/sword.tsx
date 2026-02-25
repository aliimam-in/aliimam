/**
 * Auto-generated logo component: Sword (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwordLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwordLogo = React.forwardRef<SVGSVGElement, SwordLogoProps>(
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
      <path d="m11 19-6-6" />
  <path d="m5 21-2-2" />
  <path d="m8 16-4 4" />
  <path d="M9.5 17.5 21 6V3h-3L6.5 14.5" />
    </svg>
  )
);

SwordLogo.displayName = "SwordLogo";

export const SwordLogoMetadata = {
  id: "sword",
  baseId: "sword",
  variant: "default",
  name: "Sword",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwordLogo;

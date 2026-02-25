/**
 * Auto-generated logo component: Gift (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GiftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GiftLogo = React.forwardRef<SVGSVGElement, GiftLogoProps>(
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
      <path d="M12 7v14" />
  <path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
  <path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" />
  <rect x="3" y="7" width="18" height="4" rx="1" />
    </svg>
  )
);

GiftLogo.displayName = "GiftLogo";

export const GiftLogoMetadata = {
  id: "gift",
  baseId: "gift",
  variant: "default",
  name: "Gift",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GiftLogo;

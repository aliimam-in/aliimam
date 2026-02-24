/**
 * Auto-generated logo component: Gift (default)
 * Category: feather
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
      <polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
    </svg>
  )
);

GiftLogo.displayName = "GiftLogo";

export const GiftLogoMetadata = {
  id: "gift",
  baseId: "gift",
  variant: "default",
  name: "Gift",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GiftLogo;

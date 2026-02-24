/**
 * Auto-generated logo component: Plus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixPlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixPlusLogo = React.forwardRef<SVGSVGElement, MixPlusLogoProps>(
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
      <path d="M5 12h14" />
  <path d="M12 5v14" />
    </svg>
  )
);

MixPlusLogo.displayName = "MixPlusLogo";

export const MixPlusLogoMetadata = {
  id: "plus",
  baseId: "plus",
  variant: "default",
  name: "Plus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixPlusLogo;

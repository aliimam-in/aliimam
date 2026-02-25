/**
 * Auto-generated logo component: Frown (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FrownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FrownLogo = React.forwardRef<SVGSVGElement, FrownLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
  <line x1="9" x2="9.01" y1="9" y2="9" />
  <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
);

FrownLogo.displayName = "FrownLogo";

export const FrownLogoMetadata = {
  id: "frown",
  baseId: "frown",
  variant: "default",
  name: "Frown",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FrownLogo;

/**
 * Auto-generated logo component: Hash (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HashLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HashLogo = React.forwardRef<SVGSVGElement, HashLogoProps>(
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
      <line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>
    </svg>
  )
);

HashLogo.displayName = "HashLogo";

export const HashLogoMetadata = {
  id: "hash",
  baseId: "hash",
  variant: "default",
  name: "Hash",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HashLogo;

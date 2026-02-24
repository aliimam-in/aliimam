/**
 * Auto-generated logo component: Plus (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlusLogo = React.forwardRef<SVGSVGElement, PlusLogoProps>(
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
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  )
);

PlusLogo.displayName = "PlusLogo";

export const PlusLogoMetadata = {
  id: "plus",
  baseId: "plus",
  variant: "default",
  name: "Plus",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlusLogo;

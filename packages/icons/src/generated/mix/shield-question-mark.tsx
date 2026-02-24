/**
 * Auto-generated logo component: Shield Question Mark (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShieldQuestionMarkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShieldQuestionMarkLogo = React.forwardRef<SVGSVGElement, ShieldQuestionMarkLogoProps>(
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
  <path d="M12 17h.01" />
    </svg>
  )
);

ShieldQuestionMarkLogo.displayName = "ShieldQuestionMarkLogo";

export const ShieldQuestionMarkLogoMetadata = {
  id: "shield-question-mark",
  baseId: "shield-question-mark",
  variant: "default",
  name: "Shield Question Mark",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShieldQuestionMarkLogo;

/**
 * Auto-generated logo component: Case Lower (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CaseLowerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CaseLowerLogo = React.forwardRef<SVGSVGElement, CaseLowerLogoProps>(
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
      <path d="M10 9v7" />
  <path d="M14 6v10" />
  <circle cx="17.5" cy="12.5" r="3.5" />
  <circle cx="6.5" cy="12.5" r="3.5" />
    </svg>
  )
);

CaseLowerLogo.displayName = "CaseLowerLogo";

export const CaseLowerLogoMetadata = {
  id: "case-lower",
  baseId: "case-lower",
  variant: "default",
  name: "Case Lower",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CaseLowerLogo;

/**
 * Auto-generated logo component: Case Upper (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CaseUpperLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CaseUpperLogo = React.forwardRef<SVGSVGElement, CaseUpperLogoProps>(
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
      <path d="M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5" />
  <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
  <path d="M3.304 13h6.392" />
    </svg>
  )
);

CaseUpperLogo.displayName = "CaseUpperLogo";

export const CaseUpperLogoMetadata = {
  id: "case-upper",
  baseId: "case-upper",
  variant: "default",
  name: "Case Upper",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CaseUpperLogo;

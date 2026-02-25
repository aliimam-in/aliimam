/**
 * Auto-generated logo component: Regex Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RegexOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RegexOutlineLogo = React.forwardRef<SVGSVGElement, RegexOutlineLogoProps>(
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
      <path d="M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5" />
  <path d="M17 7.875l3 -1.687" />
  <path d="M17 7.875v3.375" />
  <path d="M17 7.875l-3 -1.687" />
  <path d="M17 7.875l3 1.688" />
  <path d="M17 4.5v3.375" />
  <path d="M17 7.875l-3 1.688" />
    </svg>
  )
);

RegexOutlineLogo.displayName = "RegexOutlineLogo";

export const RegexOutlineLogoMetadata = {
  id: "regex-outline",
  baseId: "regex-outline",
  variant: "default",
  name: "Regex Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RegexOutlineLogo;

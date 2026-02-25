/**
 * Auto-generated logo component: Regex (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RegexLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RegexLogo = React.forwardRef<SVGSVGElement, RegexLogoProps>(
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
      <path d="M17 3v10" />
  <path d="m12.67 5.5 8.66 5" />
  <path d="m12.67 10.5 8.66-5" />
  <path d="M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" />
    </svg>
  )
);

RegexLogo.displayName = "RegexLogo";

export const RegexLogoMetadata = {
  id: "regex",
  baseId: "regex",
  variant: "default",
  name: "Regex",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RegexLogo;

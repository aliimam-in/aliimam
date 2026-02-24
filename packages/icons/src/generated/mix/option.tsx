/**
 * Auto-generated logo component: Option (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OptionLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OptionLogo = React.forwardRef<SVGSVGElement, OptionLogoProps>(
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
      <path d="M3 3h6l6 18h6" />
  <path d="M14 3h7" />
    </svg>
  )
);

OptionLogo.displayName = "OptionLogo";

export const OptionLogoMetadata = {
  id: "option",
  baseId: "option",
  variant: "default",
  name: "Option",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OptionLogo;

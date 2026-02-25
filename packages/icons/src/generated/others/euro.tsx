/**
 * Auto-generated logo component: Euro (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EuroLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EuroLogo = React.forwardRef<SVGSVGElement, EuroLogoProps>(
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
      <path d="M4 10h12" />
  <path d="M4 14h9" />
  <path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
    </svg>
  )
);

EuroLogo.displayName = "EuroLogo";

export const EuroLogoMetadata = {
  id: "euro",
  baseId: "euro",
  variant: "default",
  name: "Euro",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EuroLogo;

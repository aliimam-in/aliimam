/**
 * Auto-generated logo component: Dot (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DotLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DotLogo = React.forwardRef<SVGSVGElement, DotLogoProps>(
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
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  )
);

DotLogo.displayName = "DotLogo";

export const DotLogoMetadata = {
  id: "dot",
  baseId: "dot",
  variant: "default",
  name: "Dot",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DotLogo;

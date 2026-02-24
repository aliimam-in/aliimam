/**
 * Auto-generated logo component: Type (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TypeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TypeLogo = React.forwardRef<SVGSVGElement, TypeLogoProps>(
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
      <polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>
    </svg>
  )
);

TypeLogo.displayName = "TypeLogo";

export const TypeLogoMetadata = {
  id: "type",
  baseId: "type",
  variant: "default",
  name: "Type",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TypeLogo;

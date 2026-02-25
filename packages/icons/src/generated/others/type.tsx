/**
 * Auto-generated logo component: Type (default)
 * Category: others
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
      <path d="M12 4v16" />
  <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
  <path d="M9 20h6" />
    </svg>
  )
);

TypeLogo.displayName = "TypeLogo";

export const TypeLogoMetadata = {
  id: "type",
  baseId: "type",
  variant: "default",
  name: "Type",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TypeLogo;

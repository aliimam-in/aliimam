/**
 * Auto-generated logo component: Undo Dot (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UndoDotLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UndoDotLogo = React.forwardRef<SVGSVGElement, UndoDotLogoProps>(
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
      <path d="M21 17a9 9 0 0 0-15-6.7L3 13" />
  <path d="M3 7v6h6" />
  <circle cx="12" cy="17" r="1" />
    </svg>
  )
);

UndoDotLogo.displayName = "UndoDotLogo";

export const UndoDotLogoMetadata = {
  id: "undo-dot",
  baseId: "undo-dot",
  variant: "default",
  name: "Undo Dot",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UndoDotLogo;

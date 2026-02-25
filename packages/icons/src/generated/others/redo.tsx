/**
 * Auto-generated logo component: Redo (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RedoLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RedoLogo = React.forwardRef<SVGSVGElement, RedoLogoProps>(
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
      <path d="M21 7v6h-6" />
  <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </svg>
  )
);

RedoLogo.displayName = "RedoLogo";

export const RedoLogoMetadata = {
  id: "redo",
  baseId: "redo",
  variant: "default",
  name: "Redo",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RedoLogo;

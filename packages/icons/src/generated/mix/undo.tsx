/**
 * Auto-generated logo component: Undo (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UndoLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UndoLogo = React.forwardRef<SVGSVGElement, UndoLogoProps>(
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
      <path d="M3 7v6h6" />
  <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
    </svg>
  )
);

UndoLogo.displayName = "UndoLogo";

export const UndoLogoMetadata = {
  id: "undo",
  baseId: "undo",
  variant: "default",
  name: "Undo",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UndoLogo;

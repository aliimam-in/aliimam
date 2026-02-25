/**
 * Auto-generated logo component: Cursor Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CursorOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CursorOffOutlineLogo = React.forwardRef<SVGSVGElement, CursorOffOutlineLogoProps>(
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
      <path d="M9 4a3 3 0 0 1 3 3v1m0 9a3 3 0 0 1 -3 3" />
  <path d="M15 4a3 3 0 0 0 -3 3v1m0 4v5a3 3 0 0 0 3 3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CursorOffOutlineLogo.displayName = "CursorOffOutlineLogo";

export const CursorOffOutlineLogoMetadata = {
  id: "cursor-off-outline",
  baseId: "cursor-off-outline",
  variant: "default",
  name: "Cursor Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CursorOffOutlineLogo;

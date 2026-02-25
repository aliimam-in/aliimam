/**
 * Auto-generated logo component: Cursor Text Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CursorTextOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CursorTextOutlineLogo = React.forwardRef<SVGSVGElement, CursorTextOutlineLogoProps>(
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
      <path d="M10 12h4" />
  <path d="M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3" />
  <path d="M15 4a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3" />
    </svg>
  )
);

CursorTextOutlineLogo.displayName = "CursorTextOutlineLogo";

export const CursorTextOutlineLogoMetadata = {
  id: "cursor-text-outline",
  baseId: "cursor-text-outline",
  variant: "default",
  name: "Cursor Text Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CursorTextOutlineLogo;

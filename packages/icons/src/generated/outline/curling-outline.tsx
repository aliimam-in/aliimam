/**
 * Auto-generated logo component: Curling Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurlingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurlingOutlineLogo = React.forwardRef<SVGSVGElement, CurlingOutlineLogoProps>(
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
      <path d="M4 13a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v2a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -2" />
  <path d="M4 14h16" />
  <path d="M8 5h6a2 2 0 0 1 2 2v2" />
    </svg>
  )
);

CurlingOutlineLogo.displayName = "CurlingOutlineLogo";

export const CurlingOutlineLogoMetadata = {
  id: "curling-outline",
  baseId: "curling-outline",
  variant: "default",
  name: "Curling Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurlingOutlineLogo;

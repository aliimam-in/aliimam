/**
 * Auto-generated logo component: Pointer Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PointerPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PointerPauseOutlineLogo = React.forwardRef<SVGSVGElement, PointerPauseOutlineLogoProps>(
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
      <path d="M15.72 13.163l-.942 -.941l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l.969 .969" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

PointerPauseOutlineLogo.displayName = "PointerPauseOutlineLogo";

export const PointerPauseOutlineLogoMetadata = {
  id: "pointer-pause-outline",
  baseId: "pointer-pause-outline",
  variant: "default",
  name: "Pointer Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PointerPauseOutlineLogo;

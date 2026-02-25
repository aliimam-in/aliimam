/**
 * Auto-generated logo component: Align Box Left Middle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignBoxLeftMiddleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignBoxLeftMiddleOutlineLogo = React.forwardRef<SVGSVGElement, AlignBoxLeftMiddleOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M9 15h-2" />
  <path d="M13 12h-6" />
  <path d="M11 9h-4" />
    </svg>
  )
);

AlignBoxLeftMiddleOutlineLogo.displayName = "AlignBoxLeftMiddleOutlineLogo";

export const AlignBoxLeftMiddleOutlineLogoMetadata = {
  id: "align-box-left-middle-outline",
  baseId: "align-box-left-middle-outline",
  variant: "default",
  name: "Align Box Left Middle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignBoxLeftMiddleOutlineLogo;

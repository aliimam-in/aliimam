/**
 * Auto-generated logo component: Highlight Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HighlightOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HighlightOffOutlineLogo = React.forwardRef<SVGSVGElement, HighlightOffOutlineLogoProps>(
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
      <path d="M9 9l-6 6v4h4l6 -6m2 -2l2.503 -2.503a2.828 2.828 0 1 0 -4 -4l-2.497 2.497" />
  <path d="M12.5 5.5l4 4" />
  <path d="M4.5 13.5l4 4" />
  <path d="M19 15h2v2m-2 2h-6l3 -3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HighlightOffOutlineLogo.displayName = "HighlightOffOutlineLogo";

export const HighlightOffOutlineLogoMetadata = {
  id: "highlight-off-outline",
  baseId: "highlight-off-outline",
  variant: "default",
  name: "Highlight Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HighlightOffOutlineLogo;

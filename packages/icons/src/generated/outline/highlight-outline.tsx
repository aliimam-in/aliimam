/**
 * Auto-generated logo component: Highlight Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HighlightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HighlightOutlineLogo = React.forwardRef<SVGSVGElement, HighlightOutlineLogoProps>(
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
      <path d="M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M12.5 5.5l4 4" />
  <path d="M4.5 13.5l4 4" />
  <path d="M21 15v4h-8l4 -4l4 0" />
    </svg>
  )
);

HighlightOutlineLogo.displayName = "HighlightOutlineLogo";

export const HighlightOutlineLogoMetadata = {
  id: "highlight-outline",
  baseId: "highlight-outline",
  variant: "default",
  name: "Highlight Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HighlightOutlineLogo;

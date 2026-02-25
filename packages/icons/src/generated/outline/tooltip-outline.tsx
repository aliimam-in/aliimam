/**
 * Auto-generated logo component: Tooltip Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TooltipOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TooltipOutlineLogo = React.forwardRef<SVGSVGElement, TooltipOutlineLogoProps>(
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
      <path d="M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M12 13l-1.707 -1.707a1 1 0 0 0 -.707 -.293h-2.586a2 2 0 0 1 -2 -2v-3a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2.586a1 1 0 0 0 -.707 .293l-1.707 1.707" />
    </svg>
  )
);

TooltipOutlineLogo.displayName = "TooltipOutlineLogo";

export const TooltipOutlineLogoMetadata = {
  id: "tooltip-outline",
  baseId: "tooltip-outline",
  variant: "default",
  name: "Tooltip Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TooltipOutlineLogo;

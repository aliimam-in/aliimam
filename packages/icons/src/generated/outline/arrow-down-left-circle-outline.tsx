/**
 * Auto-generated logo component: Arrow Down Left Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownLeftCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownLeftCircleOutlineLogo = React.forwardRef<SVGSVGElement, ArrowDownLeftCircleOutlineLogoProps>(
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
      <path d="M15.536 8.464l-9.536 9.536" />
  <path d="M6 14v4h4" />
  <path d="M15.586 8.414a2 2 0 1 0 2.828 -2.828a2 2 0 0 0 -2.828 2.828" />
    </svg>
  )
);

ArrowDownLeftCircleOutlineLogo.displayName = "ArrowDownLeftCircleOutlineLogo";

export const ArrowDownLeftCircleOutlineLogoMetadata = {
  id: "arrow-down-left-circle-outline",
  baseId: "arrow-down-left-circle-outline",
  variant: "default",
  name: "Arrow Down Left Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownLeftCircleOutlineLogo;

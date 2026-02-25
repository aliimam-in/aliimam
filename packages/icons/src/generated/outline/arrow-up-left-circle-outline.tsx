/**
 * Auto-generated logo component: Arrow Up Left Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpLeftCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpLeftCircleOutlineLogo = React.forwardRef<SVGSVGElement, ArrowUpLeftCircleOutlineLogoProps>(
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
      <path d="M15.536 15.536l-9.536 -9.536" />
  <path d="M10 6h-4v4" />
  <path d="M15.586 15.586a2 2 0 1 0 2.828 2.828a2 2 0 0 0 -2.828 -2.828" />
    </svg>
  )
);

ArrowUpLeftCircleOutlineLogo.displayName = "ArrowUpLeftCircleOutlineLogo";

export const ArrowUpLeftCircleOutlineLogoMetadata = {
  id: "arrow-up-left-circle-outline",
  baseId: "arrow-up-left-circle-outline",
  variant: "default",
  name: "Arrow Up Left Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpLeftCircleOutlineLogo;

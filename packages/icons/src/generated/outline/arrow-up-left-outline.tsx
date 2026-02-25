/**
 * Auto-generated logo component: Arrow Up Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowUpLeftOutlineLogoProps>(
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
      <path d="M7 7l10 10" />
  <path d="M16 7l-9 0l0 9" />
    </svg>
  )
);

ArrowUpLeftOutlineLogo.displayName = "ArrowUpLeftOutlineLogo";

export const ArrowUpLeftOutlineLogoMetadata = {
  id: "arrow-up-left-outline",
  baseId: "arrow-up-left-outline",
  variant: "default",
  name: "Arrow Up Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpLeftOutlineLogo;

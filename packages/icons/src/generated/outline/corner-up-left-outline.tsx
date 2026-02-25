/**
 * Auto-generated logo component: Corner Up Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerUpLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerUpLeftOutlineLogo = React.forwardRef<SVGSVGElement, CornerUpLeftOutlineLogoProps>(
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
      <path d="M18 18v-6a3 3 0 0 0 -3 -3h-10l4 -4m0 8l-4 -4" />
    </svg>
  )
);

CornerUpLeftOutlineLogo.displayName = "CornerUpLeftOutlineLogo";

export const CornerUpLeftOutlineLogoMetadata = {
  id: "corner-up-left-outline",
  baseId: "corner-up-left-outline",
  variant: "default",
  name: "Corner Up Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerUpLeftOutlineLogo;

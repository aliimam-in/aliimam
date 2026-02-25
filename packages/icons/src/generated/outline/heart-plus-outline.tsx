/**
 * Auto-generated logo component: Heart Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartPlusOutlineLogo = React.forwardRef<SVGSVGElement, HeartPlusOutlineLogoProps>(
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
      <path d="M12 20l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.96 6.053" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

HeartPlusOutlineLogo.displayName = "HeartPlusOutlineLogo";

export const HeartPlusOutlineLogoMetadata = {
  id: "heart-plus-outline",
  baseId: "heart-plus-outline",
  variant: "default",
  name: "Heart Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartPlusOutlineLogo;

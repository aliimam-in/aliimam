/**
 * Auto-generated logo component: Heart Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartExclamationOutlineLogo = React.forwardRef<SVGSVGElement, HeartExclamationOutlineLogoProps>(
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
      <path d="M15.03 17l-3.03 3l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.922 6.102" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

HeartExclamationOutlineLogo.displayName = "HeartExclamationOutlineLogo";

export const HeartExclamationOutlineLogoMetadata = {
  id: "heart-exclamation-outline",
  baseId: "heart-exclamation-outline",
  variant: "default",
  name: "Heart Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartExclamationOutlineLogo;

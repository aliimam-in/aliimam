/**
 * Auto-generated logo component: Phone Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhonePlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhonePlusOutlineLogo = React.forwardRef<SVGSVGElement, PhonePlusOutlineLogoProps>(
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
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
  <path d="M15 6h6m-3 -3v6" />
    </svg>
  )
);

PhonePlusOutlineLogo.displayName = "PhonePlusOutlineLogo";

export const PhonePlusOutlineLogoMetadata = {
  id: "phone-plus-outline",
  baseId: "phone-plus-outline",
  variant: "default",
  name: "Phone Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhonePlusOutlineLogo;

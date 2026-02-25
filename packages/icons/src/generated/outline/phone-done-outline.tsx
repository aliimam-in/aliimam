/**
 * Auto-generated logo component: Phone Done Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhoneDoneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhoneDoneOutlineLogo = React.forwardRef<SVGSVGElement, PhoneDoneOutlineLogoProps>(
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
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2" />
  <path d="M15 5l2 2l4 -4" />
    </svg>
  )
);

PhoneDoneOutlineLogo.displayName = "PhoneDoneOutlineLogo";

export const PhoneDoneOutlineLogoMetadata = {
  id: "phone-done-outline",
  baseId: "phone-done-outline",
  variant: "default",
  name: "Phone Done Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhoneDoneOutlineLogo;

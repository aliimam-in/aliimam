/**
 * Auto-generated logo component: House Plus (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HousePlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HousePlusLogo = React.forwardRef<SVGSVGElement, HousePlusLogoProps>(
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
      <path d="M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35" />
  <path d="M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" />
  <path d="M15 18h6" />
  <path d="M18 15v6" />
    </svg>
  )
);

HousePlusLogo.displayName = "HousePlusLogo";

export const HousePlusLogoMetadata = {
  id: "house-plus",
  baseId: "house-plus",
  variant: "default",
  name: "House Plus",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HousePlusLogo;

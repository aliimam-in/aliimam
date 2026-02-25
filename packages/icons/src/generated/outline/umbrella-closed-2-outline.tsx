/**
 * Auto-generated logo component: Umbrella Closed 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UmbrellaClosed2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UmbrellaClosed2OutlineLogo = React.forwardRef<SVGSVGElement, UmbrellaClosed2OutlineLogoProps>(
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
      <path d="M6.697 12.071l11.313 -7.071l-7.07 11.314l-4.243 -4.243" />
  <path d="M8.743 14.475l-2.121 2.121c-1.886 1.886 .943 4.715 2.828 2.829" />
    </svg>
  )
);

UmbrellaClosed2OutlineLogo.displayName = "UmbrellaClosed2OutlineLogo";

export const UmbrellaClosed2OutlineLogoMetadata = {
  id: "umbrella-closed-2-outline",
  baseId: "umbrella-closed-2-outline",
  variant: "default",
  name: "Umbrella Closed 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UmbrellaClosed2OutlineLogo;

/**
 * Auto-generated logo component: Flag Heart Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagHeartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagHeartOutlineLogo = React.forwardRef<SVGSVGElement, FlagHeartOutlineLogoProps>(
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
      <path d="M11.33 13.447a5.001 5.001 0 0 0 -6.33 .553v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v6" />
  <path d="M5 21v-7" />
  <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296" />
    </svg>
  )
);

FlagHeartOutlineLogo.displayName = "FlagHeartOutlineLogo";

export const FlagHeartOutlineLogoMetadata = {
  id: "flag-heart-outline",
  baseId: "flag-heart-outline",
  variant: "default",
  name: "Flag Heart Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagHeartOutlineLogo;

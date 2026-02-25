/**
 * Auto-generated logo component: Clock Heart Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockHeartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockHeartOutlineLogo = React.forwardRef<SVGSVGElement, ClockHeartOutlineLogoProps>(
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
      <path d="M20.956 11.107a9 9 0 1 0 -9.579 9.871" />
  <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296" />
  <path d="M12 7v5l.5 .5" />
    </svg>
  )
);

ClockHeartOutlineLogo.displayName = "ClockHeartOutlineLogo";

export const ClockHeartOutlineLogoMetadata = {
  id: "clock-heart-outline",
  baseId: "clock-heart-outline",
  variant: "default",
  name: "Clock Heart Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockHeartOutlineLogo;

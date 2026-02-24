/**
 * Auto-generated logo component: Heart Crack (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartCrackLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartCrackLogo = React.forwardRef<SVGSVGElement, HeartCrackLogoProps>(
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
      <path d="M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15" />
  <path d="M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z" />
    </svg>
  )
);

HeartCrackLogo.displayName = "HeartCrackLogo";

export const HeartCrackLogoMetadata = {
  id: "heart-crack",
  baseId: "heart-crack",
  variant: "default",
  name: "Heart Crack",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartCrackLogo;

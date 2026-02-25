/**
 * Auto-generated logo component: Whisk Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WhiskOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WhiskOutlineLogo = React.forwardRef<SVGSVGElement, WhiskOutlineLogoProps>(
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
      <path d="M21.015 3.035l-16.515 16.465" />
  <path d="M3.173 17.619a4.63 4.63 0 0 0 3.284 3.26a4.67 4.67 0 0 0 4.487 -1.194c1.85 -1.836 4.07 -10.65 4.07 -10.65s-8.88 2.296 -10.639 4.132a4.59 4.59 0 0 0 -1.202 4.452" />
    </svg>
  )
);

WhiskOutlineLogo.displayName = "WhiskOutlineLogo";

export const WhiskOutlineLogoMetadata = {
  id: "whisk-outline",
  baseId: "whisk-outline",
  variant: "default",
  name: "Whisk Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WhiskOutlineLogo;

/**
 * Auto-generated logo component: Forward (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ForwardLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ForwardLogo = React.forwardRef<SVGSVGElement, ForwardLogoProps>(
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
      <path d="m15 17 5-5-5-5" />
  <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
    </svg>
  )
);

ForwardLogo.displayName = "ForwardLogo";

export const ForwardLogoMetadata = {
  id: "forward",
  baseId: "forward",
  variant: "default",
  name: "Forward",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ForwardLogo;

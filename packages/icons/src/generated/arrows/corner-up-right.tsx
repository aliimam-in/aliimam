/**
 * Auto-generated logo component: Corner Up Right (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerUpRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerUpRightLogo = React.forwardRef<SVGSVGElement, CornerUpRightLogoProps>(
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
      <path d="m15 14 5-5-5-5" />
  <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
    </svg>
  )
);

CornerUpRightLogo.displayName = "CornerUpRightLogo";

export const CornerUpRightLogoMetadata = {
  id: "corner-up-right",
  baseId: "corner-up-right",
  variant: "default",
  name: "Corner Up Right",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerUpRightLogo;

/**
 * Auto-generated logo component: Venetian Mask (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VenetianMaskLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VenetianMaskLogo = React.forwardRef<SVGSVGElement, VenetianMaskLogoProps>(
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
      <path d="M18 11c-1.5 0-2.5.5-3 2" />
  <path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z" />
  <path d="M6 11c1.5 0 2.5.5 3 2" />
    </svg>
  )
);

VenetianMaskLogo.displayName = "VenetianMaskLogo";

export const VenetianMaskLogoMetadata = {
  id: "venetian-mask",
  baseId: "venetian-mask",
  variant: "default",
  name: "Venetian Mask",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VenetianMaskLogo;

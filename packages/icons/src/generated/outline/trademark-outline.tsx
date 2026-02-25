/**
 * Auto-generated logo component: Trademark Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrademarkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrademarkOutlineLogo = React.forwardRef<SVGSVGElement, TrademarkOutlineLogoProps>(
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
      <path d="M4.5 9h5m-2.5 0v6" />
  <path d="M13 15v-6l3 4l3 -4v6" />
    </svg>
  )
);

TrademarkOutlineLogo.displayName = "TrademarkOutlineLogo";

export const TrademarkOutlineLogoMetadata = {
  id: "trademark-outline",
  baseId: "trademark-outline",
  variant: "default",
  name: "Trademark Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrademarkOutlineLogo;

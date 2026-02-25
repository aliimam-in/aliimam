/**
 * Auto-generated logo component: Wash Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WashOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WashOffOutlineLogo = React.forwardRef<SVGSVGElement, WashOffOutlineLogoProps>(
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
      <path d="M3 6l1.721 10.329a2 2 0 0 0 1.973 1.671h10.612c.208 0 .41 -.032 .6 -.092m1.521 -2.472l1.573 -9.436" />
  <path d="M3.486 8.965c.168 .02 .34 .033 .514 .035c.79 .009 1.539 -.178 2 -.5c.461 -.32 1.21 -.507 2 -.5m4.92 .919c.428 -.083 .805 -.227 1.08 -.418c.461 -.322 1.21 -.508 2 -.5c.79 -.008 1.539 .178 2 .5c.461 .32 1.21 .508 2 .5c.17 0 .339 -.015 .503 -.035" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

WashOffOutlineLogo.displayName = "WashOffOutlineLogo";

export const WashOffOutlineLogoMetadata = {
  id: "wash-off-outline",
  baseId: "wash-off-outline",
  variant: "default",
  name: "Wash Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WashOffOutlineLogo;

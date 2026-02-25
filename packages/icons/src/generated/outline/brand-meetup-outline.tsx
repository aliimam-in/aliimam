/**
 * Auto-generated logo component: Brand Meetup Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandMeetupOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandMeetupOutlineLogo = React.forwardRef<SVGSVGElement, BrandMeetupOutlineLogoProps>(
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
      <path d="M5.455 10.82c.935 -2.163 3.045 -3.82 5.545 -3.82c2.104 0 2.844 1.915 2 4l-2 6" />
  <path d="M6.981 7l-3.981 9.914" />
  <path d="M13 11c.937 -2.16 3.071 -3.802 5.42 -3.972c2.104 0 3.128 1.706 2.284 3.792l-2.454 6.094c-.853 1.676 .75 2.586 2.75 2.086" />
    </svg>
  )
);

BrandMeetupOutlineLogo.displayName = "BrandMeetupOutlineLogo";

export const BrandMeetupOutlineLogoMetadata = {
  id: "brand-meetup-outline",
  baseId: "brand-meetup-outline",
  variant: "default",
  name: "Brand Meetup Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandMeetupOutlineLogo;

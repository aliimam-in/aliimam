/**
 * Auto-generated logo component: Framework7 Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Framework7IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Framework7Icon = React.forwardRef<SVGSVGElement, Framework7IconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M0,128 C0,97.2363864 10.8527678,69.0075725 28.9385285,46.9333334 L227.061471,46.9333334 L85.7353746,248.8579 C35.8106004,231.400232 0,183.882123 0,128 Z M237.562392,61.7812731 C249.26415,81.1009772 256,103.763867 256,128 C256,198.692447 198.692447,256 128,256 C119.530692,256 111.2535,255.177452 103.243954,253.607883 L237.562392,61.7812731 Z M45.8134841,29.8666666 C68.0490264,11.2247022 96.7136784,0 128,0 C159.286322,0 187.950974,11.2247022 210.186516,29.8666666 L45.8134841,29.8666666 L45.8134841,29.8666666 Z" fill="#EE350F"></path>
    </g>
    </svg>
  )
);

Framework7Icon.displayName = "Framework7Icon";

export const Framework7IconMetadata = {
  id: "framework7-icon",
  baseId: "framework7-icon",
  variant: "default",
  name: "Framework7 Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Framework7Icon;

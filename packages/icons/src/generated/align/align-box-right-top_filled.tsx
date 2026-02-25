/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignBoxRightTopFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignBoxRightTopFilled = React.forwardRef<SVGSVGElement, AlignBoxRightTopFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-.333 9h-2l-.117 .007a1 1 0 0 0 .117 1.993h2l.117 -.007a1 1 0 0 0 -.117 -1.993zm0 -3h-6l-.117 .007a1 1 0 0 0 .117 1.993h6l.117 -.007a1 1 0 0 0 -.117 -1.993zm0 -3h-4l-.117 .007a1 1 0 0 0 .117 1.993h4l.117 -.007a1 1 0 0 0 -.117 -1.993z" />
    </svg>
  )
);
AlignBoxRightTopFilled.displayName = "AlignBoxRightTopFilled";
export const AlignBoxRightTopFilledMetadata = { 
  id: "align-box-right-top_filled", 
  baseId: "align-box-right-top", 
  variant: "filled", 
  name: "Align Box Right Top", 
  category: "align", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignBoxRightTopFilled;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PentagonFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PentagonFilled = React.forwardRef<SVGSVGElement, PentagonFilledProps>(
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
      <path d="M10.205 2.6l-6.96 5.238a3 3 0 0 0 -1.045 3.338l2.896 8.765a3 3 0 0 0 2.85 2.059h8.12a3 3 0 0 0 2.841 -2.037l2.973 -8.764a3 3 0 0 0 -1.05 -3.37l-7.033 -5.237l-.091 -.061l-.018 -.01l-.106 -.07a3 3 0 0 0 -3.377 .148z" />
    </svg>
  )
);
PentagonFilled.displayName = "PentagonFilled";
export const PentagonFilledMetadata = { 
  id: "pentagon_filled", 
  baseId: "pentagon", 
  variant: "filled", 
  name: "Pentagon", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PentagonFilled;

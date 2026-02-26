/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareLetterWFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareLetterWFilled = React.forwardRef<SVGSVGElement, SquareLetterWFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-4.992 5.876l-.52 4.153l-.56 -1.4c-.319 -.799 -1.41 -.837 -1.803 -.114l-.053 .114l-.561 1.4l-.519 -4.153a1 1 0 0 0 -1 -.876l-.116 .008a1 1 0 0 0 -.868 1.116l1 8c.128 1.025 1.537 1.207 1.92 .247l1.072 -2.678l1.072 2.678c.383 .96 1.792 .778 1.92 -.247l1 -8a1 1 0 0 0 -1.984 -.248" />
    </svg>
  )
);
SquareLetterWFilled.displayName = "SquareLetterWFilled";
export const SquareLetterWFilledMetadata = { 
  id: "square-letter-w_filled", 
  baseId: "square-letter-w", 
  variant: "filled", 
  name: "Square Letter W", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareLetterWFilled;

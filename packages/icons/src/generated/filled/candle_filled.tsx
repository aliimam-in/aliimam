/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CandleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CandleFilled = React.forwardRef<SVGSVGElement, CandleFilledProps>(
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
      <path d="M14 9a2 2 0 0 1 2 2v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10a2 2 0 0 1 2 -2z" />
  <path d="M11.254 1.334a1 1 0 0 1 1.491 0l1.452 1.623a3 3 0 0 1 -4.196 4.28c-1.195 -1.07 -1.339 -2.889 -.297 -4.166z" />
    </svg>
  )
);
CandleFilled.displayName = "CandleFilled";
export const CandleFilledMetadata = { 
  id: "candle_filled", 
  baseId: "candle", 
  variant: "filled", 
  name: "Candle", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CandleFilled;

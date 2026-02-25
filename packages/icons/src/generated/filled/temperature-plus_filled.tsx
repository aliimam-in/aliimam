/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TemperaturePlusFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TemperaturePlusFilled = React.forwardRef<SVGSVGElement, TemperaturePlusFilledProps>(
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
      <path d="M10 2a3 3 0 0 1 3 3v7.965l.075 .056a5 5 0 0 1 1.81 5.01l-.055 .227a5 5 0 1 1 -7.905 -5.237l.075 -.056v-7.965a3 3 0 0 1 2.824 -2.995zm9 3a1 1 0 0 1 1 1v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1 -2 0v-2h-2a1 1 0 0 1 0 -2h2v-2a1 1 0 0 1 1 -1m-9 -1a1 1 0 0 0 -1 1v4h2v-4a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
TemperaturePlusFilled.displayName = "TemperaturePlusFilled";
export const TemperaturePlusFilledMetadata = { 
  id: "temperature-plus_filled", 
  baseId: "temperature-plus", 
  variant: "filled", 
  name: "Temperature Plus", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TemperaturePlusFilled;

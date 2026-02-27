/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WanchainWanFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WanchainWanFilled = React.forwardRef<SVGSVGElement, WanchainWanFilledProps>(
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
      <path d="M11.7499 9.42999L8.49992 15L7.86991 16.09L5.39991 20.31C5.21991 20.63 4.75992 20.64 4.55992 20.33L1.17991 15.28C1.06991 15.11 1.06991 14.89 1.17991 14.72L4.84993 9.22C4.93993 9.08 5.09991 9 5.26991 9H11.4999L11.7499 9.42999Z" fill="currentColor"/>
<path d="M22.8401 14.73L16.1401 3.25C16.0601 3.09 15.8901 3 15.7101 3H8.87012C8.48012 3 8.24012 3.42 8.44012 3.75L11.5001 9L11.7501 9.42999L14.5601 14.25C14.7601 14.58 14.5201 15 14.1301 15H8.50012L7.87012 16.09C8.05012 15.77 8.51011 15.76 8.71011 16.07L11.8501 20.78C11.9401 20.92 12.1001 21 12.2701 21H18.7301C18.9001 21 19.0601 20.92 19.1501 20.78L22.8301 15.26C22.9301 15.1 22.9401 14.9 22.8401 14.73Z" fill="currentColor"/>
    </svg>
  )
);
WanchainWanFilled.displayName = "WanchainWanFilled";
export const WanchainWanFilledMetadata = { 
  id: "wanchain-wan_filled", 
  baseId: "wanchain-wan", 
  variant: "filled", 
  name: "Wanchain Wan", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default WanchainWanFilled;

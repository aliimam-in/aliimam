/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SwipeUpFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SwipeUpFilled = React.forwardRef<SVGSVGElement, SwipeUpFilledProps>(
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
      <path d="M11.852 3.011l.058 -.007l.09 -.004l.075 .003l.126 .017l.111 .03l.111 .044l.098 .052l.104 .074l.082 .073l3 3a1 1 0 1 1 -1.414 1.414l-1.293 -1.292l.001 4.685a5.002 5.002 0 0 1 -1.001 9.9a5 5 0 0 1 -5 -5l.005 -.217a5 5 0 0 1 3.995 -4.683v-4.685l-1.293 1.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 0 -1.414l3 -3q .053 -.054 .112 -.097l.11 -.071l.114 -.054l.105 -.035z" />
    </svg>
  )
);
SwipeUpFilled.displayName = "SwipeUpFilled";
export const SwipeUpFilledMetadata = { 
  id: "swipe-up_filled", 
  baseId: "swipe-up", 
  variant: "filled", 
  name: "Swipe Up", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SwipeUpFilled;

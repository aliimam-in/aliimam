/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AirBalloonFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AirBalloonFilled = React.forwardRef<SVGSVGElement, AirBalloonFilledProps>(
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
      <path d="M13 18a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2z" />
  <path d="M12 1a7 7 0 0 1 7 7c0 4.185 -3.297 9 -7 9s-7 -4.815 -7 -9a7 7 0 0 1 7 -7" />
    </svg>
  )
);
AirBalloonFilled.displayName = "AirBalloonFilled";
export const AirBalloonFilledMetadata = { 
  id: "air-balloon_filled", 
  baseId: "air-balloon", 
  variant: "filled", 
  name: "Air Balloon", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AirBalloonFilled;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BadgeSdFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BadgeSdFilled = React.forwardRef<SVGSVGElement, BadgeSdFilledProps>(
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
      <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-4 4h-1a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3m-5.75 0h-1.25a2 2 0 0 0 -2 2v1a2 2 0 0 0 2 2h1v1h-1.033l-.025 -.087a1 1 0 0 0 -1.942 .337c0 .966 .784 1.75 1.75 1.75h1.25a2 2 0 0 0 2 -2v-1a2 2 0 0 0 -2 -2h-1v-1h1.032l.026 .087a1 1 0 0 0 1.942 -.337a1.75 1.75 0 0 0 -1.75 -1.75m5.75 2a1 1 0 0 1 1 1v2a1 1 0 0 1 -.883 .993l-.117 .007z" />
    </svg>
  )
);
BadgeSdFilled.displayName = "BadgeSdFilled";
export const BadgeSdFilledMetadata = { 
  id: "badge-sd_filled", 
  baseId: "badge-sd", 
  variant: "filled", 
  name: "Badge Sd", 
  category: "badge", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BadgeSdFilled;

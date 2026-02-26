/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HeartFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HeartFilled = React.forwardRef<SVGSVGElement, HeartFilledProps>(
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
      <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
    </svg>
  )
);
HeartFilled.displayName = "HeartFilled";
export const HeartFilledMetadata = { 
  id: "heart_filled", 
  baseId: "heart", 
  variant: "filled", 
  name: "Heart", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HeartFilled;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WomanFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WomanFilled = React.forwardRef<SVGSVGElement, WomanFilledProps>(
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
      <path d="M14 8c1.91 0 3.79 .752 5.625 2.219a1 1 0 1 1 -1.25 1.562c-1.019 -.815 -2.016 -1.345 -2.997 -1.6l1.584 5.544a1 1 0 0 1 -.962 1.275h-1v4a1 1 0 0 1 -2 0v-4h-2v4a1 1 0 0 1 -2 0v-4h-1a1 1 0 0 1 -.962 -1.275l1.584 -5.545c-.98 .256 -1.978 .786 -2.997 1.601a1 1 0 1 1 -1.25 -1.562c1.733 -1.386 3.506 -2.133 5.307 -2.212l.335 -.007z" />
  <path d="M12 1a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" />
    </svg>
  )
);
WomanFilled.displayName = "WomanFilled";
export const WomanFilledMetadata = { 
  id: "woman_filled", 
  baseId: "woman", 
  variant: "filled", 
  name: "Woman", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default WomanFilled;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleArrowOutUpLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleArrowOutUpLeft = React.forwardRef<SVGSVGElement, CircleArrowOutUpLeftProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M2 8V2h6" />
  <path d="m2 2 10 10" />
  <path d="M12 2A10 10 0 1 1 2 12" />
    </svg>
  )
);
CircleArrowOutUpLeft.displayName = "CircleArrowOutUpLeft";
export const CircleArrowOutUpLeftMetadata = { 
  id: "circle-arrow-out-up-left", 
  baseId: "circle-arrow-out-up-left", 
  variant: "default", 
  name: "Circle Arrow Out Up Left", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleArrowOutUpLeft;

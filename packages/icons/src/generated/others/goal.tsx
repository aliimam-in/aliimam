/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GoalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Goal = React.forwardRef<SVGSVGElement, GoalProps>(
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
      <path d="M12 13V2l8 4-8 4" />
  <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
  <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
    </svg>
  )
);
Goal.displayName = "Goal";
export const GoalMetadata = { 
  id: "goal", 
  baseId: "goal", 
  variant: "default", 
  name: "Goal", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Goal;

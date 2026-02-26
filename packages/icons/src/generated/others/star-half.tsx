/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface StarHalfProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const StarHalf = React.forwardRef<SVGSVGElement, StarHalfProps>(
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
      <path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" />
    </svg>
  )
);
StarHalf.displayName = "StarHalf";
export const StarHalfMetadata = { 
  id: "star-half", 
  baseId: "star-half", 
  variant: "default", 
  name: "Star Half", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default StarHalf;

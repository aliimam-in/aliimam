/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MouseLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MouseLeft = React.forwardRef<SVGSVGElement, MouseLeftProps>(
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
      <path d="M12 7.318V10" />
  <path d="M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7" />
  <circle cx="7" cy="4" r="2" />
    </svg>
  )
);
MouseLeft.displayName = "MouseLeft";
export const MouseLeftMetadata = { 
  id: "mouse-left", 
  baseId: "mouse-left", 
  variant: "default", 
  name: "Mouse Left", 
  category: "cursor", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MouseLeft;

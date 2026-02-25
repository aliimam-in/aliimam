/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MouseOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MouseOff = React.forwardRef<SVGSVGElement, MouseOffProps>(
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
      <path d="M12 6v.343" />
  <path d="M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" />
  <path d="M19 13.343V9A7 7 0 0 0 8.56 2.902" />
  <path d="M22 22 2 2" />
    </svg>
  )
);
MouseOff.displayName = "MouseOff";
export const MouseOffMetadata = { 
  id: "mouse-off", 
  baseId: "mouse-off", 
  variant: "default", 
  name: "Mouse Off", 
  category: "cursor", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MouseOff;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MouseFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MouseFilled = React.forwardRef<SVGSVGElement, MouseFilledProps>(
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
      <path d="M14 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-4a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-2 4a1 1 0 0 0 -1 1v4l.007 .117a1 1 0 0 0 1.993 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
    </svg>
  )
);
MouseFilled.displayName = "MouseFilled";
export const MouseFilledMetadata = { 
  id: "mouse_filled", 
  baseId: "mouse", 
  variant: "filled", 
  name: "Mouse", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MouseFilled;

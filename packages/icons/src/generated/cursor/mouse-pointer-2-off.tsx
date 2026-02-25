/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MousePointer2OffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MousePointer2Off = React.forwardRef<SVGSVGElement, MousePointer2OffProps>(
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
      <path d="m15.55 8.45 5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551" />
  <path d="M22 2 2 22" />
  <path d="m6.816 11.528-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779" />
    </svg>
  )
);
MousePointer2Off.displayName = "MousePointer2Off";
export const MousePointer2OffMetadata = { 
  id: "mouse-pointer-2-off", 
  baseId: "mouse-pointer-2-off", 
  variant: "default", 
  name: "Mouse Pointer 2 Off", 
  category: "cursor", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MousePointer2Off;

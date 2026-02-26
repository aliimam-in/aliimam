/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MousePointerBanProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MousePointerBan = React.forwardRef<SVGSVGElement, MousePointerBanProps>(
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
      <path d="M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z" />
  <circle cx="16" cy="16" r="6" />
  <path d="m11.8 11.8 8.4 8.4" />
    </svg>
  )
);
MousePointerBan.displayName = "MousePointerBan";
export const MousePointerBanMetadata = { 
  id: "mouse-pointer-ban", 
  baseId: "mouse-pointer-ban", 
  variant: "default", 
  name: "Mouse Pointer Ban", 
  category: "cursor", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MousePointerBan;

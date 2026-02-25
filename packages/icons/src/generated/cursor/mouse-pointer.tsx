/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MousePointerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MousePointer = React.forwardRef<SVGSVGElement, MousePointerProps>(
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
      <path d="M12.586 12.586 19 19" />
  <path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z" />
    </svg>
  )
);
MousePointer.displayName = "MousePointer";
export const MousePointerMetadata = { 
  id: "mouse-pointer", 
  baseId: "mouse-pointer", 
  variant: "default", 
  name: "Mouse Pointer", 
  category: "cursor", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MousePointer;

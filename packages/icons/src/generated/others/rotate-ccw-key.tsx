/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RotateCcwKeyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RotateCcwKey = React.forwardRef<SVGSVGElement, RotateCcwKeyProps>(
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
      <path d="M12 7v6" />
  <path d="M12 9h2" />
  <path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
  <circle cx="12" cy="15" r="2" />
    </svg>
  )
);
RotateCcwKey.displayName = "RotateCcwKey";
export const RotateCcwKeyMetadata = { 
  id: "rotate-ccw-key", 
  baseId: "rotate-ccw-key", 
  variant: "default", 
  name: "Rotate Ccw Key", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RotateCcwKey;

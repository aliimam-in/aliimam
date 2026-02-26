/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Settings2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Settings2 = React.forwardRef<SVGSVGElement, Settings2Props>(
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
      <path d="M14 17H5" />
  <path d="M19 7h-9" />
  <circle cx="17" cy="17" r="3" />
  <circle cx="7" cy="7" r="3" />
    </svg>
  )
);
Settings2.displayName = "Settings2";
export const Settings2Metadata = { 
  id: "settings-2", 
  baseId: "settings-2", 
  variant: "default", 
  name: "Settings 2", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Settings2;

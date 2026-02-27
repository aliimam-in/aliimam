/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SettingRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SettingRounded = React.forwardRef<SVGSVGElement, SettingRoundedProps>(
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
      <path d="M3 9.10998V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.10998C21 6.99998 21 6.99999 19 5.64999L13.5 2.46999C12.68 1.98999 11.33 1.98999 10.5 2.46999L5 5.64999C3 6.99999 3 6.99998 3 9.10998Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SettingRounded.displayName = "SettingRounded";
export const SettingRoundedMetadata = { 
  id: "setting_rounded", 
  baseId: "setting", 
  variant: "rounded", 
  name: "Setting", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SettingRounded;

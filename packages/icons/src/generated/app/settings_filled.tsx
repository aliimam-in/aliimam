/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SettingsFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SettingsFilled = React.forwardRef<SVGSVGElement, SettingsFilledProps>(
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
      <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" fill="currentColor"/>
<path d="M10 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H10C10.41 11.25 10.75 11.59 10.75 12C10.75 12.41 10.41 12.75 10 12.75Z" fill="currentColor"/>
<path d="M22 12.75H14C13.59 12.75 13.25 12.41 13.25 12C13.25 11.59 13.59 11.25 14 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z" fill="currentColor"/>
    </svg>
  )
);
SettingsFilled.displayName = "SettingsFilled";
export const SettingsFilledMetadata = { 
  id: "settings_filled", 
  baseId: "settings", 
  variant: "filled", 
  name: "Settings", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SettingsFilled;

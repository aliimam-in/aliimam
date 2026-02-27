/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LevelRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LevelRounded = React.forwardRef<SVGSVGElement, LevelRoundedProps>(
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
      <path d="M2.20001 14.02C3.13001 18.58 7.16002 22 12 22C16.82 22 20.84 18.59 21.79 14.05" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.81 10.06C20.91 5.46 16.86 2 12 2C7.17002 2 3.14001 5.43001 2.20001 9.98001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
LevelRounded.displayName = "LevelRounded";
export const LevelRoundedMetadata = { 
  id: "level_rounded", 
  baseId: "level", 
  variant: "rounded", 
  name: "Level", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LevelRounded;

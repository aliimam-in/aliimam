/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClubProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Club = React.forwardRef<SVGSVGElement, ClubProps>(
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
      <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" />
  <path d="M12 17.66L12 22" />
    </svg>
  )
);
Club.displayName = "Club";
export const ClubMetadata = { 
  id: "club", 
  baseId: "club", 
  variant: "default", 
  name: "Club", 
  category: "nature", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Club;

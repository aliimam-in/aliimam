/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface IdCardLanyardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const IdCardLanyard = React.forwardRef<SVGSVGElement, IdCardLanyardProps>(
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
      <path d="M13.5 8h-3" />
  <path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" />
  <path d="M16.899 22A5 5 0 0 0 7.1 22" />
  <path d="m9 2 3 6" />
  <circle cx="12" cy="15" r="3" />
    </svg>
  )
);
IdCardLanyard.displayName = "IdCardLanyard";
export const IdCardLanyardMetadata = { 
  id: "id-card-lanyard", 
  baseId: "id-card-lanyard", 
  variant: "default", 
  name: "Id Card Lanyard", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default IdCardLanyard;

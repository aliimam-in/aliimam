/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CampfireFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CampfireFilled = React.forwardRef<SVGSVGElement, CampfireFilledProps>(
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
      <path d="M19.757 16.03a1 1 0 0 1 .597 1.905l-.111 .035l-16 4a1 1 0 0 1 -.597 -1.905l.111 -.035l16 -4z" />
  <path d="M3.03 16.757a1 1 0 0 1 1.098 -.749l.115 .022l16 4a1 1 0 0 1 -.37 1.962l-.116 -.022l-16 -4a1 1 0 0 1 -.727 -1.213z" />
  <path d="M13.553 2.106c-4.174 2.086 -6.553 5.358 -6.553 8.894a5 5 0 0 0 10 0c0 -1.047 -.188 -1.808 -.606 -2.705l-.169 -.345l-.33 -.647c-.621 -1.24 -.895 -2.338 -.895 -4.303a1 1 0 0 0 -1.447 -.894z" />
    </svg>
  )
);
CampfireFilled.displayName = "CampfireFilled";
export const CampfireFilledMetadata = { 
  id: "campfire_filled", 
  baseId: "campfire", 
  variant: "filled", 
  name: "Campfire", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CampfireFilled;

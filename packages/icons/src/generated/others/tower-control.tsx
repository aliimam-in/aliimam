/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TowerControlProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TowerControl = React.forwardRef<SVGSVGElement, TowerControlProps>(
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
      <path d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" />
  <path d="M8 13v9" />
  <path d="M16 22v-9" />
  <path d="m9 6 1 7" />
  <path d="m15 6-1 7" />
  <path d="M12 6V2" />
  <path d="M13 2h-2" />
    </svg>
  )
);
TowerControl.displayName = "TowerControl";
export const TowerControlMetadata = { 
  id: "tower-control", 
  baseId: "tower-control", 
  variant: "default", 
  name: "Tower Control", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TowerControl;

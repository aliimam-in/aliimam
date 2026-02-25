/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BuildingBroadcastTowerFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BuildingBroadcastTowerFilled = React.forwardRef<SVGSVGElement, BuildingBroadcastTowerFilledProps>(
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
      <path d="M12 10a2 2 0 0 1 1.497 3.327l2.452 7.357a1 1 0 1 1 -1.898 .632l-.44 -1.316h-3.224l-.438 1.317a1 1 0 0 1 -1.152 .663l-.113 -.03a1 1 0 0 1 -.633 -1.265l2.452 -7.357a2 2 0 0 1 -.503 -1.328l.005 -.15a2 2 0 0 1 1.995 -1.85" />
  <path d="M18.093 4.078a10 10 0 0 1 3.137 11.776a1 1 0 0 1 -1.846 -.77a8 8 0 1 0 -14.769 0a1 1 0 0 1 -1.846 .77a10 10 0 0 1 15.324 -11.776" />
  <path d="M15.657 7.243a6 6 0 0 1 1.882 7.066a1 1 0 1 1 -1.846 -.77a4 4 0 1 0 -7.384 0a1 1 0 1 1 -1.846 .77a6 6 0 0 1 9.194 -7.066" />
    </svg>
  )
);
BuildingBroadcastTowerFilled.displayName = "BuildingBroadcastTowerFilled";
export const BuildingBroadcastTowerFilledMetadata = { 
  id: "building-broadcast-tower_filled", 
  baseId: "building-broadcast-tower", 
  variant: "filled", 
  name: "Building Broadcast Tower", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BuildingBroadcastTowerFilled;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HouseHeartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HouseHeart = React.forwardRef<SVGSVGElement, HouseHeartProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  )
);
HouseHeart.displayName = "HouseHeart";
export const HouseHeartMetadata = { id: "house-heart", baseId: "house-heart", variant: "default", name: "House Heart", category: "building", tags: [], viewBox: "0 0 24 24" } as const;
export default HouseHeart;

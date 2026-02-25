/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MountainProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mountain = React.forwardRef<SVGSVGElement, MountainProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
);
Mountain.displayName = "Mountain";
export const MountainMetadata = { id: "mountain", baseId: "mountain", variant: "default", name: "Mountain", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Mountain;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DropletFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DropletFilled = React.forwardRef<SVGSVGElement, DropletFilledProps>(
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
      <path d="M10.708 2.372a2.382 2.382 0 0 0 -.71 .686l-4.892 7.26c-1.981 3.314 -1.22 7.466 1.767 9.882c2.969 2.402 7.286 2.402 10.254 0c2.987 -2.416 3.748 -6.569 1.795 -9.836l-4.919 -7.306c-.722 -1.075 -2.192 -1.376 -3.295 -.686z" />
    </svg>
  )
);
DropletFilled.displayName = "DropletFilled";
export const DropletFilledMetadata = { 
  id: "droplet_filled", 
  baseId: "droplet", 
  variant: "filled", 
  name: "Droplet", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DropletFilled;

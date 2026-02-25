/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FishingHookProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FishingHook = React.forwardRef<SVGSVGElement, FishingHookProps>(
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
      <path d="m17.586 11.414-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10" />
  <path d="M20.414 8.586 22 7" />
  <circle cx="19" cy="10" r="2" />
    </svg>
  )
);
FishingHook.displayName = "FishingHook";
export const FishingHookMetadata = { 
  id: "fishing-hook", 
  baseId: "fishing-hook", 
  variant: "default", 
  name: "Fishing Hook", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FishingHook;

/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WindmillFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WindmillFilled = React.forwardRef<SVGSVGElement, WindmillFilledProps>(
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
      <path d="M12 2c3.292 0 6 2.435 6 5.5c0 1.337 -.515 2.554 -1.369 3.5h4.369a1 1 0 0 1 1 1c0 3.292 -2.435 6 -5.5 6c-1.336 0 -2.553 -.515 -3.5 -1.368v4.368a1 1 0 0 1 -1 1c-3.292 0 -6 -2.435 -6 -5.5c0 -1.336 .515 -2.553 1.368 -3.5h-4.368a1 1 0 0 1 -1 -1c0 -3.292 2.435 -6 5.5 -6c1.337 0 2.554 .515 3.5 1.369v-4.369a1 1 0 0 1 1 -1z" />
    </svg>
  )
);
WindmillFilled.displayName = "WindmillFilled";
export const WindmillFilledMetadata = { 
  id: "windmill_filled", 
  baseId: "windmill", 
  variant: "filled", 
  name: "Windmill", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default WindmillFilled;

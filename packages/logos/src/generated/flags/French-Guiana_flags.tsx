/**
 * Auto-generated logo component: French Guiana (flags)
 * Category: flags
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FrenchGuianaFlagsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const FrenchGuianaFlags = React.forwardRef<SVGSVGElement, FrenchGuianaFlagsProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M2.316 5.05298C1.513 5.78498 1 6.82898 1 7.99998V24C1 26.209 2.791 28 5 28H27C28.037 28 28.974 27.595 29.684 26.947L2.316 5.05298Z" fill="#F7DF4B"/>
<path d="M29.684 26.947C30.487 26.215 31 25.171 31 24V8C31 5.791 29.209 4 27 4H4.99998C3.96298 4 3.02598 4.405 2.31598 5.053L29.684 26.947Z" fill="#3C883A"/>
<path d="M17.673 16.4569L20.381 14.4899H17.034L16 11.3069L14.966 14.4899H11.619L14.327 16.4569L13.292 19.6399L16 17.6729L18.708 19.6399L17.673 16.4569Z" fill="#C92D25"/>
    </svg>
  )
);

FrenchGuianaFlags.displayName = "FrenchGuianaFlags";

export const FrenchGuianaFlagsMetadata = {
  id: "French-Guiana_flags",
  baseId: "French-Guiana",
  variant: "flags",
  name: "French Guiana",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default FrenchGuianaFlags;

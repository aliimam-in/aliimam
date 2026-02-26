/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CapsuleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CapsuleFilled = React.forwardRef<SVGSVGElement, CapsuleFilledProps>(
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
      <path d="M12 2l-.243 .004a7.004 7.004 0 0 0 -6.757 6.996v6a7 7 0 0 0 7 7l.243 -.004a7.004 7.004 0 0 0 6.757 -6.996v-6a7 7 0 0 0 -7 -7z" />
    </svg>
  )
);
CapsuleFilled.displayName = "CapsuleFilled";
export const CapsuleFilledMetadata = { 
  id: "capsule_filled", 
  baseId: "capsule", 
  variant: "filled", 
  name: "Capsule", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CapsuleFilled;

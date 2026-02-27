/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SagittariusRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SagittariusRounded = React.forwardRef<SVGSVGElement, SagittariusRoundedProps>(
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
      <path d="M12 3H21V12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 3L3 21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.6001 6.59998L17.4001 17.4" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SagittariusRounded.displayName = "SagittariusRounded";
export const SagittariusRoundedMetadata = { 
  id: "sagittarius_rounded", 
  baseId: "sagittarius", 
  variant: "rounded", 
  name: "Sagittarius", 
  category: "gender", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SagittariusRounded;

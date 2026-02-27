/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HospitalRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HospitalRounded = React.forwardRef<SVGSVGElement, HospitalRoundedProps>(
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
      <path d="M2 22H22" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.06 15H9.92998C9.41998 15 8.98999 15.42 8.98999 15.94V22H14.99V15.94C15 15.42 14.58 15 14.06 15Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6V11" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 8.5H14.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
HospitalRounded.displayName = "HospitalRounded";
export const HospitalRoundedMetadata = { 
  id: "hospital_rounded", 
  baseId: "hospital", 
  variant: "rounded", 
  name: "Hospital", 
  category: "building", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HospitalRounded;

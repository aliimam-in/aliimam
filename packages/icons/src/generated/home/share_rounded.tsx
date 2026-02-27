/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ShareRounded = React.forwardRef<SVGSVGElement, ShareRoundedProps>(
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
      <path d="M16.96 6.17C18.96 7.56 20.34 9.77 20.62 12.32" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.48999 12.37C3.74999 9.83 5.10999 7.62 7.08999 6.22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.19 20.94C9.35 21.53 10.67 21.86 12.06 21.86C13.4 21.86 14.66 21.56 15.79 21.01" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.06 7.7C13.5954 7.7 14.84 6.45535 14.84 4.92C14.84 3.38465 13.5954 2.14 12.06 2.14C10.5246 2.14 9.28 3.38465 9.28 4.92C9.28 6.45535 10.5246 7.7 12.06 7.7Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.82999 19.92C6.36534 19.92 7.60999 18.6754 7.60999 17.14C7.60999 15.6046 6.36534 14.36 4.82999 14.36C3.29464 14.36 2.04999 15.6046 2.04999 17.14C2.04999 18.6754 3.29464 19.92 4.82999 19.92Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.17 19.92C20.7054 19.92 21.95 18.6754 21.95 17.14C21.95 15.6046 20.7054 14.36 19.17 14.36C17.6347 14.36 16.39 15.6046 16.39 17.14C16.39 18.6754 17.6347 19.92 19.17 19.92Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ShareRounded.displayName = "ShareRounded";
export const ShareRoundedMetadata = { 
  id: "share_rounded", 
  baseId: "share", 
  variant: "rounded", 
  name: "Share", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ShareRounded;

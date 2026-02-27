/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HashtagFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HashtagFilled = React.forwardRef<SVGSVGElement, HashtagFilledProps>(
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
      <path d="M8.05005 10.14V11.3H11.31V8.05005H10.15C8.99005 8.05005 8.05005 8.99005 8.05005 10.14Z" fill="currentColor"/>
<path d="M8.05005 13.86C8.05005 15.01 8.99005 15.95 10.14 15.95H11.3V12.7H8.05005V13.86Z" fill="currentColor"/>
<path d="M12.7 15.95H13.86C15.01 15.95 15.95 15.01 15.95 13.86V12.7H12.7V15.95Z" fill="currentColor"/>
<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.35 13.86C17.35 15.78 15.78 17.35 13.86 17.35H10.14C8.22 17.35 6.65 15.79 6.65 13.86V10.14C6.65 8.22 8.22 6.65 10.14 6.65H13.86C15.78 6.65 17.35 8.21 17.35 10.14V13.86Z" fill="currentColor"/>
<path d="M13.86 8.05005H12.7V11.31H15.96V10.15C15.95 8.99005 15.01 8.05005 13.86 8.05005Z" fill="currentColor"/>
    </svg>
  )
);
HashtagFilled.displayName = "HashtagFilled";
export const HashtagFilledMetadata = { 
  id: "hashtag_filled", 
  baseId: "hashtag", 
  variant: "filled", 
  name: "Hashtag", 
  category: "business", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HashtagFilled;

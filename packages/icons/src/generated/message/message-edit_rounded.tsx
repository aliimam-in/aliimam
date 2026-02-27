/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageEditRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageEditRounded = React.forwardRef<SVGSVGElement, MessageEditRoundedProps>(
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
      <path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.91 7.84003L7.72004 13.03C7.52004 13.23 7.33004 13.62 7.29004 13.9L7.01004 15.88C6.91004 16.6 7.41004 17.1 8.13004 17L10.11 16.72C10.39 16.68 10.78 16.49 10.98 16.29L16.17 11.1C17.06 10.21 17.49 9.17003 16.17 7.85003C14.85 6.52003 13.81 6.94003 12.91 7.84003Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.17 8.58002C12.61 10.15 13.84 11.39 15.42 11.83" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MessageEditRounded.displayName = "MessageEditRounded";
export const MessageEditRoundedMetadata = { 
  id: "message-edit_rounded", 
  baseId: "message-edit", 
  variant: "rounded", 
  name: "Message Edit", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MessageEditRounded;

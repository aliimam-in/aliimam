/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MessageQuestionRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MessageQuestionRounded = React.forwardRef<SVGSVGElement, MessageQuestionRoundedProps>(
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
      <path d="M17 18.43H13L8.54999 21.39C7.88999 21.83 7 21.36 7 20.56V18.43C4 18.43 2 16.43 2 13.43V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993V13.43C22 16.43 20 18.43 17 18.43Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11.36V11.15C12 10.47 12.42 10.11 12.84 9.82001C13.25 9.54001 13.66 9.18002 13.66 8.52002C13.66 7.60002 12.92 6.85999 12 6.85999C11.08 6.85999 10.34 7.60002 10.34 8.52002"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9955 13.75H12.0045"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MessageQuestionRounded.displayName = "MessageQuestionRounded";
export const MessageQuestionRoundedMetadata = { 
  id: "message-question_rounded", 
  baseId: "message-question", 
  variant: "rounded", 
  name: "Message Question", 
  category: "support", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MessageQuestionRounded;

/**
 * Auto-generated logo component: Message 2 Question Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Message2QuestionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Message2QuestionOutlineLogo = React.forwardRef<SVGSVGElement, Message2QuestionOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M8 9h8" />
  <path d="M8 13h6" />
  <path d="M14.5 18.5l-2.5 2.5l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
  <path d="M19 22v.01" />
  <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </svg>
  )
);

Message2QuestionOutlineLogo.displayName = "Message2QuestionOutlineLogo";

export const Message2QuestionOutlineLogoMetadata = {
  id: "message-2-question-outline",
  baseId: "message-2-question-outline",
  variant: "default",
  name: "Message 2 Question Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Message2QuestionOutlineLogo;

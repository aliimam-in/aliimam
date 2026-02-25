/**
 * Auto-generated logo component: Message Report Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageReportOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageReportOutlineLogo = React.forwardRef<SVGSVGElement, MessageReportOutlineLogoProps>(
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
      <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" />
  <path d="M12 8v3" />
  <path d="M12 14v.01" />
    </svg>
  )
);

MessageReportOutlineLogo.displayName = "MessageReportOutlineLogo";

export const MessageReportOutlineLogoMetadata = {
  id: "message-report-outline",
  baseId: "message-report-outline",
  variant: "default",
  name: "Message Report Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageReportOutlineLogo;

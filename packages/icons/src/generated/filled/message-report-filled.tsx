/**
 * Auto-generated logo component: Message Report Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MessageReportFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MessageReportFilledLogo = React.forwardRef<SVGSVGElement, MessageReportFilledLogoProps>(
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
      <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-6 10a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -6a1 1 0 0 0 -1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

MessageReportFilledLogo.displayName = "MessageReportFilledLogo";

export const MessageReportFilledLogoMetadata = {
  id: "message-report-filled",
  baseId: "message-report-filled",
  variant: "default",
  name: "Message Report Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MessageReportFilledLogo;

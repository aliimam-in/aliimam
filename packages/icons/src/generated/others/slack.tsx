/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SlackProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Slack = React.forwardRef<SVGSVGElement, SlackProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="3" height="8" x="13" y="2" rx="1.5" />
  <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
  <rect width="3" height="8" x="8" y="14" rx="1.5" />
  <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
  <rect width="8" height="3" x="14" y="13" rx="1.5" />
  <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
  <rect width="8" height="3" x="2" y="8" rx="1.5" />
  <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
    </svg>
  )
);
Slack.displayName = "Slack";
export const SlackMetadata = { id: "slack", baseId: "slack", variant: "default", name: "Slack", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Slack;

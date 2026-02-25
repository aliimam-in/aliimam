/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface InfoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Info = React.forwardRef<SVGSVGElement, InfoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="M12 16v-4" />
  <path d="M12 8h.01" />
    </svg>
  )
);
Info.displayName = "Info";
export const InfoMetadata = { id: "info", baseId: "info", variant: "default", name: "Info", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Info;

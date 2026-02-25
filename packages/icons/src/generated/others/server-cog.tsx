/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ServerCogProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ServerCog = React.forwardRef<SVGSVGElement, ServerCogProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m10.852 14.772-.383.923" />
  <path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923" />
  <path d="m13.148 9.228.383-.923" />
  <path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544" />
  <path d="m14.772 10.852.923-.383" />
  <path d="m14.772 13.148.923.383" />
  <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
  <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
  <path d="M6 18h.01" />
  <path d="M6 6h.01" />
  <path d="m9.228 10.852-.923-.383" />
  <path d="m9.228 13.148-.923.383" />
    </svg>
  )
);
ServerCog.displayName = "ServerCog";
export const ServerCogMetadata = { id: "server-cog", baseId: "server-cog", variant: "default", name: "Server Cog", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default ServerCog;

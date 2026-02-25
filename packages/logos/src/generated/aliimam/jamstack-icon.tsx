/**
 * Auto-generated logo component: Jamstack Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface JamstackIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const JamstackIcon = React.forwardRef<SVGSVGElement, JamstackIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M128,0 C57.2214503,0 0,57.2214503 0,128 C0,198.778219 57.2214503,256 128,256 C198.778219,256 256,198.778219 256,128 L256,0 L128,0 Z" fill="#F0047F"></path>
        <path d="M121.040103,134.959897 L121.040103,228.271897 C71.3767366,225.435004 31.4001877,185.927043 27.8251844,136.461862 L27.7280206,134.959897 L121.040103,134.959897 Z M212.001858,134.959897 C209.401237,184.623509 173.18574,224.599736 127.84326,228.174733 L126.466477,228.271897 L126.466477,134.959897 L212.001858,134.959897 Z M212.114168,43.8855019 L212.114168,129.533523 L126.466477,129.533523 L126.466477,43.8855019 L212.114168,43.8855019 Z" fill="#FFFFFF"></path>
    </g>
    </svg>
  )
);

JamstackIcon.displayName = "JamstackIcon";

export const JamstackIconMetadata = {
  id: "jamstack-icon",
  baseId: "jamstack-icon",
  variant: "default",
  name: "Jamstack Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default JamstackIcon;

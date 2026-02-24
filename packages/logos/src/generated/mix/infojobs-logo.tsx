/**
 * Auto-generated logo component: Infojobs Logo (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InfojobsLogoLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const InfojobsLogoLogo = React.forwardRef<SVGSVGElement, InfojobsLogoLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 138 136.1"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path id="BG" d="M138 113c0 12.8-10.3 23.1-23.1 23.1H23.1C10.3 136.1 0 125.7 0 113V23.1C0 10.3 10.3 0 23.1 0h91.8C127.7 0 138 10.3 138 23.1V113z" style={{fill:"#167db7"}} /><g id="IJ"><path d="M57.9 89.3c-.1.7-.7 1.2-1.5 1.2H45.3c-.7 0-1.3-.4-1.3-1.1l.1-.2 7.1-59.3c.1-.7.2-1 1-1.1h12c.6 0 .9.4.9 1v.2l-7.2 59.3zM86.2 91.3c-1.6 12.9-9.7 15.9-19.4 15.9-5.7 0-6.5-.2-8-.4-.7-.1-1.5-.2-1.5-1.3v-.5l.6-4.8c.2-1.4.7-1.7 2-1.7 1.2-.1 2.7-.1 4.5-.2 4.3-.2 7.3-.6 8.1-6.7L80 30c.1-.7.7-1.1 1.4-1.2l11.3.2h.2c.7 0 1 .4 1 1l-7.7 61.3z" fill="#fff" /></g>
    </svg>
  )
);

InfojobsLogoLogo.displayName = "InfojobsLogoLogo";

export const InfojobsLogoLogoMetadata = {
  id: "infojobs-logo",
  baseId: "infojobs-logo",
  variant: "default",
  name: "Infojobs Logo",
  category: "mix",
  tags: [],
  viewBox: "0 0 138 136.1",
} as const;

export default InfojobsLogoLogo;

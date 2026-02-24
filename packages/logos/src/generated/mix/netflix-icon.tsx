/**
 * Auto-generated logo component: Netflix Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NetflixIconLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const NetflixIconLogo = React.forwardRef<SVGSVGElement, NetflixIconLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 551.111 1000"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs id="defs4"><linearGradient id="linearGradient35887"><stop id="stop35883" offset="0" style={{stopColor:"#b1060f",stopOpacity:"1"}} /><stop id="stop36053" offset=".625" style={{stopColor:"#7b010c",stopOpacity:"1"}} /><stop id="stop35885" offset="1" style={{stopColor:"#b1060f",stopOpacity:"0"}} /></linearGradient><linearGradient id="linearGradient19332"><stop id="stop19328" offset="0" style={{stopColor:"#b1060f",stopOpacity:"1"}} /><stop id="stop19560" offset=".546" style={{stopColor:"#7b010c",stopOpacity:"1"}} /><stop id="stop19330" offset="1" style={{stopColor:"#e50914",stopOpacity:"0"}} /></linearGradient><linearGradient href="#linearGradient19332" id="linearGradient13368" x1="78.234" x2="221.663" y1="423.767" y2="365.092" gradientUnits="userSpaceOnUse" /><linearGradient href="#linearGradient35887" id="linearGradient35889" x1="456.365" x2="309.676" y1="521.56" y2="583.495" gradientUnits="userSpaceOnUse" /></defs><path id="path6055" d="M-1.152-1.152 2.305 1002.67c73.273-14.111 130.892-12.569 195.924-18.44V0Z" style={{fill:"url(#linearGradient13368)",stroke:"none",strokeWidth:"1px",strokeLinecap:"butt",strokeLinejoin:"miter",strokeOpacity:"1",fillOpacity:"1"}} /><path id="path678" d="M353.816 0h199.381l2.305 1000.365-202.839-33.422z" style={{fill:"url(#linearGradient35889)",stroke:"none",strokeWidth:"1px",strokeLinecap:"butt",strokeLinejoin:"miter",strokeOpacity:"1",fillOpacity:"1"}} /><path id="path362" d="M1.152 0c4.61 11.525 345.749 981.925 345.749 981.925 56.056-.4 131.219 8.754 205.144 17.288L197.077 0Z" style={{fill:"#e50914",fillOpacity:"1",stroke:"none",strokeWidth:"1px",strokeLinecap:"butt",strokeLinejoin:"miter",strokeOpacity:"1"}} />
    </svg>
  )
);

NetflixIconLogo.displayName = "NetflixIconLogo";

export const NetflixIconLogoMetadata = {
  id: "netflix-icon",
  baseId: "netflix-icon",
  variant: "default",
  name: "Netflix Icon",
  category: "mix",
  tags: [],
  viewBox: "0 0 551.111 1000",
} as const;

export default NetflixIconLogo;

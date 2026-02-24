/**
 * Auto-generated logo component: Xrp (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XrpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const XrpLogo = React.forwardRef<SVGSVGElement, XrpLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>icon/xrp</title><desc>Created with Sketch.</desc><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1"><stop stopColor="#FFF" stopOpacity=".5" offset="0%" /><stop stopColor="#000" stopOpacity=".5" offset="100%" /></linearGradient><circle id="path-2" cx="15" cy="15" r="15" /><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="filter-3"><feOffset dx="0" dy=".5" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1" /><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" /><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" type="matrix" in="shadowBlurOuter1" /></filter></defs><g id="icon/xrp" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Group" transform="translate(1.000000, 0.000000)" fillRule="nonzero"><g id="Oval"><use fill="#000" fillOpacity="1" filter="url(#filter-3)" href="#path-2" /><use fill="#23292F" fillRule="evenodd" href="#path-2" /><use fill="url(#linearGradient-1)" fillRule="evenodd" style={{mixBlendMode:"soft-light"}} href="#path-2" /><circle strokeOpacity=".097" stroke="#000" strokeWidth="1" strokeLinejoin="square" cx="15" cy="15" r="14.5" /></g></g><g id="XRP-(XRP)" transform="translate(7.000000, 8.000000)" fill="#FFF" fillRule="nonzero"><path d="M15.3632812,0 L17.9648438,0 L12.5507812,5.36132812 C10.5890625,7.30195312 7.4109375,7.30195312 5.44921875,5.36132812 L0.031640625,0 L2.63671875,0 L6.75,4.07109375 C7.99101562,5.3015625 10.0054688,5.3015625 11.2464844,4.07109375 L15.3632812,0 Z" id="Vector" /><path d="M2.60507812,14.90625 L0,14.90625 L5.44921875,9.51328125 C7.4109375,7.57265625 10.5890625,7.57265625 12.5507812,9.51328125 L18,14.90625 L15.3949219,14.90625 L11.25,10.8 C10.0089844,9.56953125 7.99453125,9.56953125 6.75351562,10.8 L2.60507812,14.90625 Z" id="Vector_2" /></g></g>
    </svg>
  )
);

XrpLogo.displayName = "XrpLogo";

export const XrpLogoMetadata = {
  id: "xrp",
  baseId: "xrp",
  variant: "default",
  name: "Xrp",
  category: "mix",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default XrpLogo;

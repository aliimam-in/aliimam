/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CashBanknoteFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CashBanknoteFilled = React.forwardRef<SVGSVGElement, CashBanknoteFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M19 5a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3zm-7 4a3 3 0 0 0 -2.996 2.85l-.004 .15a3 3 0 1 0 3 -3m6.01 2h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-12 0h-.01a1 1 0 1 0 .01 2a1 1 0 0 0 0 -2" />
    </svg>
  )
);
CashBanknoteFilled.displayName = "CashBanknoteFilled";
export const CashBanknoteFilledMetadata = { 
  id: "cash-banknote_filled", 
  baseId: "cash-banknote", 
  variant: "filled", 
  name: "Cash Banknote", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CashBanknoteFilled;

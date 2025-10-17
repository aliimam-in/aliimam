import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const EffectTs: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function EffectTs(
  {
    color = "currentColor",
    fill,
    size = 24,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    ...props
  },
  forwardedRef,
) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeDasharray={strokeDasharray}
      opacity={opacity}
      {...props}
      ref={forwardedRef}
    >
      <g fill="#101214" clipPath="url(#undefined-clip0_2066_927)">
        <path
          d="M22.4283 18.0197C22.7839 17.8194 22.9053 17.3757 22.7002 17.0284C22.4951 16.6815 22.0408 16.5625 21.6853 16.7628L11.9821 22.2341L2.31452 16.7831C1.95932 16.5828 1.50507 16.7015 1.29954 17.0487C1.09445 17.3959 1.21631 17.8397 1.57151 18.04L11.5823 23.6844C11.6693 23.7334 11.7651 23.7648 11.8643 23.7766C11.9634 23.7885 12.0639 23.7805 12.16 23.7533C12.2506 23.7395 12.338 23.7094 12.4179 23.6644L22.4283 18.0197Z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M23.4322 12.407C23.463 12.1146 23.3191 11.8179 23.0409 11.6618L12.4579 5.7233C12.3746 5.67658 12.2836 5.64517 12.1893 5.63057C12.0877 5.60173 11.9815 5.59325 11.8767 5.60561C11.7718 5.61796 11.6705 5.65091 11.5785 5.70257L0.995216 11.6412C0.696089 11.8092 0.552307 12.1398 0.614271 12.4526C0.610453 12.6905 0.722271 12.9288 0.998816 13.0846L11.5817 19.0518C11.6738 19.1036 11.7752 19.1367 11.88 19.1492C11.9849 19.1616 12.0912 19.1532 12.1929 19.1244C12.2885 19.11 12.3808 19.0783 12.465 19.0308L23.0484 13.0632C23.3342 12.902 23.4442 12.6529 23.4322 12.407ZM21.1444 12.365L11.9995 7.23355L2.85991 12.3622L12.0048 17.5185L21.1444 12.365Z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M23.5871 7.9573C23.982 7.73475 24.1173 7.24199 23.8892 6.85635C23.6614 6.47115 23.1567 6.33893 22.7619 6.56137L11.9857 12.6377L1.24963 6.58395C0.854718 6.36108 0.350172 6.49341 0.122391 6.87893C-0.105828 7.26413 0.0294452 7.75744 0.424354 7.97999L11.5418 14.2484C11.6385 14.3028 11.745 14.3375 11.8552 14.3506C11.9654 14.3637 12.0771 14.3548 12.1838 14.3245C12.2843 14.3094 12.3812 14.2761 12.4697 14.2262L23.5871 7.9573Z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="M2.0625 7.25961L11.9652 1.21521L21.8678 7.25928L11.9652 12.9011L2.0625 7.25961Z" />
        <path
          d="M23.574 6.36765C23.9697 6.58976 24.1067 7.08219 23.8802 7.46783C23.6532 7.85303 23.1486 7.98558 22.753 7.76358L11.9751 1.71601L1.23654 7.74187C0.840863 7.96387 0.336209 7.83132 0.1093 7.44601C-0.117282 7.06038 0.0198453 6.56805 0.414972 6.34594L11.5329 0.107685C11.6295 0.0534164 11.736 0.0187903 11.8461 0.00579747C11.9562 -0.00719534 12.0678 0.00170141 12.1744 0.0319763C12.2736 0.0473364 12.3691 0.0803301 12.4566 0.129394L23.574 6.36765Z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2066_927">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

EffectTs.displayName = "EffectTs";

EffectTs.metadata = {
  name: "EffectTs",
  category: "icon/library",
  tags: ["effect", "ts", "icon"],
  description: "EffectTs icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default EffectTs;

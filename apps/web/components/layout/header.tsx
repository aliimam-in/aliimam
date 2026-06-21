"use client";
import { cn } from "@workspace/ui/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@workspace/ui/components/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import Link from "next/link";

export const navLinks = [
	{
		label: "Works",
		href: "/works",
	},
	{
		label: "About",
		href: "/about",
	},
];

export function Header() {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 mx-auto w-full max-w-6xl border-x md:transition-all md:ease-out",
				{
					"border-border bg-background/90 border backdrop-blur-md supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-3xl md:shadow-2xl":
						scrolled,
				}
			)}
		>
			<nav
				className={cn(
					"flex h-14 w-full items-center justify-between px-2 md:h-12 md:transition-all md:ease-out",
					{
						"md:px-2": scrolled,
					}
				)}
			>
				<a
					className="hover:bg-muted dark:hover:bg-muted/50"
					href="/"
				>
					<img
						src="/ai-logo-white.png"
						alt="Your Image"
						height={50}
						width={50}
						className="z-10 hidden h-8 w-full object-contain dark:block"
					/>
					<img
						src="/ai-logo-black.png"
						alt="Your Image"
						height={50}
						width={50}
						className="z-10 block h-8 w-full object-contain dark:hidden"
					/>
				</a>
				<div className="hidden items-center gap-2 md:flex">
					<div>
						{navLinks.map((link) => (
							<Button key={link.label} size="sm" variant="ghost" render={<a href={link.href} />} nativeButton={false}>{link.label}</Button>
						))}
					</div>

					<Button size="sm">
						<Link target="_blank" href="https://cal.com/aliimam/30min">
							Book a Call
						</Link>
					</Button>
				</div>
				<MobileNav />
			</nav>
		</header>
	);
}

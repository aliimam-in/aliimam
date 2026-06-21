import { cn } from "@workspace/ui/lib/utils";
import React from "react";
import { Button } from "@workspace/ui/components/button";
import { Portal, PortalBackdrop } from "@/components/layout/portal";
import { navLinks } from "@/components/layout/header";
import { XIcon, EqualIcon } from "lucide-react";

export function MobileNav() {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="md:hidden">
			<Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label="Toggle menu"
				className="md:hidden"
				onClick={() => setOpen(!open)}
				size="icon"
				variant="ghost"
			>
				{open ? (
					<XIcon className="size-4.5" />
				) : (
					<EqualIcon className="size-4.5" />
				)}
			</Button>
			{open && (
				<Portal className="top-14" id="mobile-menu">
					<PortalBackdrop />
					<div
						className={cn(
							"data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
							"size-full p-4"
						)}
						data-slot={open ? "open" : "closed"}
					>
						<div className="grid gap-y-2">
							{navLinks.map((link) => (
								<Button className="justify-start" key={link.label} variant="ghost" render={<a href={link.href} />} nativeButton={false}>{link.label}</Button>
							))}
						</div>
						<div className="mt-12 flex flex-col gap-2">
							<Button className="w-full" variant="outline">
								Sign In
							</Button>
							<Button className="w-full">Get Started</Button>
						</div>
					</div>
				</Portal>
			)}
		</div>
	);
}

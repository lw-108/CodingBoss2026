// https://motion-primitives.com/docs/infinite-slider
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { logos } from "@/lib/logo-data";

export function LogoCloud() {
	return (
		<div className="flex flex-col py-4 w-full px-4 md:px-6 lg:px-12">
			<section className="relative mx-auto max-w-6xl w-full">
				<h2 className="mb-5 text-center font-medium text-white/70 text-xl tracking-tight md:text-3xl">
					<span>Trusted by experts.</span>
					<br />
					<span className="font-semibold text-white">Used by the leaders.</span>
				</h2>
				<div className="mask-[linear-gradient(to_right,transparent,black,transparent)] mx-auto my-5 h-px max-w-sm bg-white/20" />
				
				<div className="mask-[linear-gradient(to_right,transparent,black,transparent)] overflow-hidden py-4">
					<InfiniteSlider gap={42} reverse speed={80} speedOnHover={25}>
						{logos.map((logo, index) => (
							<div
								key={`logo-${logo.alt}-${index}`}
								className="flex flex-col items-center gap-2"
							>
								<div className="flex h-10 w-32 items-center justify-center rounded-lg bg-white/5 p-2 backdrop-blur-sm transition-colors hover:bg-white/10">
									<img
										alt={logo.alt}
										className="pointer-events-none max-h-full max-w-full select-none object-contain opacity-90 brightness-0 invert"
										loading="lazy"
										src={logo.src}
									/>
								</div>
								<p className="text-[10px] uppercase tracking-wider text-white/40">{logo.category}</p>
							</div>
						))}
					</InfiniteSlider>
				</div>
				
				<div className="mask-[linear-gradient(to_right,transparent,black,transparent)] mt-5 h-px bg-white/20" />
			</section>
		</div>
	);
}

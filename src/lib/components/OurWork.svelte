<script lang="ts">
	import { fly } from 'svelte/transition';

	export let sectionVisible: { [key: string]: boolean } = {};
</script>

<section id="our-work" class="bg-[var(--apple-white)] py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-10 text-center text-3xl font-bold text-[var(--dark-blue)]">Our Work</h2>

		<div class="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2">
			{#if sectionVisible['our-work']}
				<div
					in:fly={{ x: -50, duration: 1400, delay: 300 }}
					class="relative overflow-hidden rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl"
				>
					<!-- Modern gradient accent using Tailwind -->
					<div
						class="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-[var(--cerulean-blue)] to-[var(--dark-blue)]"
					></div>

					<h3 class="mb-4 pl-4 text-2xl font-semibold text-[var(--cerulean-blue)]">
						Racial Justice Act Tool
					</h3>
					<p class="mb-6 pl-4 text-gray-700">
						The RJA tool is a textual analysis tool that identifies instances of racialized language
						per claims A1 and A2 of the California Racial Justice Act. In its current stage the tool
						is primarily for use by public defenders and is designed using training data from each
						county to be able to identify the racial nuances of the given geographic area. The tool
						is set to be piloted with the Los Angeles County Public Defender's Office, after which
						it can be expanded to PD offices throughout the state. Long term we plan to collaborate
						with other organizations creating RJA tools to build an end-to-end tool for use by
						defense attorneys, family/loved ones of incarcerated people, and the general public to
						access digital tools for each step in the RJA filing process.
					</p>
					<!-- <div class="flex items-center pl-4">
						<button
							class="group relative overflow-hidden rounded-md bg-[var(--cerulean-blue)] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
						>
							<span class="relative z-10">View Demo</span>
							<span
								class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
							></span>
						</button>
					</div> -->
				</div>

				<div
					in:fly={{ x: 50, duration: 1400, delay: 600 }}
					class="relative overflow-hidden rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl"
				>
					<!-- Modern gradient accent using Tailwind -->
					<div
						class="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-[var(--cerulean-blue)] to-[var(--dark-blue)]"
					></div>

					<h3 class="mb-4 pl-4 text-2xl font-semibold text-[var(--cerulean-blue)]">CPDA Tool</h3>
					<p class="mb-6 pl-4 text-gray-700">
						The California Public Defender's Association Motion Bank tool organizes decades of
						filings, motions briefs and other resources to aid in litigation. By implementing
						semantic search and advanced search tools, attorneys can easily find relevant documents
						and topical information. The tool lessens the burden of research for the public
						defender, making justice more accessible to those facing incarceration. The tool will be
						available for CPDA members shortly.
					</p>
					<!-- <div class="flex items-center pl-4">
						<button
							class="group relative overflow-hidden rounded-md bg-[var(--cerulean-blue)] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
						>
							<span class="relative z-10">Coming Soon</span>
							<span
								class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
							></span>
						</button>
					</div> -->
				</div>
			{/if}
		</div>
	</div>
</section>

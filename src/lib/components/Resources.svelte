<script lang="ts">
	import { fly } from 'svelte/transition';

	export let sectionVisible: { [key: string]: boolean } = { resources: true }; // Default to visible

	// Combined resource cards with uniform structure and descriptions
	const resources = [
		{
			title: "RJA Action",
			description: "For more information about the Racial Justice Act and to find resources please visit RJAaction.org",
			buttonText: 'Visit RJA Action',
			buttonLink: 'https://rjaction.org',
			delay: 300
		},
		{
			title: "Ella Baker Center",
			description: "Visit the Ella Baker Center's website to access the RJA 4 All Guide - provided in English and Spanish.",
			buttonText: 'Access RJA Guide',
			buttonLink: 'https://ellabakercenter.org',
			delay: 350
		},
		{
			title: "California Public Defender Association",
			description: "Resources, training, and advocacy for public defenders working on racial justice cases throughout California.",
			buttonText: 'View Resources',
			buttonLink: 'https://www.cpda.org/',
			delay: 400
		},
		{
			title: "Berkeley Criminal Law and Justice Center",
			description: "Academic resources and research on racial disparities in the criminal justice system.",
			buttonText: 'Learn More',
			buttonLink: 'https://www.law.berkeley.edu/research/criminal-law-and-justice-center/',
			delay: 450
		},
		{
			title: "Center for Policing Equity",
			description: "Research and resources addressing racial bias in law enforcement practices and policies.",
			buttonText: 'Explore Center',
			buttonLink: 'https://policingequity.org/',
			delay: 500
		}
	];
</script>

<section id="resources" class="bg-white py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2
			class="garamond mb-8 text-center text-3xl font-bold text-[var(--dark-blue)] sm:mb-12 sm:text-4xl"
		>
			Resources
		</h2>

		<div class="mx-auto max-w-6xl">
			<!-- Either always show resources, or control with sectionVisible -->
			{#if !sectionVisible || sectionVisible['resources'] === undefined || sectionVisible['resources']}
				<div
					in:fly={{ y: 30, duration: 1200, delay: 300 }}
					class="relative overflow-hidden rounded-lg bg-[var(--apple-white)] p-6 shadow-md transition-all duration-300 hover:shadow-xl sm:p-8"
				>
					<!-- Modern subtle pattern using Tailwind bg-opacity -->
					<div
						class="bg-opacity-5 pattern-dots pattern-opacity-10 pattern-size-2 pointer-events-none absolute inset-0"
					></div>

					<!-- Combined grid of all resources with uniform styling -->
					<div class="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{#each resources as resource, i}
							<div 
								in:fly={{ y: 20, duration: 800, delay: resource.delay }}
								class="flex h-full flex-col justify-between rounded-md border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[var(--cerulean-blue)] hover:shadow-md"
							>
								<div>
									<h3 class="mb-3 text-lg font-semibold text-[var(--dark-blue)]">{resource.title}</h3>
									<p class="mb-4 text-sm text-gray-700">
										{resource.description}
									</p>
								</div>
								<div class="mt-auto flex justify-center w-full">
									<a
										href={resource.buttonLink}
										target="_blank"
										rel="noopener noreferrer"
										class="group relative inline-block overflow-hidden rounded-md bg-[var(--cerulean-blue)] px-6 py-2 text-sm font-medium text-white text-center transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
									>
										<span class="relative z-10">{resource.buttonText}</span>
										<span
											class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
										></span>
									</a>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Resource categories - can be expanded or collapsed -->
				<div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
					{#each ['Legal Resources', 'Educational Materials', 'Advocacy Tools'] as category, i}
						<div
							in:fly={{ y: 20, duration: 1000, delay: 900 + i * 150 }}
							class="rounded-lg border-2 border-[var(--apple-white)] bg-white p-4 text-center shadow-sm transition-all duration-300 hover:border-[var(--cerulean-blue)] hover:shadow-md"
						>
							<h4 class="text-base font-medium text-[var(--dark-blue)] sm:text-lg">{category}</h4>
							<p class="mt-2 text-xs text-gray-600 sm:text-sm">Coming soon</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</section>
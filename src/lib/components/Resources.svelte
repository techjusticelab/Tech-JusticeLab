<script lang="ts">
	import { fly } from 'svelte/transition';

	export let sectionVisible: { [key: string]: boolean } = {};

	// Main resource cards - easily add or remove resource sections
	const resourceSections = [
		{
			id: 'rja',
			title: 'Racial Justice Act Resources',
			content: [
				{
					text: 'For more information about the Racial Justice Act and to find resources please visit RJAaction.org',
					buttonText: 'Visit RJA Action',
					buttonLink: 'https://rjaction.org'
				},
				{
					text: "Visit the Ella Baker Center's website to access the RJA 4 All Guide - provided in English and Spanish.",
					buttonText: 'Ella Baker Center RJA Guide',
					buttonLink: 'https://ellabakercenter.org'
				}
			],
			delay: 300
		},
		{
			id: 'additional',
			title: 'Additional Resources',
			isList: true,
			delay: 600
		}
	];

	// Additional resource links for the second card
	const additionalLinks = [
		{
			id: 1,
			text: 'California Public Defender Association Resources',
			link: 'https://www.cpda.org/'
		},
		{
			id: 2,
			text: 'Berkeley Criminal Law and Justice Center',
			link: 'https://www.law.berkeley.edu/research/criminal-law-and-justice-center/'
		},
		{
			id: 3,
			text: 'Center for Policing Equity',
			link: 'https://policingequity.org/'
		}
		// Easily add more resources by adding to this array
	];

	// Reusable arrow icon component
	const ArrowIcon = `<svg
		class="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-[var(--cerulean-blue)]"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M9 5l7 7-7 7"
		/>
	</svg>`;
</script>

<section id="resources" class="bg-white py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2
			class="garamond mb-8 text-center text-2xl font-bold text-[var(--dark-blue)] sm:mb-10 sm:text-3xl"
		>
			Resources
		</h2>

		<div class="mx-auto max-w-4xl">
			{#if sectionVisible['resources']}
				<div
					class="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-{resourceSections.length}"
				>
					{#each resourceSections as section (section.id)}
						<div
							in:fly={{ y: 30, duration: 1200, delay: section.delay }}
							class="{resourceSections.length > 1 && section.id === 'additional'
								? 'md:col-span-1'
								: 'md:col-span-2'} relative overflow-hidden rounded-lg bg-[var(--apple-white)] p-6 shadow-md transition-all duration-300 hover:shadow-xl sm:p-8"
						>
							<!-- Modern subtle pattern using Tailwind bg-opacity -->
							<div
								class="bg-opacity-5 pattern-dots pattern-opacity-10 pattern-size-2 pointer-events-none absolute inset-0"
							></div>

							<h3 class="relative z-10 mb-4 text-lg font-semibold sm:text-xl">{section.title}</h3>

							{#if section.isList}
								<ul class="relative z-10 space-y-3 text-gray-700 sm:space-y-4">
									{#each additionalLinks as link (link.id)}
										<li
											class="flex transform items-start transition-transform duration-300 hover:translate-x-2"
										>
											{@html ArrowIcon}
											<a
												href={link.link}
												class="text-sm transition-colors duration-300 hover:text-[var(--cerulean-blue)] sm:text-base"
												>{link.text}</a
											>
										</li>
									{/each}
								</ul>
							{:else}
								{#each section.content as item, i}
									<p class="relative z-10 mb-4 text-sm sm:text-base">
										{item.text}
									</p>
									<div class="relative z-10 mb-6 flex flex-wrap">
										<a
											href={item.buttonLink}
											target="_blank"
											rel="noopener noreferrer"
											class="group relative mb-3 overflow-hidden rounded-md bg-[var(--cerulean-blue)] px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:shadow-lg sm:mb-4 sm:px-6 sm:text-sm"
										>
											<span class="relative z-10">{item.buttonText}</span>
											<span
												class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
											></span>
										</a>
									</div>
								{/each}
							{/if}
						</div>
					{/each}
				</div>

				<!-- Resource categories - can be expanded or collapsed -->
				<div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

<style>
	/* Dynamic grid columns based on section count */
	@media (min-width: 1024px) {
		.grid-cols-1 {
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}

		.grid-cols-2 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>

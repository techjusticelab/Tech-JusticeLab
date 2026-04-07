<script lang="ts">
	import { fly } from 'svelte/transition';

	export let sectionVisible: { [key: string]: boolean } = {};

	function handleMouseMove(event: MouseEvent): void {
		// Mouse move handler can be implemented if needed
	}
</script>

<section id="updates" class="bg-[var(--apple-white)] py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-10 text-center text-3xl font-bold text-[var(--dark-blue)]">
			Latest Updates
		</h2>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#if sectionVisible['updates']}
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					in:fly={{ y: 30, duration: 1200, delay: 300 }}
					class="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
					on:mousemove={handleMouseMove}
				>
					<h3 class="mb-2 text-xl font-semibold">RJA Tool Development</h3>
					<p class="mb-4 text-gray-600">
						Our Racial Justice Act tool aims to help public defenders form RJA claims and is set to
						be piloted soon.
					</p>
					<a
						href="#our-work"
						class="group inline-flex items-center font-medium text-[var(--cerulean-blue)] hover:underline"
						>Learn more
						<span
							class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-300 group-hover:w-full"
						></span>
					</a>
				</div>

				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					in:fly={{ y: 30, duration: 1200, delay: 600 }}
					class="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
					on:mousemove={handleMouseMove}
				>
					<h3 class="mb-2 text-xl font-semibold">CPDA Motions Bank</h3>
					<p class="mb-4 text-gray-600">
						The CPDA Motion Bank is launched! Now available to public defenders across California.
					</p>
					<a
						href="#our-work"
						class="group inline-flex items-center font-medium text-[var(--cerulean-blue)] hover:underline"
						>Learn more
					</a>
				</div>

				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					in:fly={{ y: 30, duration: 1200, delay: 900 }}
					class="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
					on:mousemove={handleMouseMove}
				>
					<h3 class="mb-2 text-xl font-semibold">Berkeley Tech and Justice Lab in the news!</h3>
					<p class="mb-4 text-gray-600">
						Read about the launch of the CPDA Motions Bank Tool <a href="https://www.dailyjournal.com/articles/390468-public-defenders-relaunch-motions-bank-to-ease-workload-pressures" target="_blank" rel="noopener noreferrer" class="text-[var(--cerulean-blue)] hover:underline">here</a>!
					</p>
					<blockquote class="border-l-4 border-[var(--cerulean-blue)] pl-4 italic text-gray-600">
						"Avneet Chattha, a deputy public defender in Los Angeles County, said the motions bank has saved him three to four hours every time he has used it."
					</blockquote>
				</div>

				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					in:fly={{ y: 30, duration: 1200, delay: 1200 }}
					class="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
					on:mousemove={handleMouseMove}
				>
					<h3 class="mb-2 text-xl font-semibold">Internship Opportunities</h3>
					<p class="mb-4 text-gray-600">
						Join our team of developers working on technology for social justice.
					</p>
					<a
						href="#get-involved"
						class="group inline-flex items-center font-medium text-[var(--cerulean-blue)] hover:underline"
						>Learn more 
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>

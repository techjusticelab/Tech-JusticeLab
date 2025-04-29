<script lang="ts">
	import { fly } from 'svelte/transition';

	export let sectionVisible: { [key: string]: boolean } = {};

	// Google Form URLs
	const internFormUrl = 'https://forms.gle/mHPRyTgknwbAJjUt9';
	const partnerFormUrl = 'https://forms.gle/NERVDUmWi6q2RLb78';
</script>

<section id="get-involved" class="bg-[var(--apple-white)] py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2
			class="garamond mb-8 text-center text-2xl font-bold text-[var(--dark-blue)] sm:mb-10 sm:text-3xl"
		>
			Get Involved
		</h2>

		<div class="grid grid-cols-1 gap-6 sm:gap-10 md:grid-cols-2">
			{#if sectionVisible['get-involved']}
				<div
					in:fly={{ x: -50, duration: 1400, delay: 300 }}
					class="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl sm:p-8"
				>
					<h3 class="mb-3 text-xl font-semibold text-[var(--cerulean-blue)] sm:mb-4 sm:text-2xl">
						Internships
					</h3>
					<p class="mb-4 text-sm text-gray-700 sm:mb-6 sm:text-base">
						We're looking for passionate individuals to join our team as interns. Whether you're a
						law student, technical developer, designer, or researcher, you can help us build digital
						tools for justice.
					</p>

					<div class="mb-4 space-y-3">
						<div class="flex items-start">
							<svg
								class="mt-0.5 mr-2 h-5 w-5 text-[var(--cerulean-blue)]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<p class="text-sm text-gray-700 sm:text-base">
								Gain experience in legal tech development
							</p>
						</div>
						<div class="flex items-start">
							<svg
								class="mt-0.5 mr-2 h-5 w-5 text-[var(--cerulean-blue)]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<p class="text-sm text-gray-700 sm:text-base">Work with criminal justice experts</p>
						</div>
						<div class="flex items-start">
							<svg
								class="mt-0.5 mr-2 h-5 w-5 text-[var(--cerulean-blue)]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<p class="text-sm text-gray-700 sm:text-base">
								Create tools that make a real difference
							</p>
						</div>
					</div>

					<div class="flex justify-center sm:justify-start">
						<a
							href={internFormUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="group relative overflow-hidden rounded-md bg-[var(--cerulean-blue)] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
						>
							<span class="relative z-10">Apply for Internship</span>
							<span
								class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
							></span>
						</a>
					</div>
				</div>

				<div
					in:fly={{ x: 50, duration: 1400, delay: 600 }}
					class="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl sm:p-8"
				>
					<h3 class="mb-3 text-xl font-semibold text-[var(--cerulean-blue)] sm:mb-4 sm:text-2xl">
						Partner with us
					</h3>
					<p class="mb-3 text-sm text-gray-700 sm:mb-4 sm:text-base">
						Interested in integrating one of our existing tools into your organization or developing
						a new tool together? We'd love to hear from you!
					</p>

					<div class="mb-4 space-y-3">
						<div class="flex items-start">
							<svg
								class="mt-0.5 mr-2 h-5 w-5 text-[var(--cerulean-blue)]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<p class="text-sm text-gray-700 sm:text-base">
								<strong>Existing Tools:</strong> RJA Tool, CPDA Motions Bank
							</p>
						</div>
						<div class="flex items-start">
							<svg
								class="mt-0.5 mr-2 h-5 w-5 text-[var(--cerulean-blue)]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<p class="text-sm text-gray-700 sm:text-base">
								<strong>New Tools:</strong> Let us know your needs and ideas
							</p>
						</div>
					</div>

					<p class="mb-6 text-sm text-gray-700 sm:text-base">
						Fill out our partnership interest form and we'll get back to you as soon as possible.
						You can also contact us directly at <a
							href="mailto:info@techjusticelab.org"
							class="text-[var(--cerulean-blue)] hover:underline">info@techjusticelab.org</a
						>
					</p>

					<div class="flex justify-center sm:justify-start">
						<a
							href={partnerFormUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="group relative overflow-hidden rounded-md bg-[var(--cerulean-blue)] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
						>
							<span class="relative z-10">Submit Partnership Interest</span>
							<span
								class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
							></span>
						</a>
					</div>
				</div>
			{/if}
		</div>

		<!-- Additional call to action for other ways to get involved -->
		{#if sectionVisible['get-involved']}
			<div in:fly={{ y: 30, duration: 1200, delay: 900 }} class="mt-10 text-center sm:mt-16">
				<h3 class="mb-3 text-xl font-semibold text-[var(--cerulean-blue)] sm:mb-4 sm:text-2xl">
					Other Ways to Support
				</h3>
				<p class="mx-auto mb-6 max-w-2xl text-sm text-gray-700 sm:text-base">
					Can't intern or partner? You can still support our work by spreading the word about our
					tools and mission or by contributing to our projects.
				</p>
				<div class="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
					<a
						href="#contact"
						class="group relative overflow-hidden rounded-md bg-[var(--cerulean-blue)] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
					>
						<span class="relative z-10">Contact Us</span>
						<span
							class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
						></span>
					</a>
					<a
						href="#"
						class="group relative overflow-hidden rounded-md border-2 border-[var(--cerulean-blue)] bg-transparent px-6 py-2.5 text-sm font-medium text-[var(--cerulean-blue)] transition-all duration-300 hover:bg-[var(--cerulean-blue)]/10"
					>
						<span class="relative z-10">Donate</span>
						<span
							class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-[var(--cerulean-blue)]/10 transition-transform duration-500 group-hover:scale-x-100"
						></span>
					</a>
				</div>
			</div>
		{/if}
	</div>
</section>

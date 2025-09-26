<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	export let sectionVisible: { [key: string]: boolean } = {};
</script>

<section id="our-work" class="bg-gradient-to-b from-[var(--apple-white)] to-gray-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-16 text-center text-4xl font-bold text-[var(--dark-blue)]">Our Work</h2>

		<!-- Featured Demo Section -->
		{#if sectionVisible['our-work']}
			<div
				in:fade={{ duration: 1000, delay: 200 }}
				class="mb-20 overflow-hidden rounded-2xl bg-gradient-to-br from-white to-blue-50 p-1 shadow-2xl"
			>
				<div class="rounded-xl bg-white p-8 lg:p-12">
					<div class="mb-8 text-center">
						<span class="inline-block rounded-full bg-gradient-to-r from-[var(--cerulean-blue)] to-[var(--dark-blue)] px-4 py-1 text-sm font-semibold text-white">
							Featured Demo
						</span>
						<h3 class="mt-4 text-3xl font-bold text-[var(--dark-blue)]">
							CPDA Motion Banks Tool
						</h3>
						<p class="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
							The California Public Defender's Association Motion Bank revolutionizes legal research by organizing decades of filings, motions, and briefs with advanced semantic search capabilities.
						</p>
					</div>

					<div class="relative mx-auto max-w-5xl">
						<div class="absolute -inset-4 rounded-xl bg-gradient-to-r from-[var(--cerulean-blue)] to-[var(--dark-blue)] opacity-20 blur-2xl"></div>
						<div class="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-900 shadow-2xl">
							<iframe
								src="https://www.youtube.com/embed/4u73Xr7E5sg"
								title="Motion Banks Demo"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
								class="absolute inset-0 h-full w-full"
							></iframe>
						</div>
					</div>

					<div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<a
							href="https://youtu.be/4u73Xr7E5sg"
							target="_blank"
							rel="noopener noreferrer"
							class="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-[var(--cerulean-blue)] to-[var(--dark-blue)] px-8 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
						>
							<span class="relative z-10 font-medium">Watch Full Demo</span>
							<svg class="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
							</svg>
						</a>
						<span class="text-sm text-gray-500">Available for CPDA members soon</span>
					</div>
				</div>
			</div>
		{/if}

		<!-- Other Projects Grid -->
		<div class="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
			{#if sectionVisible['our-work']}
				<!-- RJA Tool Card -->
				<div
					in:fly={{ y: 50, duration: 1200, delay: 400 }}
					class="group relative overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
				>
					<div class="absolute inset-0 bg-gradient-to-br from-[var(--cerulean-blue)]/5 to-transparent"></div>
					<div class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[var(--cerulean-blue)] to-[var(--dark-blue)]"></div>

					<div class="relative p-8">
						<div class="mb-4 inline-flex rounded-lg bg-[var(--cerulean-blue)]/10 p-3">
							<svg class="h-6 w-6 text-[var(--cerulean-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
							</svg>
						</div>

						<h3 class="mb-3 text-xl font-bold text-[var(--dark-blue)]">
							Racial Justice Act Tool
						</h3>
						<p class="mb-6 text-gray-600 leading-relaxed">
							Advanced textual analysis tool that identifies racialized language per California RJA claims A1 and A2. Tailored for each county's unique linguistic patterns, piloting with LA County Public Defender's Office.
						</p>

						<div class="flex items-center text-sm font-medium text-[var(--cerulean-blue)]">
							<span>Piloting Soon</span>
							<svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
							</svg>
						</div>
					</div>
				</div>

				<!-- Accelerated Clearance Tool Card -->
				<div
					in:fly={{ y: 50, duration: 1200, delay: 600 }}
					class="group relative overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
				>
					<div class="absolute inset-0 bg-gradient-to-br from-[var(--cerulean-blue)]/5 to-transparent"></div>
					<div class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[var(--cerulean-blue)] to-[var(--dark-blue)]"></div>

					<div class="relative p-8">
						<div class="mb-4 inline-flex rounded-lg bg-[var(--cerulean-blue)]/10 p-3">
							<svg class="h-6 w-6 text-[var(--cerulean-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
							</svg>
						</div>

						<h3 class="mb-3 text-xl font-bold text-[var(--dark-blue)]">
							Accelerated Clearance
						</h3>
						<p class="mb-6 text-gray-600 leading-relaxed">
							Streamlines San Quentin Skunkworks' volunteer clearance process, preventing documentation errors that could delay critical volunteer contributions to prison reform initiatives.
						</p>

						<a
							href="https://sqpdf.techjusticelab.org/"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center text-sm font-medium text-[var(--cerulean-blue)] transition-colors hover:text-[var(--dark-blue)]"
						>
							<span>Visit Tool</span>
							<svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
							</svg>
						</a>
					</div>
				</div>

				<!-- Blackout Redaction Engine Card -->
				<div
					in:fly={{ y: 50, duration: 1200, delay: 800 }}
					class="group relative overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
				>
					<div class="absolute inset-0 bg-gradient-to-br from-[var(--cerulean-blue)]/5 to-transparent"></div>
					<div class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[var(--cerulean-blue)] to-[var(--dark-blue)]"></div>

					<div class="relative p-8">
						<div class="mb-4 inline-flex rounded-lg bg-[var(--cerulean-blue)]/10 p-3">
							<svg class="h-6 w-6 text-[var(--cerulean-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
							</svg>
						</div>

						<h3 class="mb-3 text-xl font-bold text-[var(--dark-blue)]">
							Blackout Redaction Engine
						</h3>
						<p class="mb-6 text-gray-600 leading-relaxed">
							Intelligent redaction system that automatically identifies and removes sensitive information from legal documents, ensuring privacy compliance and secure document processing.
						</p>

						<a
							href="https://github.com/techjusticelab/blackout"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center text-sm font-medium text-[var(--cerulean-blue)] transition-colors hover:text-[var(--dark-blue)]"
						>
							<span>View on GitHub</span>
							<svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
							</svg>
						</a>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
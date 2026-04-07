<script lang="ts">
	import { fly } from 'svelte/transition';

	export let sectionVisible: { [key: string]: boolean } = {};
</script>

<section id="our-work" class="bg-gradient-to-b from-[var(--apple-white)] to-gray-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-16 text-center text-4xl font-bold text-[var(--dark-blue)]">Our Work</h2>

		{#if sectionVisible['our-work']}
			<!-- Projects Grid -->
			<div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
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
							Ideated by and built in partnership with San Quentin SkunkWorks, this tool utilizes advanced textual analysis to identify racialized language per California RJA claims A1 and A2. Built in close collaboration with individual public defenders offices, trained on the racial nuances of each geographic region, and securely stored on local servers in users' offices.
						</p>

						<a
							href="mailto:info@techjusticelab.org"
							class="inline-flex items-center text-sm font-medium text-[var(--cerulean-blue)] transition-colors hover:text-[var(--dark-blue)]"
						>
							<span>If your office is interested, contact us here</span>
							<svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
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

				<!-- CPDA Motions Bank Card -->
				<div
					in:fly={{ y: 50, duration: 1200, delay: 1000 }}
					class="group relative overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
				>
					<div class="absolute inset-0 bg-gradient-to-br from-[var(--cerulean-blue)]/5 to-transparent"></div>
					<div class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[var(--cerulean-blue)] to-[var(--dark-blue)]"></div>

					<div class="relative p-8">
						<div class="mb-4 inline-flex rounded-lg bg-[var(--cerulean-blue)]/10 p-3">
							<svg class="h-6 w-6 text-[var(--cerulean-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
							</svg>
						</div>

						<h3 class="mb-3 text-xl font-bold text-[var(--dark-blue)]">
							California Public Defenders Association Motions Bank
						</h3>
						<p class="mb-6 text-gray-600 leading-relaxed">
							The CPDA Motions Bank organizes decades of motions, filings, and resources into a searchable database. Users can utilize the tool in case research and can upload their own documents to be used by fellow attorneys.
						</p>

						<a
							href="https://motionbank.cpda.org/auth"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center text-sm font-medium text-[var(--cerulean-blue)] transition-colors hover:text-[var(--dark-blue)]"
						>
							<span>Available now to CPDA Premium Members!</span>
							<svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
							</svg>
						</a>
					</div>
				</div>

				<!-- BillWatch Card -->
				<div
					in:fly={{ y: 50, duration: 1200, delay: 1200 }}
					class="group relative overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
				>
					<div class="absolute inset-0 bg-gradient-to-br from-[var(--cerulean-blue)]/5 to-transparent"></div>
					<div class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[var(--cerulean-blue)] to-[var(--dark-blue)]"></div>

					<div class="relative p-8">
						<div class="mb-4 inline-flex rounded-lg bg-[var(--cerulean-blue)]/10 p-3">
							<svg class="h-6 w-6 text-[var(--cerulean-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
							</svg>
						</div>

						<h3 class="mb-3 text-xl font-bold text-[var(--dark-blue)]">
							BillWatch
						</h3>
						<p class="mb-6 text-gray-600 leading-relaxed">
							Organizational tool for advocates and legislative staff. Tracks bills in the California legislature through a user-friendly dashboard of selected bills, notifies users of hearing and letter submission dates, notes support, opposition, amendments and budget updates, allows advocates to connect with/track bills coalition-style.
						</p>

						<div class="flex items-center text-sm font-medium text-[var(--cerulean-blue)]">
							<span>Coming Soon</span>
							<svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
							</svg>
						</div>
					</div>
				</div>
			</div>

			<!-- PRA Machine Card (centered) -->
			<div class="mb-16 flex justify-center">
				<div
					in:fly={{ y: 50, duration: 1200, delay: 1400 }}
					class="group relative w-full overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:w-1/2"
				>
					<div class="absolute inset-0 bg-gradient-to-br from-[var(--cerulean-blue)]/5 to-transparent"></div>
					<div class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[var(--cerulean-blue)] to-[var(--dark-blue)]"></div>

					<div class="relative p-8">
						<div class="mb-4 inline-flex rounded-lg bg-[var(--cerulean-blue)]/10 p-3">
							<svg class="h-6 w-6 text-[var(--cerulean-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
							</svg>
						</div>

						<h3 class="mb-3 text-xl font-bold text-[var(--dark-blue)]">
							PRA Machine
						</h3>
						<p class="mb-6 text-gray-600 leading-relaxed">
							The PRA Machine is an AI-powered tool that converts natural-language inputs into legally sound public records requests, sending them to designated California government agencies and institutions. It tracks all submitted requests in a centralized dashboard, monitoring response timelines and triggering automated follow-ups if agencies miss their 10-day California CPRA acknowledgment deadline. The tool also supports splitting complex requests into multiple targeted sub-requests to avoid “overly laborious” rejections and streamline response times.
						</p>

						<div class="flex items-center text-sm font-medium text-[var(--cerulean-blue)]">
							<span>Coming Soon</span>
							<svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

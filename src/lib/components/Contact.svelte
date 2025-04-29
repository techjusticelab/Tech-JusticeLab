<script lang="ts">
	import { fly } from 'svelte/transition';

	export let sectionVisible: { [key: string]: boolean } = {};
</script>

<section id="contact" class="bg-[var(--apple-white)] py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-10 text-center text-3xl font-bold text-[var(--dark-blue)]">
			Contact Us
		</h2>

		<div
			class="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl"
		>
			{#if sectionVisible['contact']}
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
					<div in:fly={{ x: -30, duration: 1200, delay: 300 }}>
						<h3 class="mb-4 text-xl font-semibold">Get in Touch</h3>
						<p class="mb-6 text-gray-700">
							We'd love to hear from you. Please feel free to contact us with any questions or
							inquiries.
						</p>

						<div class="space-y-4">
							<div class="group flex items-start">
								<svg
									class="mr-3 h-6 w-6 text-[var(--cerulean-blue)] transition-transform duration-300 group-hover:scale-110"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<div>
									<p class="font-medium">Email</p>
									<p
										class="text-gray-600 transition-colors duration-300 hover:text-[var(--cerulean-blue)]"
									>
										info@techjusticelab.org
									</p>
								</div>
							</div>

							<div class="group flex items-start">
								<svg
									class="mr-3 h-6 w-6 text-[var(--cerulean-blue)] transition-transform duration-300 group-hover:scale-110"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<div>
									<p class="font-medium">Location</p>
									<p class="text-gray-600">University of California, Berkeley</p>
								</div>
							</div>
						</div>
					</div>

					<div in:fly={{ x: 30, duration: 1200, delay: 600 }}>
						<h3 class="mb-4 text-xl font-semibold">Send a Message</h3>
						<form class="space-y-4">
							<div class="group">
								<label for="contact-name" class="block text-sm font-medium text-gray-700"
									>Name</label
								>
								<input
									type="text"
									id="contact-name"
									name="contact-name"
									class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm transition-all duration-300 focus:border-[var(--cerulean-blue)] focus:ring-[var(--cerulean-blue)]"
								/>
								<div
									class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-500 group-focus-within:w-full"
								></div>
							</div>

							<div class="group">
								<label for="contact-email" class="block text-sm font-medium text-gray-700"
									>Email</label
								>
								<input
									type="email"
									id="contact-email"
									name="contact-email"
									class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm transition-all duration-300 focus:border-[var(--cerulean-blue)] focus:ring-[var(--cerulean-blue)]"
								/>
								<div
									class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-500 group-focus-within:w-full"
								></div>
							</div>

							<div class="group">
								<label for="message" class="block text-sm font-medium text-gray-700">Message</label>
								<textarea
									id="message"
									name="message"
									rows="4"
									class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm transition-all duration-300 focus:border-[var(--cerulean-blue)] focus:ring-[var(--cerulean-blue)]"
								></textarea>
								<div
									class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-500 group-focus-within:w-full"
								></div>
							</div>

							<div>
								<button
									type="submit"
									class="group relative w-full overflow-hidden rounded-md bg-[var(--cerulean-blue)] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
								>
									<span class="relative z-10">Send Message</span>
									<span
										class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
									></span>
								</button>
							</div>
						</form>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

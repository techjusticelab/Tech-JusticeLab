<script lang="ts">
	import { fly } from 'svelte/transition';

	export let sectionVisible: { [key: string]: boolean } = {};
</script>

<section id="get-involved" class="bg-[var(--apple-white)] py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-10 text-center text-3xl font-bold text-[var(--dark-blue)]">
			Get Involved
		</h2>

		<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
			{#if sectionVisible['get-involved']}
				<div
					in:fly={{ x: -50, duration: 1400, delay: 300 }}
					class="rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl"
				>
					<h3 class="mb-4 text-2xl font-semibold text-[var(--cerulean-blue)]">Internships</h3>
					<p class="mb-6 text-gray-700">
						If you are interested in interning with the Berkeley Technology and Justice Lab, please
						fill out the form and we will contact you shortly.
					</p>

					<form class="space-y-4">
						<div class="group">
							<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm transition-all duration-300 focus:border-[var(--cerulean-blue)] focus:ring-[var(--cerulean-blue)]"
							/>
							<div
								class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-500 group-focus-within:w-full"
							></div>
						</div>

						<div class="group">
							<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm transition-all duration-300 focus:border-[var(--cerulean-blue)] focus:ring-[var(--cerulean-blue)]"
							/>
							<div
								class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-500 group-focus-within:w-full"
							></div>
						</div>

						<div class="group">
							<label for="interest" class="block text-sm font-medium text-gray-700"
								>Why are you interested?</label
							>
							<textarea
								id="interest"
								name="interest"
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
								<span class="relative z-10">Submit Application</span>
								<span
									class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
								></span>
							</button>
						</div>
					</form>
				</div>

				<div
					in:fly={{ x: 50, duration: 1400, delay: 600 }}
					class="rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl"
				>
					<h3 class="mb-4 text-2xl font-semibold text-[var(--cerulean-blue)]">Partner with us</h3>
					<p class="mb-6 text-gray-700">
						If you are interested in integrating one of our tools into your organization or office,
						please reach out at info@techjusticelab.org
					</p>

					<p class="mb-6 text-gray-700">
						If you believe that you or your organization might benefit from a new digital tool and
						would like to work with our team, consider partnering with us on a project!
					</p>

					<form class="space-y-4">
						<div class="group">
							<label for="partner-name" class="block text-sm font-medium text-gray-700">Name</label>
							<input
								type="text"
								id="partner-name"
								name="partner-name"
								class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm transition-all duration-300 focus:border-[var(--cerulean-blue)] focus:ring-[var(--cerulean-blue)]"
							/>
							<div
								class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-500 group-focus-within:w-full"
							></div>
						</div>

						<div class="group">
							<label for="organization" class="block text-sm font-medium text-gray-700"
								>Organization</label
							>
							<input
								type="text"
								id="organization"
								name="organization"
								class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm transition-all duration-300 focus:border-[var(--cerulean-blue)] focus:ring-[var(--cerulean-blue)]"
							/>
							<div
								class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-500 group-focus-within:w-full"
							></div>
						</div>

						<div class="group">
							<label for="description" class="block text-sm font-medium text-gray-700"
								>Brief Description</label
							>
							<textarea
								id="description"
								name="description"
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
								<span class="relative z-10">Submit Interest</span>
								<span
									class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
								></span>
							</button>
						</div>
					</form>
				</div>
			{/if}
		</div>
	</div>
</section>

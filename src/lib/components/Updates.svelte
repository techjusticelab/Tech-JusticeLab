<script lang="ts">
	import { fly } from 'svelte/transition';

	export let sectionVisible: { [key: string]: boolean } = {};
</script>

<section id="updates" class="bg-[var(--apple-white)] py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-10 text-center text-3xl font-bold text-[var(--dark-blue)]">
			Latest Updates
		</h2>

		{#if sectionVisible['updates']}
			<div
				in:fly={{ y: 30, duration: 1200, delay: 300 }}
				class="w-full rounded-xl bg-gradient-to-r from-[var(--cerulean-blue)] to-[var(--dark-blue)] p-8 text-center text-white shadow-lg sm:p-10"
			>
				<p class="text-xl font-semibold sm:text-2xl">
					Thank you to everyone who contributed to our Spring Fund Drive, we reached our goal because of you!
				</p>
				<p class="mt-4 text-sm text-white/80 sm:text-base">
					If you would like to continue supporting our work, please donate <a
						href="https://collect.crowded.me/collection/b268eb33-cbbe-414c-ba6a-52e44b208d38"
						target="_blank"
						rel="noopener noreferrer"
						class="underline hover:text-white"
					>here</a>.
				</p>
			</div>
		{/if}
	</div>
</section>

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
					The Berkeley Tech and Justice Lab has set up shop! We are newly housed in office space in the <a href="https://soco.place/" target="_blank" rel="noopener noreferrer" class="underline hover:text-white">Solidarity Collective</a> on Dwight Way. <a href="https://collect.crowded.me/collection/b268eb33-cbbe-414c-ba6a-52e44b208d38" target="_blank" rel="noopener noreferrer" class="underline hover:text-white">Donate today</a> to support our in person coalition building!
				</p>
			</div>
		{/if}
	</div>
</section>

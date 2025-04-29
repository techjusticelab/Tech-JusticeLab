<script lang="ts">
	import { scale } from 'svelte/transition';

	export let y: number = 0;
</script>

{#if y > 500}
	<button
		in:scale={{ duration: 600 }}
		on:click={() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}}
		class="fixed right-8 bottom-8 z-50 transform rounded-full bg-[var(--cerulean-blue)] p-4 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[var(--dark-blue)] hover:shadow-xl"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 10l7-7m0 0l7 7m-7-7v18"
			/>
		</svg>
	</button>
{/if}

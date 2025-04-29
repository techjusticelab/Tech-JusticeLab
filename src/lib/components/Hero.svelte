<script lang="ts">
	import { fly } from 'svelte/transition';

	export let y: number = 0;
	export let sectionVisible: { [key: string]: boolean } = {};

	function handleMouseMove(event: MouseEvent): void {
		// Mouse move handler can be implemented if needed
	}
</script>

<section
	id="home"
	class="relative overflow-hidden bg-[var(--cerulean-blue)]"
	on:mousemove={handleMouseMove}
>
	<!-- Parallax background using Tailwind translate -->
	<div
		class="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"
		style="transform: translateY({y * -0.1}px);"
	></div>

	<!-- Floating shapes for modern look -->
	<div
		class="absolute top-20 left-10 h-20 w-20 animate-pulse rounded-full bg-white/5"
		style="animation-duration: 8s;"
	></div>
	<div
		class="absolute right-10 bottom-40 h-32 w-32 animate-pulse rounded-full bg-white/5"
		style="animation-duration: 12s;"
	></div>
	<div
		class="absolute top-1/3 right-1/4 h-16 w-16 animate-pulse rounded-full bg-white/5"
		style="animation-duration: 10s;"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
		{#if sectionVisible['home']}
			<h1
				in:fly={{ y: 50, duration: 1500, delay: 300 }}
				class="garamond text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl"
			>
				Creating Digital Tools for Justice
			</h1>
			<p
				in:fly={{ y: 30, duration: 1500, delay: 600 }}
				class="mx-auto mt-6 max-w-3xl text-xl text-white"
			>
				Building technology to advance racial equity, decarcerate, and promote transparency in the
				criminal legal system.
			</p>
			<div in:fly={{ y: 30, duration: 1500, delay: 900 }} class="mt-10 flex justify-center">
				<a
					href="#our-work"
					class="group relative overflow-hidden rounded-md bg-white px-8 py-3 text-base font-medium text-[var(--cerulean-blue)] transition-all duration-300 hover:shadow-lg"
				>
					<span class="relative z-10">See Our Work</span>
					<span
						class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
					></span>
				</a>
				<a
					href="#get-involved"
					class="group relative ml-4 overflow-hidden rounded-md border-2 border-white bg-transparent px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-white/10"
				>
					<span class="relative z-10">Get Involved</span>
					<span
						class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/10 transition-transform duration-500 group-hover:scale-x-100"
					></span>
				</a>
			</div>
		{/if}
	</div>
</section>

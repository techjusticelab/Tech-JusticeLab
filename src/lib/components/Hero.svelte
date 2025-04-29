<script lang="ts">
	export let y: number = 0;
	export let sectionVisible: { [key: string]: boolean } = {};

	function handleMouseMove(event: MouseEvent): void {
		// Mouse move handler can be implemented if needed
	}

	// For animation triggers
	let isAnimated = false;

	// Trigger animations when component mounts
	import { onMount } from 'svelte';

	onMount(() => {
		// Small delay to ensure DOM is ready
		setTimeout(() => {
			isAnimated = true;
		}, 100);
	});
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

	<!-- Floating shapes with enhanced animations -->
	<!-- Original shapes -->
	<div class="shape-float-1 absolute top-20 left-10 h-20 w-20 rounded-full bg-white/5"></div>
	<div class="shape-float-2 absolute right-10 bottom-40 h-32 w-32 rounded-full bg-white/5"></div>
	<div class="shape-float-3 absolute top-1/3 right-1/4 h-16 w-16 rounded-full bg-white/5"></div>

	<!-- Additional shapes -->
	<div class="shape-float-4 absolute bottom-20 left-1/4 h-24 w-24 rounded-full bg-white/5"></div>
	<div class="shape-float-5 absolute top-1/2 left-1/3 h-12 w-12 rounded-full bg-white/5"></div>
	<div class="shape-float-6 absolute right-1/3 bottom-1/3 h-28 w-28 rounded-full bg-white/5"></div>

	<!-- Non-circular shapes for variety -->
	<div class="shape-float-7 absolute top-1/4 left-1/2 h-20 w-20 rotate-45 bg-white/5"></div>
	<div class="shape-float-8 absolute bottom-40 left-1/3 h-16 w-48 rounded-lg bg-white/4"></div>
	<div class="shape-float-9 absolute top-1/2 right-16 h-32 w-16 rounded-lg bg-white/3"></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
		{#if sectionVisible['home'] || true}
			<!-- Always show content but animate conditionally -->
			<h1
				class="garamond animate-fade-in animate-slide-up text-4xl leading-tight font-bold text-white delay-1 md:text-5xl lg:text-6xl {isAnimated
					? 'animated'
					: ''}"
			>
				Creating Digital Tools for Justice
			</h1>
			<p
				class="animate-fade-in animate-slide-up mx-auto mt-6 max-w-3xl text-xl text-white delay-2 {isAnimated
					? 'animated'
					: ''}"
			>
				Building technology to advance racial equity, decarcerate, and promote transparency in the
				criminal legal system.
			</p>
			<div
				class="animate-fade-in animate-slide-up mt-10 flex justify-center delay-3 {isAnimated
					? 'animated'
					: ''}"
			>
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

<style>
	/* Define animations that can be applied with classes */
	.animate-fade-in {
		opacity: 0;
		transition:
			opacity 1.5s ease,
			transform 1.5s ease;
	}

	.animate-slide-up {
		transform: translateY(100px);
		transition:
			opacity 1.5s ease,
			transform 1.5s ease;
	}

	.animated {
		opacity: 1;
		transform: translateY(0);
	}

	/* Staggered animation delays */
	.delay-1 {
		transition-delay: 300ms;
	}

	.delay-2 {
		transition-delay: 600ms;
	}

	.delay-3 {
		transition-delay: 900ms;
	}

	/* Enhanced floating shape animations */
	@keyframes float-1 {
		0% {
			transform: translateY(0) translateX(0) scale(1);
			opacity: 0.5;
		}
		25% {
			transform: translateY(-25px) translateX(15px) scale(1.1);
			opacity: 0.6;
		}
		50% {
			transform: translateY(20px) translateX(25px) scale(0.95);
			opacity: 0.5;
		}
		75% {
			transform: translateY(-30px) translateX(5px) scale(1.05);
			opacity: 0.6;
		}
		100% {
			transform: translateY(0) translateX(0) scale(1);
			opacity: 0.5;
		}
	}

	@keyframes float-2 {
		0% {
			transform: translateY(0) translateX(0) scale(1);
			opacity: 0.5;
		}
		33% {
			transform: translateY(35px) translateX(-25px) scale(1.15);
			opacity: 0.7;
		}
		66% {
			transform: translateY(-25px) translateX(-35px) scale(0.9);
			opacity: 0.5;
		}
		100% {
			transform: translateY(0) translateX(0) scale(1);
			opacity: 0.5;
		}
	}

	@keyframes float-3 {
		0% {
			transform: translateY(0) rotate(0) scale(1);
			opacity: 0.4;
		}
		20% {
			transform: translateY(-30px) rotate(5deg) scale(1.2);
			opacity: 0.7;
		}
		40% {
			transform: translateY(25px) rotate(15deg) scale(0.8);
			opacity: 0.3;
		}
		60% {
			transform: translateY(-35px) rotate(5deg) scale(1.1);
			opacity: 0.6;
		}
		80% {
			transform: translateY(20px) rotate(-5deg) scale(0.9);
			opacity: 0.4;
		}
		100% {
			transform: translateY(0) rotate(0) scale(1);
			opacity: 0.4;
		}
	}

	@keyframes float-4 {
		0% {
			transform: translateY(0) translateX(0) scale(1);
			opacity: 0.4;
		}
		25% {
			transform: translateY(-20px) translateX(25px) scale(1.1);
			opacity: 0.6;
		}
		50% {
			transform: translateY(30px) translateX(-10px) scale(0.9);
			opacity: 0.3;
		}
		75% {
			transform: translateY(-15px) translateX(-30px) scale(1.05);
			opacity: 0.5;
		}
		100% {
			transform: translateY(0) translateX(0) scale(1);
			opacity: 0.4;
		}
	}

	@keyframes float-5 {
		0% {
			transform: translateY(0) scale(1) rotate(0);
			opacity: 0.5;
		}
		20% {
			transform: translateY(-25px) scale(1.2) rotate(10deg);
			opacity: 0.7;
		}
		40% {
			transform: translateY(15px) scale(0.8) rotate(25deg);
			opacity: 0.4;
		}
		60% {
			transform: translateY(-10px) scale(1.1) rotate(5deg);
			opacity: 0.6;
		}
		80% {
			transform: translateY(20px) scale(0.9) rotate(-15deg);
			opacity: 0.3;
		}
		100% {
			transform: translateY(0) scale(1) rotate(0);
			opacity: 0.5;
		}
	}

	@keyframes float-6 {
		0% {
			transform: translateY(0) translateX(0);
			opacity: 0.3;
		}
		20% {
			transform: translateY(40px) translateX(20px);
			opacity: 0.5;
		}
		40% {
			transform: translateY(20px) translateX(-30px);
			opacity: 0.3;
		}
		60% {
			transform: translateY(-30px) translateX(-20px);
			opacity: 0.5;
		}
		80% {
			transform: translateY(-40px) translateX(30px);
			opacity: 0.3;
		}
		100% {
			transform: translateY(0) translateX(0);
			opacity: 0.3;
		}
	}

	@keyframes float-7 {
		0% {
			transform: translateY(0) rotate(45deg) scale(1);
			opacity: 0.4;
		}
		25% {
			transform: translateY(-15px) rotate(60deg) scale(1.2);
			opacity: 0.6;
		}
		50% {
			transform: translateY(25px) rotate(30deg) scale(0.8);
			opacity: 0.3;
		}
		75% {
			transform: translateY(10px) rotate(70deg) scale(1.1);
			opacity: 0.5;
		}
		100% {
			transform: translateY(0) rotate(45deg) scale(1);
			opacity: 0.4;
		}
	}

	@keyframes float-8 {
		0% {
			transform: translateX(0) skewX(0) scale(1);
			opacity: 0.4;
		}
		33% {
			transform: translateX(30px) skewX(5deg) scale(1.05);
			opacity: 0.6;
		}
		66% {
			transform: translateX(-40px) skewX(-8deg) scale(0.95);
			opacity: 0.3;
		}
		100% {
			transform: translateX(0) skewX(0) scale(1);
			opacity: 0.4;
		}
	}

	@keyframes float-9 {
		0% {
			transform: translateY(0) rotate(0) scaleY(1);
			opacity: 0.3;
		}
		25% {
			transform: translateY(-30px) rotate(3deg) scaleY(1.1);
			opacity: 0.5;
		}
		50% {
			transform: translateY(20px) rotate(-5deg) scaleY(0.9);
			opacity: 0.2;
		}
		75% {
			transform: translateY(-15px) rotate(8deg) scaleY(1.2);
			opacity: 0.4;
		}
		100% {
			transform: translateY(0) rotate(0) scaleY(1);
			opacity: 0.3;
		}
	}

	/* Apply animations to shapes with varied durations and delays */
	.shape-float-1 {
		animation: float-1 12s ease-in-out infinite;
	}

	.shape-float-2 {
		animation: float-2 18s ease-in-out infinite;
		animation-delay: 1s;
	}

	.shape-float-3 {
		animation: float-3 15s ease-in-out infinite;
		animation-delay: 2s;
	}

	.shape-float-4 {
		animation: float-4 20s ease-in-out infinite;
		animation-delay: 0.5s;
	}

	.shape-float-5 {
		animation: float-5 14s ease-in-out infinite;
		animation-delay: 3s;
	}

	.shape-float-6 {
		animation: float-6 25s ease-in-out infinite;
		animation-delay: 1.5s;
	}

	.shape-float-7 {
		animation: float-7 16s ease-in-out infinite;
		animation-delay: 2.5s;
	}

	.shape-float-8 {
		animation: float-8 22s ease-in-out infinite;
		animation-delay: 1s;
	}

	.shape-float-9 {
		animation: float-9 19s ease-in-out infinite;
		animation-delay: 3.5s;
	}
</style>

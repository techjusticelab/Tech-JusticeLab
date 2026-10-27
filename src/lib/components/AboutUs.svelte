<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	export let sectionVisible: { [key: string]: boolean } = {};
</script>

<section id="about-us" class="bg-[var(--dark-blue)] py-16 sm:py-20">
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		{#if sectionVisible['about-us'] || sectionVisible['who-we-are']}
			<div class="text-center">
				<p in:fade={{ duration: 800, delay: 100 }} class="mb-6 text-xs font-medium tracking-widest text-white/50 uppercase">Our Mission</p>
				<div in:fly={{ y: 20, duration: 1000, delay: 200 }} class="mx-auto mb-8 h-px w-16 bg-sky-400/60"></div>
				<p in:fade={{ duration: 1200, delay: 300 }} class="garamond mx-auto max-w-3xl text-xl leading-relaxed text-white/90 sm:text-2xl sm:leading-relaxed">
					The Berkeley Technology and Justice Lab is a 501(c)(3) nonprofit that builds free and low-cost digital tools for organizations and individuals advancing positive social change.
				</p>
				<p in:fade={{ duration: 1200, delay: 500 }} class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
					We believe that emerging technologies, when made accessible and used ethically, can be powerful instruments of meaningful change — and that those working to better our world deserve equal access to them.
				</p>
				<div in:fly={{ y: 20, duration: 1000, delay: 700 }} class="mx-auto mt-8 h-px w-16 bg-sky-400/60"></div>
			</div>
		{/if}
	</div>
</section>

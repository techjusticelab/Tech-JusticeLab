<script lang="ts">
	import { fade } from 'svelte/transition';

	export let sectionVisible: { [key: string]: boolean } = {};
</script>

<section id="about-us" class="bg-white py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-4 text-center text-2xl font-bold text-[var(--dark-blue)] sm:text-3xl">
			Who We Are
		</h2>

		{#if sectionVisible['about-us'] || sectionVisible['who-we-are']}
			<div class="mx-auto max-w-3xl">
				<p in:fade={{ duration: 1200 }} class="text-center text-base sm:text-lg">
					The Berkeley Technology and Justice Lab is a 501(c)(3) non profit that builds free and low-cost digital tools for organizations and individuals advancing positive social change. We believe that emerging technologies, when made accessible and used ethically, can be powerful instruments of meaningful change, and that those working to better our world deserve equal access to them.
				</p>
			</div>
		{/if}
	</div>
</section>

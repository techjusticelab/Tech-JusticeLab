<script lang="ts">
	import { scale } from 'svelte/transition';
	import bcljc from '$lib/assets/partners/bcl&jc.jpg';
	import cpe from '$lib/assets/partners/cpe.png';
	import sqsw from '$lib/assets/partners/sqsw.jpg';
	import laccpd from '$lib/assets/partners/lapd.jpg';

	export let sectionVisible: { [key: string]: boolean } = {};

	// Store partners in an array for easy addition/removal
	const partners = [
		{
			id: 1,
			name: 'San Quentin Skunkworks',
			image: sqsw,
			delay: 300
		},
		{
			id: 2,
			name: 'Berkeley Criminal Law and Justice Center',
			image: bcljc,
			delay: 400
		},
		{
			id: 3,
			name: "Los Angeles County Public Defender's Office",
			image: laccpd,
			delay: 500
		}
		// Uncomment to add back in
		// {
		//	id: 4,
		//	name: "Center for Policing Equity",
		//	image: cpe,
		//	delay: 600
		// },
		// Add more partners easily by adding to this array
	];
</script>

<section id="partners" class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-4 text-center text-3xl font-bold text-[var(--dark-blue)]">Partners</h2>
		<p class="mb-10 text-center text-lg">
			The Berkeley Technology and Justice Lab team is thankful for all of our amazing partners
		</p>

		{#if sectionVisible['partners']}
			<!-- Responsive grid that adapts based on number of partners -->
			<div class="mx-auto max-w-4xl">
				<!-- Adaptive grid layout -->
				<div
					class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-{Math.min(partners.length, 4)}"
				>
					{#each partners as partner (partner.id)}
						<div
							in:scale={{ duration: 800, delay: partner.delay }}
							class="flex items-center justify-center rounded-lg bg-[var(--apple-white)] p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
						>
							<div class="text-center">
								<div
									class="relative mx-auto mb-2 h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28 md:h-32 md:w-32"
								>
									<img
										src={partner.image}
										alt={partner.name}
										class="h-full w-full object-cover transition-all duration-500 hover:scale-110"
									/>
									<div
										class="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--cerulean-blue)]/10 opacity-0 transition-opacity duration-300 hover:opacity-100"
									></div>
								</div>
								<p class="text-sm font-medium sm:text-base">{partner.name}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	/* Dynamic grid columns based on partner count */
	@media (min-width: 1024px) {
		.grid-cols-1 {
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}

		.grid-cols-2 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.grid-cols-3 {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.grid-cols-4 {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>

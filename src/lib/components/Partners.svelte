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

<section id="partners" class="bg-white py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-4 text-center text-2xl font-bold text-[var(--dark-blue)] sm:text-3xl">
			Partners
		</h2>
		<p class="mb-6 text-center text-base sm:mb-10 sm:text-lg">
			The Berkeley Technology and Justice Lab team is thankful for all of our amazing partners
		</p>

		{#if sectionVisible['partners']}
			<div class="mx-auto">
				<!-- Single row flex layout on desktop, grid on mobile/tablet -->
				<div
					class="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap lg:flex-nowrap lg:justify-evenly"
				>
					{#each partners as partner (partner.id)}
						<div
							in:scale={{ duration: 800, delay: partner.delay }}
							class="mt-4 mb-6 flex h-4/5 w-4/5 items-center justify-center rounded-lg bg-[var(--apple-white)] p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg sm:mx-2 sm:mb-0 sm:w-5/12 md:mx-4 md:h-[25vh] md:w-[25vw]"
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

				<!-- Add Partner Button (Optional) -->
				{#if partners.length < 6}
					<div class="mt-8 text-center">
						<a
							href="#get-involved"
							class="inline-block rounded-md border border-[var(--cerulean-blue)] px-5 py-2 text-sm font-medium text-[var(--cerulean-blue)] transition-colors duration-300 hover:bg-[var(--cerulean-blue)]/5"
						>
							Become a Partner
						</a>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</section>

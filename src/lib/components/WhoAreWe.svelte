<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import aarya from '$lib/assets/team/arryamuk0.jpg';
	import alexfor from '$lib/assets/team/alexfor.jpg';
	import stephenok from '$lib/assets/team/stepheno.jpg';
	import mayahow from '$lib/assets/team/mayahow.jpg';

	export let sectionVisible: { [key: string]: boolean } = {};

	// Store team members in an array for easy addition/removal
	const teamMembers = [
		{
			id: 1,
			name: 'Maya Howard',
			title: 'Director of Operations',
			image: mayahow,
			delay: 500,
			linkedin: 'https://www.linkedin.com/in/maya-dale-howard-651a6129b/',
			website: null
		},
		{
			id: 2,
			name: 'Aarya Mukherjee',
			title: 'Managing Director',
			image: aarya,
			delay: 700,
			linkedin: 'https://www.linkedin.com/in/aarya-mukherjee-293089251/',
			website: 'https://www.dailycal.org/users/profile/aarya%20mukherjee/'
		},
		{
			id: 3,
			name: 'Stephen Okita',
			title: 'Head of Software Development',
			image: stephenok,
			delay: 900,
			linkedin: 'https://www.linkedin.com/in/stephen-okita/',
			website: 'https://stephenokita.com'
		},
		{
			id: 4,
			name: 'Alex Forman',
			title: 'Head of Engineering',
			image: alexfor,
			delay: 1100,
			linkedin: 'https://www.linkedin.com/in/alex-k-forman/',
			website: null
		}
		// Add more team members by adding to this array
	];

	// Function to calculate optimal grid columns based on team size
	function getGridCols(teamSize: number) {
		if (teamSize <= 3) return teamSize;
		return teamSize <= 4 ? 4 : 3; // Use 4 columns for 4 members, 3 columns for 5+ members
	}

	// Function to get responsive class based on team size
	$: gridColsClass = `grid-cols-1 sm:grid-cols-${Math.min(2, teamMembers.length)} lg:grid-cols-${getGridCols(teamMembers.length)}`;
</script>

<section id="who-we-are" class="bg-white py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-4 text-center text-2xl font-bold text-[var(--dark-blue)] sm:text-3xl">
			Who We Are
		</h2>

		{#if sectionVisible['who-we-are']}
			<div class="mx-auto mb-10 max-w-3xl sm:mb-16">
				<p in:fade={{ duration: 1200 }} class="text-center text-base sm:text-lg">
					<strong>Mission Statement:</strong> The Berkeley Technology and Justice Lab creates and builds
					digital tools in partnership with defence attorneys, incarcerated people and their loved ones,
					and criminal justice organizers. Our goal is to create accessible tools that can lead to material
					change in conditions for incarcerated people, advance racial equity, decarcerate, and promote
					transparency in the criminal legal system.
				</p>
			</div>

			<h3
				in:fade={{ duration: 1200, delay: 300 }}
				class="garamond mb-6 text-center text-xl font-bold text-[var(--dark-blue)] sm:mb-8 sm:text-2xl"
			>
				Our Team
			</h3>

			<div class="mx-auto max-w-6xl">
				<!-- Responsive grid that adapts based on team size -->
				<div class="grid {gridColsClass} gap-4 sm:gap-6 md:gap-8">
					{#each teamMembers as member (member.id)}
						<div
							in:scale={{ duration: 800, delay: member.delay }}
							class="rounded-lg bg-[var(--apple-white)] p-4 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6"
						>
							<div
								class="mx-auto mb-3 h-24 w-24 overflow-hidden rounded-full sm:mb-4 sm:h-28 sm:w-28 md:h-32 md:w-32"
							>
								<img
									src={member.image}
									alt={member.name}
									class="h-full w-full object-cover transition-all duration-700 hover:scale-110"
								/>
							</div>
							<h3 class="mb-1 text-lg font-semibold sm:text-xl">{member.name}</h3>
							<p class="text-sm text-gray-600 sm:text-base">{member.title}</p>

							<!-- Only show social links if the person has them -->
							{#if member.linkedin || member.website}
								<div class="mt-3 flex justify-center space-x-4">
									{#if member.linkedin}
										<a
											href={member.linkedin}
											target="_blank"
											rel="noopener noreferrer"
											class="text-gray-500 transition-colors duration-300 hover:text-[var(--cerulean-blue)]"
											title="LinkedIn Profile"
										>
											<svg class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
												<path
													d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
												/>
											</svg>
										</a>
									{/if}
									{#if member.website}
										<a
											href={member.website}
											target="_blank"
											rel="noopener noreferrer"
											class="text-gray-500 transition-colors duration-300 hover:text-[var(--cerulean-blue)]"
											title="Personal Website"
										>
											<svg class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
												<path
													d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"
												/>
											</svg>
										</a>
									{/if}
								</div>
							{/if}
						</div>
					{/each}
				</div>

				<!-- Additional team information or join us section -->
				<div class="mt-12 sm:mt-16">
					<div in:fade={{ duration: 1000, delay: 1300 }} class="text-center">
						<h4 class="mb-3 text-lg font-semibold text-[var(--dark-blue)] sm:text-xl">
							Join Our Team
						</h4>
						<p class="mx-auto mb-6 max-w-2xl text-sm text-gray-700 sm:text-base">
							We're always looking for passionate individuals who want to use their skills to
							advance justice and equity.
						</p>
						<a
							href="#get-involved"
							class="inline-block rounded-md bg-[var(--cerulean-blue)] px-6 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[var(--dark-blue)]"
						>
							Join Here
						</a>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	/* Dynamic grid columns based on team size */
	@media (min-width: 640px) {
		.grid-cols-1 {
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}

		.sm\:grid-cols-1 {
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}

		.sm\:grid-cols-2 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.lg\:grid-cols-1 {
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}

		.lg\:grid-cols-2 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.lg\:grid-cols-3 {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.lg\:grid-cols-4 {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>

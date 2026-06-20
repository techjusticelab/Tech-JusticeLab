<script lang="ts">
	import { scale } from 'svelte/transition';
	import andreacrider from '$lib/assets/team/andreacrider.jpg';
	import billdrummond from '$lib/assets/team/billdrummond.jpg';
	import avneetchattha from '$lib/assets/team/avneetchattha.png';

	export let sectionVisible: { [key: string]: boolean } = {};

	const boardMembers = [
		{
			id: 1,
			name: 'Andrea Crider',
			title: 'Staff Attorney/Lecturer',
			org: "UC Berkeley Law's Criminal Law and Justice Center",
			image: andreacrider,
			linkedin: null,
			delay: 300
		},
		{
			id: 2,
			name: 'William J. Drummond',
			title: 'Journalist, Professor',
			org: 'UC Berkeley Graduate School of Journalism',
			image: billdrummond,
			linkedin: null,
			delay: 500
		},
		{
			id: 3,
			name: 'Avneet Chattha',
			title: 'Deputy Public Defender, Los Angeles County',
			org: 'BearisterAI',
			image: avneetchattha,
			linkedin: null,
			delay: 700
		}
		// Add more board members here
	];
</script>

<section id="board" class="bg-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-4 text-center text-4xl font-bold text-[var(--dark-blue)]">Our Board</h2>
		<p class="mb-16 text-center text-gray-500">
			The Berkeley Technology and Justice Lab is guided by an advisory board of experts across law, technology, and social justice.
		</p>

		{#if sectionVisible['board']}
			<div class="flex flex-wrap justify-center gap-8">
				{#each boardMembers as member (member.id)}
					<div
						in:scale={{ duration: 800, delay: member.delay }}
						class="flex w-full flex-col items-center rounded-xl bg-[var(--apple-white)] p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:w-72"
					>
						<div class="mb-5 h-32 w-32 overflow-hidden rounded-full border-4 border-[var(--cerulean-blue)]/20">
							{#if member.image}
								<img src={member.image} alt={member.name} class="h-full w-full object-cover" />
							{:else}
								<div class="flex h-full w-full items-center justify-center bg-[var(--cerulean-blue)]/10">
									<svg class="h-12 w-12 text-[var(--cerulean-blue)]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
									</svg>
								</div>
							{/if}
						</div>

						<h3 class="garamond mb-1 text-xl font-bold text-[var(--dark-blue)]">{member.name}</h3>
						<p class="mb-1 text-sm font-medium text-[var(--cerulean-blue)]">{member.title}</p>
						<p class="mb-4 text-xs text-gray-500">{member.org}</p>

						{#if member.linkedin}
							<a
								href={member.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1 text-xs font-medium text-[var(--cerulean-blue)] hover:underline"
							>
								<svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
								</svg>
								LinkedIn
							</a>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

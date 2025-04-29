<script lang="ts">
	import aarya from '$lib/assets/team/aaryamuk1.jpg';
	import alexfor from '$lib/assets/team/alexfor.jpg';
	import stephenok from '$lib/assets/team/stepheno.jpg';
	import mayahow from '$lib/assets/team/mayahow.jpg';

	import bcljc from '$lib/assets/partners/bcl&jc.jpg';
	import cpe from '$lib/assets/partners/cpe.png';
	import sqsw from '$lib/assets/partners/sqsw.jpg';
	import laccpd from '$lib/assets/partners/lapd.jpg';

	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { spring } from 'svelte/motion';

	// For intersection observer animations
	let sections: (HTMLElement | null)[] = [];
	let sectionVisible: { [key: string]: boolean } = {};

	// For parallax effect in hero section
	let y = 0;

	// For animated counters
	let countersStarted = false;
	let projectsCount = 0;
	let partnersCount = 0;
	let peopleHelpedCount = 0;
	const targetCounts = { projects: 12, partners: 8, peopleHelped: 500 };

	// For mouse position tracking
	let mouseX = 0;
	let mouseY = 0;

	function startCounters(): void {
		if (countersStarted) return;
		countersStarted = true;

		const duration = 2000; // 2 seconds
		const steps = 60;
		const interval = duration / steps;

		let currentStep = 0;

		const timer = setInterval(() => {
			currentStep++;
			const progress = currentStep / steps;

			projectsCount = Math.round(targetCounts.projects * progress);
			partnersCount = Math.round(targetCounts.partners * progress);
			peopleHelpedCount = Math.round(targetCounts.peopleHelped * progress);

			if (currentStep >= steps) {
				clearInterval(timer);
			}
		}, interval);
	}

	function handleMouseMove(event: MouseEvent): void {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}

	onMount(() => {
		// Implement smooth scrolling for anchor links
		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();

				const targetId = this.getAttribute('href');
				if (!targetId) return;

				const targetElement = document.querySelector(targetId);

				if (targetElement) {
					targetElement.scrollIntoView({
						behavior: 'smooth'
					});

					// Update URL without page reload
					history.pushState(null, null, targetId);
				}
			});
		});

		// Setup intersection observer for section animations
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.target.id) {
						sectionVisible[entry.target.id] = true;

						// Start counters if stats section is visible
						if (entry.target.id === 'stats-section') {
							startCounters();
						}
					}
				});
			},
			{ threshold: 0.2 }
		);

		sections.forEach((section) => {
			if (section) {
				observer.observe(section);
			}
		});
	});
</script>

<svelte:window bind:scrollY={y} />

<!-- Hero Section -->
<section
	id="home"
	bind:this={sections[0]}
	on:mousemove={handleMouseMove}
	class="relative overflow-hidden bg-[var(--cerulean-blue)]"
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
				in:fly={{ y: 50, duration: 1000, delay: 200 }}
				class="garamond text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl"
			>
				Creating Digital Tools for Justice
			</h1>
			<p
				in:fly={{ y: 30, duration: 1000, delay: 400 }}
				class="mx-auto mt-6 max-w-3xl text-xl text-white"
			>
				Building technology to advance racial equity, promote transparency, and support deceleration
				in the criminal legal system.
			</p>
			<div in:fly={{ y: 30, duration: 1000, delay: 600 }} class="mt-10 flex justify-center">
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

<!-- Stats Section
<section id="stats-section" class="bg-white py-12" bind:this={sections[1]}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		{#if sectionVisible['stats-section']}
			<div class="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
				<div
					in:fade={{ duration: 800, delay: 200 }}
					class="transform p-6 transition-transform duration-300 hover:scale-105"
				>
					<div class="text-4xl font-bold text-[var(--cerulean-blue)]">{projectsCount}</div>
					<p class="text-lg text-gray-600">Projects Completed</p>
				</div>

				<div
					in:fade={{ duration: 800, delay: 400 }}
					class="transform p-6 transition-transform duration-300 hover:scale-105"
				>
					<div class="text-4xl font-bold text-[var(--cerulean-blue)]">{partnersCount}</div>
					<p class="text-lg text-gray-600">Partner Organizations</p>
				</div>

				<div
					in:fade={{ duration: 800, delay: 600 }}
					class="transform p-6 transition-transform duration-300 hover:scale-105"
				>
					<div class="text-4xl font-bold text-[var(--cerulean-blue)]">{peopleHelpedCount}+</div>
					<p class="text-lg text-gray-600">People Helped</p>
				</div>
			</div>
		{/if}
	</div>
</section> -->

<!-- Updates Section -->
<section class="bg-[var(--apple-white)] py-16" bind:this={sections[1]}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-10 text-center text-3xl font-bold text-[var(--dark-blue)]">
			Latest Updates
		</h2>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				in:fly={{ y: 30, duration: 600, delay: 200 }}
				class="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
				on:mousemove={handleMouseMove}
			>
				<h3 class="mb-2 text-xl font-semibold">RJA Tool Development</h3>
				<p class="mb-4 text-gray-600">
					Our Racial Justice Act tool is being piloted with the Los Angeles County Public Defender's
					Office.
				</p>
				<a
					href="#our-work"
					class="group inline-flex items-center font-medium text-[var(--cerulean-blue)] hover:underline"
					>Learn more
					<span
						class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-300 group-hover:w-full"
					></span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</a>
			</div>

			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				in:fly={{ y: 30, duration: 600, delay: 400 }}
				class="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
				on:mousemove={handleMouseMove}
			>
				<h3 class="mb-2 text-xl font-semibold">New Partnerships</h3>
				<p class="mb-4 text-gray-600">
					We're expanding our network of partners to create more impactful tools for justice.
				</p>
				<a
					href="#partners"
					class="group inline-flex items-center font-medium text-[var(--cerulean-blue)] hover:underline"
					>Learn more
					<span
						class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-300 group-hover:w-full"
					></span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</a>
			</div>

			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				in:fly={{ y: 30, duration: 600, delay: 600 }}
				class="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
				on:mousemove={handleMouseMove}
			>
				<h3 class="mb-2 text-xl font-semibold">Internship Opportunities</h3>
				<p class="mb-4 text-gray-600">
					Join our team of developers working on technology for social justice.
				</p>
				<a
					href="#get-involved"
					class="group inline-flex items-center font-medium text-[var(--cerulean-blue)] hover:underline"
					>Learn more
					<span
						class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-300 group-hover:w-full"
					></span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Who We Are Section -->
<section id="who-we-are" class="bg-white py-16" bind:this={sections[2]}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-4 text-center text-3xl font-bold text-[var(--dark-blue)]">Who We Are</h2>

		{#if sectionVisible['who-we-are']}
			<div class="mx-auto mb-16 max-w-3xl">
				<p in:fade={{ duration: 800 }} class="text-center text-lg">
					<strong>Mission Statement:</strong> The Berkeley Technology and Justice Lab creates and builds
					digital tools for use by defense attorneys, incarcerated people and their loved ones, and criminal
					justice organizers. Our goal is to create accessible tools that can lead to material change
					in conditions for incarcerated people, advance racial equity, decarcerate, and promote transparency
					in the criminal legal system.
				</p>
			</div>

			<h3
				in:fade={{ duration: 800, delay: 200 }}
				class="garamond mb-8 text-center text-2xl font-bold text-[var(--dark-blue)]"
			>
				Our Team
			</h3>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				<div
					in:scale={{ duration: 600, delay: 300 }}
					class="rounded-lg bg-[var(--apple-white)] p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
				>
					<div class="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
						<img
							src={mayahow}
							alt="Maya Howard"
							class="h-full w-full object-cover transition-all duration-700 hover:scale-110"
						/>
					</div>
					<h3 class="mb-1 text-xl font-semibold">Maya Howard</h3>
					<p class="text-gray-600">Director of Operations</p>
				</div>

				<div
					in:scale={{ duration: 600, delay: 400 }}
					class="rounded-lg bg-[var(--apple-white)] p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
				>
					<div class="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
						<img
							src={aarya}
							alt="Aarya Mukherjee"
							class="h-full w-full object-cover transition-all duration-700 hover:scale-110"
						/>
					</div>
					<h3 class="mb-1 text-xl font-semibold">Aarya Mukherjee</h3>
					<p class="text-gray-600">Strategic Director</p>
				</div>

				<div
					in:scale={{ duration: 600, delay: 500 }}
					class="rounded-lg bg-[var(--apple-white)] p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
				>
					<div class="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
						<img
							src={stephenok}
							alt="Stephen Okita"
							class="h-full w-full object-cover transition-all duration-700 hover:scale-110"
						/>
					</div>
					<h3 class="mb-1 text-xl font-semibold">Stephen Okita</h3>
					<p class="text-gray-600">Lead Developer</p>
				</div>

				<div
					in:scale={{ duration: 600, delay: 600 }}
					class="rounded-lg bg-[var(--apple-white)] p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
				>
					<div class="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
						<img
							src={alexfor}
							alt="Alex Forman"
							class="h-full w-full object-cover transition-all duration-700 hover:scale-110"
						/>
					</div>
					<h3 class="mb-1 text-xl font-semibold">Alex Forman</h3>
					<p class="text-gray-600">Lead Developer</p>
				</div>
			</div>
		{/if}
	</div>
</section>

<!-- Our Work Section -->
<section id="our-work" class="bg-[var(--apple-white)] py-16" bind:this={sections[3]}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-10 text-center text-3xl font-bold text-[var(--dark-blue)]">Our Work</h2>

		<div class="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2">
			{#if sectionVisible['our-work']}
				<div
					in:fly={{ x: -50, duration: 800 }}
					class="relative overflow-hidden rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl"
				>
					<!-- Modern gradient accent using Tailwind -->
					<div
						class="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-[var(--cerulean-blue)] to-[var(--dark-blue)]"
					></div>

					<h3 class="mb-4 pl-4 text-2xl font-semibold text-[var(--cerulean-blue)]">
						Racial Justice Act Tool
					</h3>
					<p class="mb-6 pl-4 text-gray-700">
						The Berkeley Technology and Justice Lab, in partnership with the Berkeley Criminal Law
						and Justice Center, has created a textual analysis tool that identifies instances of
						racialized language per claims A1 and A2 of the California Racial Justice Act. In its
						current stage the tool is primarily for use by public defenders and is designed using
						training data from each county to be able to identify the racial nuances of the given
						geographic area. The tool is set to be piloted with the Los Angeles County Public
						Defender's Office, after which it can be expanded to PD offices throughout the state.
						Long term they hope to collaborate with other organizations creating RJA tools to build
						an end-to-end tool for use by defense attorneys, family/loved ones of incarcerated
						people, and the general public to access digital tools for each step in the RJA filing
						process.
					</p>
					<div class="flex items-center pl-4">
						<button
							class="group relative overflow-hidden rounded-md bg-[var(--cerulean-blue)] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
						>
							<span class="relative z-10">View Demo</span>
							<span
								class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
							></span>
						</button>
					</div>
				</div>

				<div
					in:fly={{ x: 50, duration: 800 }}
					class="relative overflow-hidden rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl"
				>
					<!-- Modern gradient accent using Tailwind -->
					<div
						class="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-[var(--cerulean-blue)] to-[var(--dark-blue)]"
					></div>

					<h3 class="mb-4 pl-4 text-2xl font-semibold text-[var(--cerulean-blue)]">CPDA Tool</h3>
					<p class="mb-6 pl-4 text-gray-700">
						Our CPDA Tool is currently in development to support California Public Defenders
						Association members with digital resources that streamline case management and evidence
						analysis. More details coming soon.
					</p>
					<div class="flex items-center pl-4">
						<button
							class="group relative overflow-hidden rounded-md bg-[var(--cerulean-blue)] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
						>
							<span class="relative z-10">Coming Soon</span>
							<span
								class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
							></span>
						</button>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Resources Section -->
<section id="resources" class="bg-white py-16" bind:this={sections[4]}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-10 text-center text-3xl font-bold text-[var(--dark-blue)]">Resources</h2>

		<div class="mx-auto max-w-4xl">
			{#if sectionVisible['resources']}
				<div
					in:fly={{ y: 30, duration: 800 }}
					class="relative mb-8 overflow-hidden rounded-lg bg-[var(--apple-white)] p-8 shadow-md transition-all duration-300 hover:shadow-xl"
				>
					<!-- Modern subtle pattern using Tailwind bg-opacity -->
					<div
						class="bg-opacity-5 pattern-dots pattern-opacity-10 pattern-size-2 pointer-events-none absolute inset-0"
					></div>

					<h3 class="relative z-10 mb-4 text-xl font-semibold">Racial Justice Act Resources</h3>
					<p class="relative z-10 mb-4">
						For more information about the Racial Justice Act and to find resources please visit
						RJAaction.org
					</p>
					<div class="relative z-10 mb-6 flex">
						<a
							href="https://rjaaction.org"
							target="_blank"
							rel="noopener noreferrer"
							class="group relative overflow-hidden rounded-md bg-[var(--cerulean-blue)] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
						>
							<span class="relative z-10">Visit RJA Action</span>
							<span
								class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
							></span>
						</a>
					</div>

					<p class="relative z-10 mb-4">
						Visit the Ella Baker Center's website to access the RJA 4 All Guide - provided in
						English and Spanish.
					</p>
					<div class="relative z-10 flex">
						<a
							href="https://ellabakercenter.org"
							target="_blank"
							rel="noopener noreferrer"
							class="group relative overflow-hidden rounded-md bg-[var(--cerulean-blue)] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
						>
							<span class="relative z-10">Ella Baker Center RJA Guide</span>
							<span
								class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
							></span>
						</a>
					</div>
				</div>

				<div
					in:fly={{ y: 30, duration: 800, delay: 200 }}
					class="rounded-lg bg-[var(--apple-white)] p-8 shadow-md transition-all duration-300 hover:shadow-xl"
				>
					<h3 class="mb-4 text-xl font-semibold">Additional Resources</h3>
					<ul class="space-y-4 text-gray-700">
						<li
							class="flex transform items-start transition-transform duration-300 hover:translate-x-2"
						>
							<svg
								class="mr-2 h-6 w-6 text-[var(--cerulean-blue)]"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
							<a href="#" class="transition-colors duration-300 hover:text-[var(--cerulean-blue)]"
								>California Public Defender Association Resources</a
							>
						</li>
						<li
							class="flex transform items-start transition-transform duration-300 hover:translate-x-2"
						>
							<svg
								class="mr-2 h-6 w-6 text-[var(--cerulean-blue)]"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
							<a href="#" class="transition-colors duration-300 hover:text-[var(--cerulean-blue)]"
								>Berkeley Criminal Law and Justice Center</a
							>
						</li>
						<li
							class="flex transform items-start transition-transform duration-300 hover:translate-x-2"
						>
							<svg
								class="mr-2 h-6 w-6 text-[var(--cerulean-blue)]"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
							<a href="#" class="transition-colors duration-300 hover:text-[var(--cerulean-blue)]"
								>Center for Policing Equity</a
							>
						</li>
					</ul>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Get Involved Section -->
<section id="get-involved" class="bg-[var(--apple-white)] py-16" bind:this={sections[5]}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-10 text-center text-3xl font-bold text-[var(--dark-blue)]">
			Get Involved
		</h2>

		<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
			{#if sectionVisible['get-involved']}
				<div
					in:fly={{ x: -50, duration: 800 }}
					class="rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl"
				>
					<h3 class="mb-4 text-2xl font-semibold text-[var(--cerulean-blue)]">Internships</h3>
					<p class="mb-6 text-gray-700">
						If you are interested in interning with the Berkeley Technology and Justice Lab, please
						fill out the form and we will contact you shortly.
					</p>

					<form class="space-y-4">
						<div class="group">
							<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm transition-all duration-300 focus:border-[var(--cerulean-blue)] focus:ring-[var(--cerulean-blue)]"
							/>
							<div
								class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-500 group-focus-within:w-full"
							></div>
						</div>

						<div class="group">
							<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm transition-all duration-300 focus:border-[var(--cerulean-blue)] focus:ring-[var(--cerulean-blue)]"
							/>
							<div
								class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-500 group-focus-within:w-full"
							></div>
						</div>

						<div class="group">
							<label for="interest" class="block text-sm font-medium text-gray-700"
								>Why are you interested?</label
							>
							<textarea
								id="interest"
								name="interest"
								rows="4"
								class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm transition-all duration-300 focus:border-[var(--cerulean-blue)] focus:ring-[var(--cerulean-blue)]"
							></textarea>
							<div
								class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-500 group-focus-within:w-full"
							></div>
						</div>

						<div>
							<button
								type="submit"
								class="group relative w-full overflow-hidden rounded-md bg-[var(--cerulean-blue)] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
							>
								<span class="relative z-10">Submit Application</span>
								<span
									class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
								></span>
							</button>
						</div>
					</form>
				</div>

				<div
					in:fly={{ x: 50, duration: 800 }}
					class="rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl"
				>
					<h3 class="mb-4 text-2xl font-semibold text-[var(--cerulean-blue)]">Partner with us</h3>
					<p class="mb-6 text-gray-700">
						If you are interested in integrating one of our tools into your organization or office,
						please reach out at info@techjusticelab.org
					</p>

					<p class="mb-6 text-gray-700">
						If you believe that you or your organization might benefit from a new digital tool and
						would like to work with our team, consider partnering with us on a project!
					</p>

					<form class="space-y-4">
						<div class="group">
							<label for="partner-name" class="block text-sm font-medium text-gray-700">Name</label>
							<input
								type="text"
								id="partner-name"
								name="partner-name"
								class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm transition-all duration-300 focus:border-[var(--cerulean-blue)] focus:ring-[var(--cerulean-blue)]"
							/>
							<div
								class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-500 group-focus-within:w-full"
							></div>
						</div>

						<div class="group">
							<label for="organization" class="block text-sm font-medium text-gray-700"
								>Organization</label
							>
							<input
								type="text"
								id="organization"
								name="organization"
								class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm transition-all duration-300 focus:border-[var(--cerulean-blue)] focus:ring-[var(--cerulean-blue)]"
							/>
							<div
								class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-500 group-focus-within:w-full"
							></div>
						</div>

						<div class="group">
							<label for="description" class="block text-sm font-medium text-gray-700"
								>Brief Description</label
							>
							<textarea
								id="description"
								name="description"
								rows="4"
								class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm transition-all duration-300 focus:border-[var(--cerulean-blue)] focus:ring-[var(--cerulean-blue)]"
							></textarea>
							<div
								class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-500 group-focus-within:w-full"
							></div>
						</div>

						<div>
							<button
								type="submit"
								class="group relative w-full overflow-hidden rounded-md bg-[var(--cerulean-blue)] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
							>
								<span class="relative z-10">Submit Interest</span>
								<span
									class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
								></span>
							</button>
						</div>
					</form>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Partners Section -->
<section id="partners" class="bg-white py-16" bind:this={sections[6]}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-4 text-center text-3xl font-bold text-[var(--dark-blue)]">Partners</h2>
		<p class="mb-10 text-center text-lg">
			The Berkeley Technology and Justice Lab team is thankful for all of our amazing partners
		</p>

		<div class="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
			{#if sectionVisible['partners']}
				<div
					in:scale={{ duration: 400, delay: 100 }}
					class="flex items-center justify-center rounded-lg bg-[var(--apple-white)] p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
				>
					<div class="text-center">
						<div class="relative mx-auto mb-2 h-32 w-32 overflow-hidden rounded-full">
							<img
								src={sqsw}
								alt="San Quentin Skunkworks"
								class="h-full w-full object-cover transition-all duration-500 hover:scale-110"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--cerulean-blue)]/10 opacity-0 transition-opacity duration-300 hover:opacity-100"
							></div>
						</div>
						<p class="font-medium">San Quentin Skunkworks</p>
					</div>
				</div>

				<div
					in:scale={{ duration: 400, delay: 200 }}
					class="flex items-center justify-center rounded-lg bg-[var(--apple-white)] p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
				>
					<div class="text-center">
						<div class="relative mx-auto mb-2 h-32 w-32 overflow-hidden rounded-full">
							<img
								src={bcljc}
								alt="Berkeley Criminal Law and Justice Center"
								class="h-full w-full object-cover transition-all duration-500 hover:scale-110"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--cerulean-blue)]/10 opacity-0 transition-opacity duration-300 hover:opacity-100"
							></div>
						</div>
						<p class="font-medium">Berkeley Criminal Law and Justice Center</p>
					</div>
				</div>

				<div
					in:scale={{ duration: 400, delay: 300 }}
					class="flex items-center justify-center rounded-lg bg-[var(--apple-white)] p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
				>
					<div class="text-center">
						<div class="relative mx-auto mb-2 h-32 w-32 overflow-hidden rounded-full">
							<img
								src={laccpd}
								alt="Los Angeles County Public Defender's Office"
								class="h-full w-full object-cover transition-all duration-500 hover:scale-110"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--cerulean-blue)]/10 opacity-0 transition-opacity duration-300 hover:opacity-100"
							></div>
						</div>
						<p class="font-medium">Los Angeles County Public Defender's Office</p>
					</div>
				</div>

				<div
					in:scale={{ duration: 400, delay: 400 }}
					class="flex items-center justify-center rounded-lg bg-[var(--apple-white)] p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
				>
					<div class="text-center">
						<div class="relative mx-auto mb-2 h-32 w-32 overflow-hidden rounded-full">
							<img
								src={cpe}
								alt="Center for Policing Equity"
								class="h-full w-full object-cover transition-all duration-500 hover:scale-110"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--cerulean-blue)]/10 opacity-0 transition-opacity duration-300 hover:opacity-100"
							></div>
						</div>
						<p class="font-medium">Center for Policing Equity</p>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="bg-[var(--apple-white)] py-16" bind:this={sections[7]}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="garamond mb-10 text-center text-3xl font-bold text-[var(--dark-blue)]">
			Contact Us
		</h2>

		<div
			class="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl"
		>
			{#if sectionVisible['contact']}
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
					<div in:fly={{ x: -30, duration: 800 }}>
						<h3 class="mb-4 text-xl font-semibold">Get in Touch</h3>
						<p class="mb-6 text-gray-700">
							We'd love to hear from you. Please feel free to contact us with any questions or
							inquiries.
						</p>

						<div class="space-y-4">
							<div class="group flex items-start">
								<svg
									class="mr-3 h-6 w-6 text-[var(--cerulean-blue)] transition-transform duration-300 group-hover:scale-110"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<div>
									<p class="font-medium">Email</p>
									<p
										class="text-gray-600 transition-colors duration-300 hover:text-[var(--cerulean-blue)]"
									>
										info@techjusticelab.org
									</p>
								</div>
							</div>

							<div class="group flex items-start">
								<svg
									class="mr-3 h-6 w-6 text-[var(--cerulean-blue)] transition-transform duration-300 group-hover:scale-110"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<div>
									<p class="font-medium">Location</p>
									<p class="text-gray-600">University of California, Berkeley</p>
								</div>
							</div>
						</div>
					</div>

					<div in:fly={{ x: 30, duration: 800 }}>
						<h3 class="mb-4 text-xl font-semibold">Send a Message</h3>
						<form class="space-y-4">
							<div class="group">
								<label for="contact-name" class="block text-sm font-medium text-gray-700"
									>Name</label
								>
								<input
									type="text"
									id="contact-name"
									name="contact-name"
									class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm transition-all duration-300 focus:border-[var(--cerulean-blue)] focus:ring-[var(--cerulean-blue)]"
								/>
								<div
									class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-500 group-focus-within:w-full"
								></div>
							</div>

							<div class="group">
								<label for="contact-email" class="block text-sm font-medium text-gray-700"
									>Email</label
								>
								<input
									type="email"
									id="contact-email"
									name="contact-email"
									class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm transition-all duration-300 focus:border-[var(--cerulean-blue)] focus:ring-[var(--cerulean-blue)]"
								/>
								<div
									class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-500 group-focus-within:w-full"
								></div>
							</div>

							<div class="group">
								<label for="message" class="block text-sm font-medium text-gray-700">Message</label>
								<textarea
									id="message"
									name="message"
									rows="4"
									class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm transition-all duration-300 focus:border-[var(--cerulean-blue)] focus:ring-[var(--cerulean-blue)]"
								></textarea>
								<div
									class="h-0.5 w-0 bg-[var(--cerulean-blue)] transition-all duration-500 group-focus-within:w-full"
								></div>
							</div>

							<div>
								<button
									type="submit"
									class="group relative w-full overflow-hidden rounded-md bg-[var(--cerulean-blue)] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
								>
									<span class="relative z-10">Send Message</span>
									<span
										class="absolute inset-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"
									></span>
								</button>
							</div>
						</form>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Modern floating back-to-top button that appears when scrolling down -->
{#if y > 500}
	<button
		in:scale
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

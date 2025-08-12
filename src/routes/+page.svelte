<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Updates from '$lib/components/Updates.svelte';
	import WhoWeAre from '$lib/components/WhoAreWe.svelte';
	import OurWork from '$lib/components/OurWork.svelte';
	import Resources from '$lib/components/Resources.svelte';
	import GetInvolved from '$lib/components/GetInvolved.svelte';
	import Partners from '$lib/components/Partners.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';

	import { onMount } from 'svelte';

	// For intersection observer animations
	let sections = [null, null, null, null, null, null, null, null];
	let sectionVisible: { [key: string]: boolean } = {
		home: false,
		updates: false,
		'who-we-are': false,
		'our-work': false,
		resources: false,
		'get-involved': false,
		partners: false,
		contact: false
	};

	// For parallax effect in hero section
	let y = 0;

	onMount(() => {
		// Set some sections to visible by default for initial rendering
		sectionVisible.home = true;
		sectionVisible.updates = true;

		// Setup intersection observer for section animations
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.target.id) {
						sectionVisible[entry.target.id] = true;
						console.log(`Section ${entry.target.id} is now visible`);
					}
				});
			},
			{ threshold: 0.2 }
		);

		// Observe each section element
		document.querySelectorAll('section[id]').forEach((section) => {
			if (section) {
				observer.observe(section);
				console.log(`Observing section: ${section.id}`);
			}
		});
	});
</script>

<svelte:window bind:scrollY={y} />

<main>
	<Hero {y} {sectionVisible} />
	<Updates {sectionVisible} />
	<WhoWeAre {sectionVisible} />
	<OurWork {sectionVisible} />
	<Partners {sectionVisible} />
	<GetInvolved {sectionVisible} />
	<Resources {sectionVisible} />
	<Contact {sectionVisible} />
</main>

<BackToTop {y} />

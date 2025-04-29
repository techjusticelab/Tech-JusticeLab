<script lang="ts">
	let { children } = $props();

	import '../app.css';
</script>

<!-- Navigation -->
<nav class="sticky top-0 z-50 bg-[var(--apple-white)] shadow-md">
	<div class="mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex">
				<div class="flex flex-shrink-0 items-center">
					<a href="#home">
						<h1 class="garamond logo-color text-2xl font-bold">
							Berkeley Technology and Justice Lab
						</h1></a
					>
				</div>
			</div>
			<!-- Changed this div to use ml-auto to push it to the right -->
			<div class="mx-4 ml-auto hidden items-center lg:flex lg:items-center lg:space-x-4">
				<a href="#home" class="nav-link px-2 py-2 text-sm font-medium"></a>
				<a href="#who-we-are" class="nav-link px-2 py-2 text-sm font-medium">Who Are We</a>
				<a href="#our-work" class="nav-link px-2 py-2 text-sm font-medium">Our Work</a>
				<a href="#resources" class="nav-link px-2 py-2 text-sm font-medium">Resources</a>
				<a href="#get-involved" class="nav-link px-3 py-2 text-sm font-medium">Get Involved</a>
				<a href="#partners" class="nav-link px-2 py-2 text-sm font-medium">Partners</a>
				<a href="#contact" class="nav-link px-2 py-2 text-sm font-medium">Contact</a>
			</div>
			<div class="flex items-center">
				<button class="btn-primary rounded-md px-4 py-2 text-sm font-medium">Donate</button>
				<div class="flex items-center md:hidden">
					<button
						type="button"
						class="inline-flex items-center justify-center rounded-md p-2 text-[var(--cerulean-blue)]"
					>
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
</nav>

{@render children()}

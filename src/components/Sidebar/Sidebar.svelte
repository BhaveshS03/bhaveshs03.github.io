<script>
  import { onMount, onDestroy } from 'svelte';
  
  export let rows = 3;
  
  let activeSection = '';
  let observer;
  
  onMount(() => {
    // Intersection Observer for active section detection
    const sections = document.querySelectorAll('section[id], div[id]');
    
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -60% 0px'
      }
    );
    
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  
  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
  });
</script>

<div class="sidebar-wrapper">
  <div class="sidebar-main" style="grid-template-rows: repeat({rows}, minmax(0, 1fr))">
    <slot {activeSection} />
  </div>
  <div class="sidebar-background" style="grid-template-rows: repeat({rows}, minmax(0, 1fr))">
    <slot {activeSection} />
  </div>
</div>

<style>
  .sidebar-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .sidebar-main,
  .sidebar-background {
    height: 100%;
    padding: 0 4rem;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 2px solid rgba(226, 232, 240, 0.5);
  }
  
  .sidebar-background {
    position: absolute;
    left: 0;
    top: 0;
    background: rgb(15 23 42);
  }
  
  .sidebar-main > :global(*),
  .sidebar-background > :global(*) {
    display: grid;
    grid-template-columns: 1fr;
    place-items: start;
    height: 100%;
  }
  
  @media (max-width: 768px) {
    .sidebar-main,
    .sidebar-background {
      padding: 0 2rem;
    }
  }
</style>
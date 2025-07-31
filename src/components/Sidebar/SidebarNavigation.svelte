<script>
  export let inter = false;
</script>

<div class="sidebar-navigation" class:inter>
  <slot />
</div>

<style>
  .sidebar-navigation {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: 'JetBrains Mono', monospace;
  }
  
  .sidebar-navigation.inter {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  }
</style>

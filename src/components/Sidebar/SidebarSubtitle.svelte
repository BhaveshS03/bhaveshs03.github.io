<script>
  export let secondary = false;
</script>

<h2 class="sidebar-subtitle" class:secondary>
  <slot />
</h2>

<style>
  .sidebar-subtitle {
    font-size: 1.875rem;
    font-weight: 600;
    white-space: nowrap;
    font-family: 'JetBrains Mono', monospace;
    color: rgb(100 116 139);
    margin: 0;
  }
  
  .sidebar-subtitle.secondary {
    color: rgb(55 65 81);
  }
  
  @media (max-width: 768px) {
    .sidebar-subtitle {
      font-size: 1.5rem;
    }
  }
</style>
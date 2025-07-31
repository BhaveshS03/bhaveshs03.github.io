<script>
  export let href;
</script>

<a 
  class="sidebar-nav-link" 
  {href}
  target="_blank" 
  rel="noopener noreferrer"
>
  <slot />
</a>

<style>
  .sidebar-nav-link {
    font-size: 1.875rem;
    transition: color 0.1s;
    font-weight: 600;
    color: rgb(55 65 81);
    white-space: nowrap;
    text-decoration: none;
  }
  
  .sidebar-nav-link:hover {
    color: rgb(100 116 139);
  }
  
  @media (max-width: 768px) {
    .sidebar-nav-link {
      font-size: 1.5rem;
    }
  }
</style>
<script>
  export let section;
  export let activeSection = '';
  
  function scrollToSection(event) {
    event.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<a 
  class="sidebar-nav-item" 
  class:active={activeSection === section}
  href="#{section}"
  on:click={scrollToSection}
>
  <slot />
</a>

<style>
  .sidebar-nav-item {
    font-size: 1.875rem;
    transition: color 0.1s;
    font-weight: 600;
    color: rgb(55 65 81);
    white-space: nowrap;
    text-decoration: none;
    cursor: pointer;
  }
  
  .sidebar-nav-item:hover,
  .sidebar-nav-item.active {
    color: rgb(100 116 139);
  }
  
  @media (max-width: 768px) {
    .sidebar-nav-item {
      font-size: 1.5rem;
    }
  }
</style>
<h1 class="sidebar-title">
  <slot />
</h1>

<style>
  .sidebar-title {
    font-size: 3.75rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    color: white;
  }
  
  @media (max-width: 768px) {
    .sidebar-title {
      font-size: 2.5rem;
    }
  }
  </style>
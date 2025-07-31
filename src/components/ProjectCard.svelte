<script lang="ts">
  import type { Project } from './react/types'; // Adjust path if needed
  import { GITHUB_ICON, EXTERNAL_LINK_ICON } from './react/constants'; // Adjust path if needed
  export let project: Project;
</script>

<div class="flex flex-col h-full group">
  <div class="relative">
    <img alt={project.title} class="rounded-lg w-full h-48 object-cover mb-4" />
    <div class="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
  <div class="flex flex-col flex-grow">
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
    <p class="text-slate-600 dark:text-slate-300 mb-4 flex-grow">{project.description}</p>
    <div class="flex flex-wrap gap-2 mb-4">
    </div>
  </div>
  <div class="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-end space-x-4">
    {#if project.repoUrl}
      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" class="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
        {@html GITHUB_ICON}
      </a>
    {/if}
    {#if project.liveUrl}
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" class="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
        {@html EXTERNAL_LINK_ICON}
      </a>
    {/if}
  </div>
</div>
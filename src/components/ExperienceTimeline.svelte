<script lang="ts">
  import { onMount } from 'svelte';

  export let experiences: {
    title: string;
    time: string;
    state?: string;
    content: string;
    images?: { src: string }[];
    github?: string;
    website?: string;
    tags?: { name: string; url?: string; icon?: string }[];
  }[] = [];

  let timelineElements: HTMLDivElement[] = [];

  onMount(() => {
    timelineElements.forEach((element) => {
      if (element) {
        const timelineHover = element.querySelector('.timeline-hover') as HTMLElement | null;
        const timelineDotHover = element.querySelector('.timeline-dot-hover') as HTMLElement | null;

        element.addEventListener('mouseenter', () => {
          if (timelineHover) timelineHover.style.opacity = '1';
          if (timelineDotHover) timelineDotHover.style.opacity = '1';
        });

        element.addEventListener('mouseleave', () => {
          if (timelineHover) timelineHover.style.opacity = '0';
          if (timelineDotHover) timelineDotHover.style.opacity = '0';
        });
      }
    });
  });
</script>

<div class="experience-container">
  <!-- Timeline Start -->
  <div class="timeline-start">
    <div class="timeline-line-start"></div>
    <div class="spacer"></div>
  </div>

  <!-- Experience Items -->
  {#each experiences as experience, index}
    <div class="experience-item" bind:this={timelineElements[index]}>
      <div class="timeline-line">
        <div class="timeline-hover"></div>
        <div class="timeline-dot">
          <div class="timeline-dot-inner"></div>
        </div>
        <div class="timeline-dot-hover">
          <div class="timeline-dot-inner"></div>
        </div>
      </div>

      <div class="experience-content">
        <span class="time-state">
          {experience.state ? `${experience.time} * ${experience.state}` : experience.time}
        </span>
        <h2 class="title">{experience.title}</h2>

        {#if experience.images && experience.images.length > 0}
          <div class="carousel">
            {#each experience.images as image, imgIndex}
              <img src={image.src} alt={`${experience.title} screenshot ${imgIndex + 1}`} class="carousel-image" />
            {/each}
          </div>
        {/if}

        <!-- 🆕 Markdown content rendering -->
        <div class="content markdown-body">
          <!-- <SvelteMarkdown source={experience.content} /> -->
        </div>

        {#if experience.github || experience.website || (experience.tags && experience.tags.length > 0)}
          <div class="links-and-tags">
            {#if experience.github}
              <a href={experience.github} target="_blank" rel="noopener noreferrer" class="link-button">
                <!-- GitHub Icon -->
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
                  c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 
                  5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 
                  13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 
                  0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 
                  3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                <span>View on GitHub</span>
              </a>
            {/if}

            {#if experience.website}
              <a href={experience.website} target="_blank" rel="noopener noreferrer" class="link-button">
                <!-- Website Icon -->
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 
                  15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span>Visit Website</span>
              </a>
            {/if}

            {#if (experience.github || experience.website) && experience.tags && experience.tags.length > 0}
              <div class="separator"></div>
            {/if}

            {#if experience.tags}
              {#each experience.tags as tag}
                {#if tag.url}
                  <a href={tag.url} target="_blank" rel="noopener noreferrer" class="tag-button">
                    {#if tag.icon}
                      <span class="tag-icon">{@html tag.icon}</span>
                    {/if}
                    <span>{tag.name}</span>
                  </a>
                {:else}
                  <span class="tag-button tag-static">
                    {#if tag.icon}
                      <span class="tag-icon">{@html tag.icon}</span>
                    {/if}
                    <span>{tag.name}</span>
                  </span>
                {/if}
              {/each}
            {/if}
          </div>
        {/if}
      </div>
    </div>
  {/each}

  <!-- Timeline End -->
  <div class="timeline-end">
    <div class="timeline-line-end"></div>
    <div class="spacer"></div>
  </div>
</div>

<style>
  .experience-container {
    height: max-content;
    width: 100%;
    padding: 0 4rem 4rem;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0 4rem;
  }

  .timeline-start, .timeline-end {
    display: contents;
  }

  .timeline-line-start {
    width: 2px;
    background: linear-gradient(to bottom, transparent, rgb(226 232 240));
  }

  .timeline-line-end {
    width: 2px;
    background: linear-gradient(to bottom, rgb(226 232 240), transparent);
  }

  .spacer {
    width: 16rem;
    height: 8rem;
  }

  .experience-item {
    display: contents;
  }

  .timeline-line {
    width: 2px;
    background: linear-gradient(to bottom, rgb(226 232 240) 25%, rgb(226 232 240) 75%);
    position: relative;
    transition: all 0.5s;
  }

  .timeline-hover {
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, rgb(226 232 240) 25%, rgb(100 116 139) 50%, rgb(226 232 240) 75%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .timeline-dot, .timeline-dot-hover {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1rem;
    height: 1rem;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  .timeline-dot {
    background: rgb(226 232 240);
  }

  .timeline-dot-hover {
    background: rgb(100 116 139);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .timeline-dot-inner {
    width: 0.75rem;
    height: 0.75rem;
    background: rgb(15 23 42);
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .experience-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 4rem;
  }

  .time-state {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
    font-size: 1.5rem;
    color: rgb(100 116 139);
  }

  .title {
    font-weight: 600;
    font-size: 2.25rem;
    color: white;
    margin: 0;
  }

  .carousel {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
    overflow-x: auto;
  }

  .carousel-image {
    height: 12rem;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  .content {
    margin: 1rem 0 1.5rem;
    max-width: 50ch;
  }

  .markdown-body :global(h1),
  .markdown-body :global(h2),
  .markdown-body :global(h3) {
    color: white;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .markdown-body :global(p),
  .markdown-body :global(ul),
  .markdown-body :global(ol) {
    color: rgb(203 213 225);
    font-size: 1.25rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .markdown-body :global(code) {
    background: rgba(255, 255, 255, 0.05);
    padding: 0.2em 0.4em;
    border-radius: 4px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.95rem;
  }

  .markdown-body :global(a) {
    color: rgb(94 234 212);
    text-decoration: underline;
  }

  .markdown-body :global(li) {
    margin-bottom: 0.5rem;
  }

  .links-and-tags {
    display: flex;
    flex-wrap: wrap;
    max-width: 70ch;
    align-items: center;
    gap: 0.5rem;
  }

  .link-button, .tag-button {
    font-family: 'JetBrains Mono', monospace;
    border: 2px solid rgb(148 163 184);
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    font-size: 1.125rem;
    font-weight: 600;
    color: rgb(100 116 139);
    transition: all 0.1s;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    background: transparent;
  }

  .link-button:hover, .tag-button:hover {
    border-color: rgb(100 116 139);
    color: rgb(203 213 225);
  }

  .tag-static {
    cursor: default;
  }

  .separator {
    height: 0.375rem;
    width: 0.375rem;
    margin: 0 1rem;
    border-radius: 50%;
    background: rgb(100 116 139);
  }

  .tag-icon {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    .experience-container {
      padding: 0 1rem 2rem;
      gap: 0 2rem;
    }

    .spacer {
      width: 8rem;
      height: 4rem;
    }

    .title {
      font-size: 1.875rem;
    }

    .time-state {
      font-size: 1.25rem;
    }

    .content {
      font-size: 1.125rem;
    }

    .links-and-tags {
      max-width: 100%;
    }
  }
</style>

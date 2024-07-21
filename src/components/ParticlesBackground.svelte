<script>
    import { onMount } from "svelte";
    import "particles.js";

    onMount(() => {
        particlesJS.load(
            "particles-js",
            "/particlesjs-config-new.json",
            function () {
                console.log("particles.js loaded - callback");
            },
        );
    });
</script>

<div id="particles-js"></div>

<style>
    #particles-js {
        position: fixed !important;
        color: rgb(var(--lavender));
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        top: 0;
        left: 0;
    }
</style>

---
title: Svelte 5 vs Svelte 4
description: A comprehensive comparison between Svelte 5 and Svelte 4, highlighting the new features, syntax changes, and migration strategies for developers.
category: frontend
date: 2025-01-23T18:40:05.445454
---

# Svelte 5 vs Svelte 4

# Svelte 5 vs Svelte 4: Key Differences and Migration Guide

Svelte 5 introduces several groundbreaking changes compared to Svelte 4, particularly with the introduction of **runes**, a set of advanced primitives for controlling reactivity. This guide will walk you through the key differences and provide examples to help you migrate from Svelte 4 to Svelte 5.

## Key Features of Svelte 5

### 1. **Runes: Advanced Reactivity Primitives**
Svelte 5 introduces **runes**, which replace certain non-runes features and provide more explicit control over state and effects. Runes like `$state`, `$derived`, and `$effect` offer a more declarative way to manage reactivity.

### 2. **Snippets and Render Tags**
Snippets, along with render tags, help create reusable chunks of markup inside your components, reducing duplication and enhancing maintainability.

### 3. **Event Handlers as Properties**
In Svelte 5, event handlers are treated as properties, simplifying their use and integrating them more closely with the rest of the properties in the component.

## Migration Examples

### Example 1: Basic Reactivity
**Svelte 4:**
```html
<script>
let count = 0;
$: double = count * 2;
$: {
  if (count > 10) alert('Too high!');
}
</script>
<button on:click={() => count++}> {count} / {double}</button>
```

**Svelte 5:**
```html
<script>
let count = $state(0);
let double = $derived(count * 2);
$effect(() => {
  if (count > 10) alert('Too high!');
});
</script>
<button onclick={() => count++}> {count} / {double}</button>
```

### Example 2: Derived State
**Svelte 4:**
```html
<script>
let a = 0;
let b = 0;
$: sum = add(a, b);
function add(x, y) {
  return x + y;
}
</script>
<button on:click={() => a++}>a++</button>
<button on:click={() => b++}>b++</button>
<p>{a} + {b} = {sum}</p>
```

**Svelte 5:**
```html
<script>
let a = $state(0);
let b = $state(0);
let sum = $derived(add());
function add() {
  return a + b;
}
</script>
<button onclick={() => a++}>a++</button>
<button onclick={() => b++}>b++</button>
<p>{a} + {b} = {sum}</p>
```

### Example 3: Untracked State
**Svelte 4:**
```html
<script>
let a = 0;
let b = 0;
$: sum = a + noTrack(b);
function noTrack(value) {
  return value;
}
</script>
<button on:click={() => a++}>a++</button>
<button on:click={() => b++}>b++</button>
<p>{a} + {b} = {sum}</p>
```

**Svelte 5:**
```html
<script>
import { untrack } from 'svelte';
let a = $state(0);
let b = $state(0);
let sum = $derived(add());
function add() {
  return a + untrack(() => b);
}
</script>
<button onclick={() => a++}>a++</button>
<button onclick={() => b++}>b++</button>
<p>{a} + {b} = {sum}</p>
```

### Example 4: Props and State
**Svelte 5:**
```html
<script>
let { count = 0 } = $props();
</script>
{count}
```

**Svelte 5:**
```html
<script>
let { class: classname, ...others } = $props();
</script>
<pre class={classname}>{JSON.stringify(others)}</pre>
```

### Example 5: Advanced Reactivity with Effects
**Svelte 4:**
```html
<script>
import { tick, beforeUpdate } from 'svelte';
let theme = 'dark';
let messages = [];
let viewport;
let updatingMessages = false;
beforeUpdate(() => {
  if (updatingMessages) {
    const autoscroll =
      viewport && viewport.offsetHeight + viewport.scrollTop > viewport.scrollHeight - 50;
    if (autoscroll) {
      tick().then(() => viewport.scrollTo(0, viewport.scrollHeight));
    }
  }
});
function handleKeydown(event) {
  if (event.key === 'Enter') {
    const text = event.target.value;
    if (text) {
      messages = [...messages, text];
      updatingMessages = true;
      event.target.value = '';
    }
  }
}
function toggle() {
  theme = theme === 'dark' ? 'light' : 'dark';
}
</script>
<div class:dark={theme === 'dark'}>
  <div bind:this={viewport}>
    {#each messages as message}
      <p>{message}</p>
    {/each}
  </div>
  <input on:keydown={handleKeydown} />
  <button on:click={toggle}>Toggle dark mode</button>
</div>
```

**Svelte 5:**
```html
<script>
import { tick } from 'svelte';
let theme = $state('dark');
let messages = $state([]);
let viewport;
$effect.pre(() => {
  messages;
  const autoscroll =
    viewport && viewport.offsetHeight + viewport.scrollTop > viewport.scrollHeight - 50;
  if (autoscroll) {
    tick().then(() => viewport.scrollTo(0, viewport.scrollHeight));
  }
});
function handleKeydown(event) {
  if (event.key === 'Enter') {
    const text = event.target.value;
    if (text) {
      messages = [...messages, text];
      event.target.value = '';
    }
  }
}
function toggle() {
  theme = theme === 'dark' ? 'light' : 'dark';
}
</script>
<div class:dark={theme === 'dark'}>
  <div bind:this={viewport}>
    {#each messages as message}
      <p>{message}</p>
    {/each}
  </div>
  <input onkeydown={handleKeydown} />
  <button onclick={toggle}>Toggle dark mode</button>
</div>
```

### Example 6: Passing Content Using Snippets
**Svelte 5:**
```html
<!-- consumer -->
<script>
import Button from './Button.svelte';
</script>
<button>
  {#snippet children(prop)} click {prop} {/snippet}
</button>

<!-- provider (Button.svelte) -->
<script>
let { children } = $props();
</script>
<button>
  {@render children("some value")}
</button>
```

## Conclusion
Svelte 5 brings significant improvements in reactivity management, component structure, and event handling. By leveraging runes and snippets, developers can write more maintainable and efficient code. This guide provides a starting point for migrating from Svelte 4 to Svelte 5, but always refer to the official documentation for the latest updates and best practices.

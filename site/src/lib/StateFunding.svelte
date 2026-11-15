<script>
  import { scaleLinear } from 'd3-scale';
  import { line } from 'd3-shape';
  import series from './state-funding.json';
  import ohioShares from './ohio-funding-shares.json';

  let { showShares = false } = $props();

  const fundingSources = [
    { name: 'State', color: '#df5f35', values: ohioShares.STGVT },
    { name: 'Local', color: '#8bc8e7', values: ohioShares.LOCGVT },
    { name: 'Federal', color: '#777777', values: ohioShares.FEDGVT, dash: '4 3' },
    { name: 'Other', color: '#999999', values: ohioShares.OTHINCM },
  ];

  const firstYear = Math.min(...series.flatMap(({ values }) => values.map(([year]) => year)));
  const lastYear = Math.max(...series.flatMap(({ values }) => values.map(([year]) => year)));
  const maxIncome = Math.max(...series.flatMap(({ values }) => values.map(([, income]) => income)));
  const ohio = series.find(({ state }) => state === 'OH');
  const otherStates = series.filter(({ state }) => state !== 'OH');

  let width = $state(760);
  const fullMax = scaleLinear([0, maxIncome], [0, 1]).nice(5).domain()[1];
  const height = $derived(width < 520 ? 300 : Math.round(width * .384));
  const right = $derived(Math.max(110, width - (showShares ? 52 : 26)));
  const left = 62;
  const bottom = $derived(height - 39);
  const x = $derived(scaleLinear([firstYear, lastYear], [left, right]));
  const y = $derived(scaleLinear([0, showShares ? 1 : fullMax], [bottom, 16]));
  const grid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ohioLabel = ohio.values.find(([year]) => year === 2006);
  const otherLabel = otherStates.flatMap(({ values }) => values).reduce((highest, point) => point[1] > highest[1] ? point : highest);
  const path = $derived(line().defined(([, income]) => income !== null).x(([year]) => x(year)).y(([, income]) => y(income)));
  const years = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i);
  const ticks = $derived(years.filter((_, i) => i % (width < 520 ? 8 : 4) === 0));

</script>

<figure bind:clientWidth={width} class:shares={showShares}>
  <figcaption>
    {#if showShares}
      <h3>Ohio libraries rely more on <mark class="local-highlight">local</mark> funding as the <mark class="state-highlight">state</mark> share shrinks</h3>
      <p>Average share of revenue per Ohio public library by funding source, {firstYear}–{lastYear}.</p>
    {:else}
      <h3>Ohio's state government allocates more funds for its libraries than any other state.</h3>
      <p>This chart shows the total amount that each state has dedicated for its libraries each year from {firstYear} to {lastYear}.</p>
    {/if}
  </figcaption>
  <svg viewBox="0 0 {width} {height}" role="img" aria-label={showShares
    ? 'Ohio public library revenue shares by source. From 1992 to 2021, the average state share fell from 86% to 63% and the average local share rose from 5% to 30%.'
    : 'Line chart of state government income for public libraries over time'}>
    {#if !showShares}
    <defs>
      <clipPath id="state-funding-plot">
        <rect x={left - 2} y="12" width={right - left + 4} height={bottom - 10} />
      </clipPath>
    </defs>
    {/if}
    {#each grid as step}
      {@const tick = y.domain()[1] * step / 10}
      {#if step % 2 === 0}
        <text x={57} y={y(tick)} text-anchor="end" dominant-baseline="middle">{showShares ? Math.round(tick * 100) + "%" : (step === 10 ? "$" : "") + Math.round(tick / 1e6).toLocaleString("en-US")}</text>
      {/if}
    {/each}
    {#each ticks as tick}
      <text x={x(tick)} y={height - 12} text-anchor="middle">{tick}</text>
    {/each}
    <text class="axis-label" text-anchor="middle" transform="translate(23 {(bottom + 16) / 2}) rotate(-90)">{showShares ? 'Average share of revenue' : 'State library funding (millions)'}</text>
    {#if showShares}
      {#each fundingSources as source}
        {@const endpoint = source.values.at(-1)}
        <path class="source-line" class:secondary={source.name === "Federal" || source.name === "Other"} stroke={source.color} stroke-dasharray={source.dash} d={path(source.values)} />
        <text class="endpoint" x={x(endpoint[0]) + 5} y={y(endpoint[1])} dominant-baseline="middle">{source.name}</text>
      {/each}
    {:else}
    <g clip-path="url(#state-funding-plot)">
      {#each otherStates as state (state.state)}
        <path class="other" d={path(state.values)} />
      {/each}
      <path class="ohio" d={path(ohio.values)} />
    </g>
    {#if ohioLabel}
      <text class="direct-label" x={x(otherLabel[0])} y={Math.max(13, y(otherLabel[1]) - 9)} text-anchor="middle">All Other States</text>
      <text class="direct-label ohio-label" x={x(ohioLabel[0])}
        y={Math.max(13, y(ohioLabel[1]) - 10)} text-anchor="middle">Ohio</text>
    {/if}
    {/if}
  </svg>
</figure>

<style>
  figure { container-type: inline-size; width: min(760px, calc(100vw - 2rem)); margin: clamp(3rem, 6vw, 4.5rem) 0 2rem 50%; transform: translateX(-50%); }
  figure.shares { margin-top: 1.85rem; }
  .shares figcaption h3 { line-height: 1.55; word-spacing: -.055em; }
  .endpoint { font-size: 9px; }
  figcaption h3 { margin: 0; font-size: clamp(.7rem, 2.13cqw, .99rem); font-weight: 700; line-height: 1.2; }
  figcaption p { margin: .5rem 0 .6rem; font-size: clamp(.62rem, 1.65cqw, .7625rem); line-height: 1.3; }
  figcaption { margin-inline: 62px 4px; text-align: left; }
  svg { display: block; width: 100%; height: auto; overflow: visible; }
  text { font-size: 10px; fill: #474747; }
  .axis-label { font-size: 9px; font-weight: 500; }
  .direct-label { font-size: clamp(10px, 1.3vw, 14px); font-weight: 700; fill: #606060; }
  .ohio-label { fill: #c9411c; }
  path { fill: none; stroke-linecap: round; stroke-linejoin: round; }
  .other { stroke: #656565; stroke-width: 1.4; opacity: .78; }
  mark { display: inline-block; padding: .15em .4em; border-radius: .22em; line-height: 1.1; }
  .state-highlight { background: #df5f35; color: white; }
  .local-highlight { background: #8bc8e7; color: #151515; }
  .source-line { stroke-width: 3; }
  .source-line.secondary { stroke-width: 1.5; }
  .ohio { stroke: #df5f35; stroke-width: 3.5; }
</style>

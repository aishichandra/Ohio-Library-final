<script>
  import { base } from '$app/paths';
  import StateFunding from '$lib/StateFunding.svelte';
</script>

<svelte:head>
  <title>Balancing the Books</title>
  <link rel="stylesheet" href={base + "/article.css"} />
</svelte:head>

<main>
  <article>
    <img class="hero" src="{base}/hero-1600.webp" srcset="{base}/hero-800.webp 800w, {base}/hero-1600.webp 1600w" sizes="(max-width: 540px) 94vw, min(65rem, calc(100vw - 3rem))" width="1600" height="609" fetchpriority="high" alt="Archival portraits, library bookshelves, and an Ohio Library Association bulletin in a collage with orange accents." />
    <header>
      <div class="title-balance">
        <h1>Balancing the Books</h1>
      </div>
      <p class="subtitle">Ohio funds its libraries in a way no other state does, to even out resources across counties. Now the scales are tipping.</p>
    </header>

    <p>A Reddit post asking why Ohio has one of the nation’s largest library networks sparked a thread of state pride. "Here, even cows are eligible for library cards," joked a librarian, pointing to a policy that lets any Ohio resident get a card at any public library in the state. One former Ohioan reminisced, "I love OhioLink!! I went to college in Ohio and it’s the thing I miss the most. Moving to NY for grad school, I realized that not all states offer something even remotely similar."</p>
    <p>Dubbed “Library Land” by another Redditor, Ohio leads the nation in the share of registered borrowers, library visits per capita, and transactions per capita. Only New York has more libraries with five-star ratings from the Library Journal.</p>
    <p>The secret behind Ohio's expansive and inclusive library network is its funding model.</p>

    <h2>How Ohio Funds Its Libraries</h2>
    <p>Public libraries in the United States draw on local, state, and federal funding, plus donations and grants. In most states, libraries rely heavily on local sources such as property taxes and municipal budgets. Ohio stands apart.</p>
    <figure class="funding-map">
      <iframe src={base + "/graphics/funding/index.html"} title="Library funding graphic"></iframe>
    </figure>
    <p>Ohio’s Public Library Fund (PLF) receives a share of the state’s general tax revenue. Each county gets a “guaranteed share” based on its prior-year entitlement, adjusted for inflation. If money remains, counties receive a “share of the excess.” An “equalization ratio” directs more of that money to counties that have historically received less per resident.</p>
    <StateFunding />
    <p>“Ohio’s funding from the state sales tax is largely why Ohio’s libraries have become so successful and widely recognized - nationally and also internationally,” says Kirstin Krumsee, a library consultant at the State Library of Ohio.</p>

    <h2>How Ohio Tried to Close the Funding Gap</h2>
    <p>In 1931, the Special Joint Taxation Committee, led by Robert Taft, introduced a state tax on intangibles such as stocks and bonds to raise more money for libraries. The tax was collected and distributed locally. By the 1960s, wealthier areas had thriving libraries, while others struggled to provide basic access.</p>
    <p>In 1983, Ohio created the Library and Local Government Support Fund, now the Public Library Fund (PLF), and tied library funding to 6.3% of the state’s personal income tax revenue. The new formula gave counties a “guaranteed share” and a “share of the excess.” For more than a decade, funding began to even out across counties.</p>
    <p>Tying library funding to state revenue made it vulnerable to downturns. When Ohio’s economy slowed, libraries faced cuts in state funding and funding freezes.</p>
    <figure class="funding-map funding-history">
      <figcaption>
        <h3>When Ohio does well, the libraries do well</h3>
        <p>Ohio’s state funding for public libraries rose through the 1990s, then declined after the dot-com recession and fell sharply during the Great Recession.</p>
      </figcaption>
      <iframe src={base + "/graphics/funding-history/index.html"} title="Ohio library funding and the economy"></iframe>
    </figure>
    <p>Libraries turned to donations, grants, and, most significantly, local levies.</p>

    <h2>The Shift From State to Local Funding</h2>
    <p>State funding remains the largest source of revenue for the average Ohio public library, but its share has shrunk as local funding has grown.</p>
    <StateFunding showShares />
    <p>In July 2023, Ohio <a href="https://www.lsc.ohio.gov/assets/legislation/135/hb33/en0/files/hb33-tax-bill-analysis-as-enacted-135th-general-assembly.pdf">wrote its existing library funding rate into law</a>. For every $100 in taxes collected for the state’s main operating fund, $1.70 would go to public libraries. The same budget cut state income taxes. The share was set, but the amount libraries could count on still depended on what Ohio collected.</p>
    <p>Greater reliance on local taxes puts the equitable access Ohio’s funding formula was designed to protect at risk.</p>

    <h2>What Happens When Libraries Rely on Local Levies</h2>
    <p>Ohio librarian Steve Wood foresaw this shift in 2003. He wrote, “An unpleasant possibility for future funding could easily be away from [state-based funding] and toward much greater local support. The fact that this could easily eliminate the philosophy of equalization, so much a part of the funding’s distribution formula, could carry little weight with the state legislature. And since many communities in Ohio are unable to generate support for local property tax levies, library service statewide is likely to deteriorate.”</p>
    <p>Local levies now supplement state funding. Library boards propose these taxes, and residents vote on whether to approve them. Libraries that rely more heavily on local levies tend to have more income per resident.</p>
    <p>In 2023, Ohio voters approved 31 of the 33 public library levies on the ballot.</p>
    <p>Libraries in areas with higher property tax values tend to get more of their funding from local levies. Lawrence County, with the second-lowest property tax value, relies solely on state funding for its libraries. “I can tell you that probably in Lawrence County right now, a levy would not pass,” said a resident. “Most levies in Lawerence County in the last three years have failed… Property values continue to increase, and we are paying more taxes already. The areas of the state with the higher property values are used to paying more taxes and it's more common over there for levies to get passed.”</p>
    <p>As libraries rely more on local levies, the gap in library income per resident has widened across counties.</p>
    <figure class="funding-map county-income">
      <figcaption>
        <h3>Disparity in library incomes in Ohio increases over time.</h3>
        <p>The blue band shows the middle 50% of Ohio counties by inflation-adjusted library income per resident. The red dashed line marks the median.</p>
      </figcaption>
      <iframe src={base + "/graphics/county-income/index.html"} title="Library income per resident across Ohio counties"></iframe>
    </figure>

    <h2>Can Ohio Keep Library Funding Equitable?</h2>
    <p>Ohio’s funding formula was designed to improve library service in places that had historically received less. Local levies can help libraries keep their doors open, but communities differ in how much they can raise. As local taxes make up more of library budgets, the state formula has less influence over what each community can afford.</p>
    <p>Ohio residents can still get a library card anywhere in the state. What their nearest branch can offer its readers, humans and cows alike, depends on what it can afford.</p>

    <hr />
    <p>Read the <a href="https://aishichandra.notion.site/p/Methodology-bdb75aa896964f3491699bb43ae9d55a?pvs=25">Methodology</a></p>
  </article>
</main>


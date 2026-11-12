"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

function getCampus(story) {
  const candidates = [story.meta, story.tag].filter(Boolean).flatMap((value) => value.split("·").map((part) => part.trim()));
  return candidates.find((value) => /university|\bFUTA\b|\bLASU\b/i.test(value)) || "";
  
}

export default function StoryArchive({ stories }) {
  const [query, setQuery] = useState("");
  const [campus, setCampus] = useState("all");
  const [format, setFormat] = useState("all");

  const campuses = useMemo(
    () => [...new Set(stories.map(getCampus).filter(Boolean))].sort((a, b) => a.localeCompare(b)),
    [stories]
  );

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return stories.filter((story) => {
      const searchable = [story.title, story.excerpt, story.meta, story.tag, story.subtitle]
        .filter(Boolean).join(" ").toLowerCase();
      return (!term || searchable.includes(term))
        && (campus === "all" || getCampus(story) === campus)
        && (format === "all" || story.format === format);
    });
  }, [stories, query, campus, format]);

  const reset = () => { setQuery(""); setCampus("all"); setFormat("all"); };

  return (
    <div className="archive-shell">
      <div className="archive-toolbar" aria-label="Filter the story archive">
        <label className="archive-search-wrap">
          <span aria-hidden="true">⌕</span>
          <input
            className="archive-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search names, stories, universities..."
            aria-label="Search stories"
          />
        </label>
        <label className="archive-select-label">
          <span>Campus</span>
          <select value={campus} onChange={(event) => setCampus(event.target.value)} aria-label="Filter by campus">
            <option value="all">All campuses</option>
            {campuses.map((name) => <option key={name} value={name}>{name}</option>)}
          </select>
        </label>
        <label className="archive-select-label">
          <span>Format</span>
          <select value={format} onChange={(event) => setFormat(event.target.value)} aria-label="Filter by format">
            <option value="all">All formats</option>
            <option value="interview">Interviews</option>
            <option value="origin">Origin stories</option>
          </select>
        </label>
        {(query || campus !== "all" || format !== "all") && (
          <button className="archive-reset" type="button" onClick={reset}>Clear filters ×</button>
        )}
      </div>

      <div className="archive-results-line" aria-live="polite">
        <span>THE BTG STORY ARCHIVE</span>
        <strong>{filtered.length} {filtered.length === 1 ? "STORY" : "STORIES"}</strong>
      </div>

      {filtered.length ? (
        <div className="archive-list">
          {filtered.map((story) => (
            <article className="archive-item" key={story.slug}>
              <div className="archive-item-number">{story.number}</div>
              <div className="archive-item-content">
                <div className="archive-item-kicker">{story.tag || (story.format === "origin" ? "BTG · ORIGIN STORY" : "BTG · INTERVIEW")}</div>
                <h2><Link href={story.href}>{story.title}</Link></h2>
                <p>{story.excerpt}</p>
                <div className="archive-item-bottom">
                  <span>{story.meta}</span>
                  <div className="archive-item-links">
                    <Link href={story.href}>Read story <span aria-hidden="true">↗</span></Link>
                    {story.builderSlug && <Link href={`/builders/${story.builderSlug}`}>Builder profile</Link>}
                    {story.externalUrl && <a href={story.externalUrl} target="_blank" rel="noreferrer">External version</a>}
                  </div>
                </div>
              </div>
              <div className="archive-item-arrow" aria-hidden="true">↗</div>
            </article>
          ))}
        </div>
      ) : (
        <div className="archive-empty">
          <span>NO MATCHES FOUND</span>
          <h2>Nothing in the archive matches that search.</h2>
          <p>Try another name, university or keyword, or clear your filters to see every story.</p>
          <button type="button" onClick={reset}>Show all stories</button>
        </div>
      )}
    </div>
  );
}

---
titulo: "Linha 7 Panel"
subtitulo: "Universities and social movements building a feminist ecological solidarity economy"
ano: 2024
instituicao: "SoU_Ciência · Unifesp"
papel: "Information design, data visualization, data processing and implementation"
ferramentas: ["Leaflet", "Python", "Figma", "HTML/CSS/JS"]
tags: ["dataviz", "mapa", "design-de-informacao", "web"]
categoria-principal: "dataviz"
cota: "DV·2024.01"
capa: "./capa.jpg"
destaque: true
status: "publicado"
---

## About the project

The Linha 7 Panel is an interactive data visualization and science communication system built for SoU_Ciência, a think tank affiliated with Unifesp. It documents the relationship between Brazilian universities and social movements in the field of the feminist ecological solidarity economy, from 1993 to the present.

The system combines three dimensions: a timeline with over 130 events organized into five historical cycles; an interactive map with hundreds of initiatives across the country; and thematic studies with animated videos on reproductive labor, food sovereignty and housing.

The panel serves audiences with very different intentions: cooperatives looking for nearby technical support, public managers mapping installed capacity, researchers exporting data, students discovering the field.

## Problem

Three decades of history had accumulated in this field, but that memory was scattered across reports, dissertations and institutional records with no connection between them. There was no single place where the phenomenon could be seen whole — its cycles of expansion, its political ruptures, its geographic distribution.

There was also a design risk: treating the collection as a database. A filterable list cannot communicate that the field advanced, was dismantled and reinvented itself across five cycles shaped by events such as the creation of SENAES, the 2016 impeachment and the pandemic. The order in which information is accessed mattered as much as the information itself.

## Solution

I defined an architecture guided by the principle of narrative before listing: users first encounter the panoramic view — the historical cycles and territorial density — and only then dive into specific events and initiatives. Structural political milestones live inside the timeline itself, not in footnotes.

On the map, built in Leaflet with data processed in Python, every decision favored legibility over density: labels became tooltips, icons were simplified, filters reveal themselves progressively. The map was designed as an actionable tool — a cooperative can locate nearby technical support, and a researcher can export the data for independent analysis.

Navigation assumes there is no single correct flow: there are distinct entry points by user profile, validated with the research team through successive rounds of meetings and iteration.

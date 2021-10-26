---
title: "Hello World"
layout: "base.njk"
templateEngineOverride: njk,md

---

<div class="games">
{%- for game in collections.games -%}
    <a href="./{{ game.url }}" class="games__card">
        <img alt="{{ game.data.title }}" src="{{ game.data.thumbnail }}">
        <div class="games__card-details">
            <h2>{{ game.data.title }}</h2>
            <div class="game-attributes">
                <span>{{ game.data.genre }}</span>
                <span class="date" title="Released {{ game.data.date }}">{{ game.data.date }}</span>
            </div>
            <p>{{ game.data.short_description }}</p>
        </div>
    </a>
{%- endfor -%}
</div>
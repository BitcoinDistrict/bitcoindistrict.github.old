---
title: Events
layout: default
permalink: /events/
category: events
---

## Upcoming Events

{% assign upcoming_events = site.posts | where: "categories", "events" | where: "date", ">" | date: "now" | sort: "date" %}
{% assign past_events = site.posts | where: "categories", "events" | where: "date", "<=" | date: "now" | sort: "date" %}

### Upcoming Events
{% if upcoming_events.size > 0 %}
  <div class="events-list">
    {% for post in upcoming_events %}
      <section class="event">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p><strong>Date:</strong> {{ post.date | date: "%B %d, %Y" }}</p>
        <div class="event-excerpt">
          {{ post.excerpt }}
        </div>
      </section>
    {% endfor %}
  </div>
{% else %}
  <p>No upcoming events found.</p>
{% endif %}

### Past Events
{% if past_events.size > 0 %}
  <div class="events-list">
    {% for post in past_events %}
      <section class="event">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p><strong>Date:</strong> {{ post.date | date: "%B %d, %Y" }}</p>
        <div class="event-excerpt">
          {{ post.excerpt }}
        </div>
      </section>
    {% endfor %}
  </div>
{% else %}
  <p>No past events found.</p>
{% endif %}
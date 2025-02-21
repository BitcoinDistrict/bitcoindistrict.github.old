---
title: Speakers
layout: single
permalink: /speakers/
category: speakers
---

Bitcoin Speaker events happening in the DMV area.


{% assign upcoming_events = site.posts | where: "tags", "speaker" | where_exp: "post", "post.date > site.time" | sort: "date" %}
{% assign past_events = site.posts | where: "tags", "speaker" | where_exp: "post", "post.date <= site.time" | sort: "date" | reverse%}

### Upcoming Events
{% if upcoming_events.size > 0 %}
  <div class="events-list">
    {% for post in upcoming_events %}
      <section class="event">
        {{ post.date | date: "%b %d, %Y" }} > <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.venue }})
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
        {{ post.date | date: "%b %d, %Y" }} > <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.venue}})
      </section>
    {% endfor %}
  </div>
{% else %}
  <p>No past events found.</p>
{% endif %}
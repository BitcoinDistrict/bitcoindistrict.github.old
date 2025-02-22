---
title: Conferences
layout: single
permalink: /conferences/
category: conferences
header:
  image: /assets/img/dc/kennedy.jpg
  og_image: /assets/img/dc/kennedy.jpg
---

![Kennedy Center]({{ page.header.image }})  

{% assign upcoming_events = site.posts | where: "categories", "conferences" | where_exp: "post", "post.date > site.time" | sort: "date" %}
{% assign past_events = site.posts | where: "categories", "conferences" | where_exp: "post", "post.date <= site.time" | sort: "date" | reverse%}

### Upcoming Conferences
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

### Past Conferences
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
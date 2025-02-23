---
title: Guest Speakers
description: "Guest speaker events in the greater DMV metro area."
layout: single
permalink: /speakers/
category: speakers
header:
  image: /assets/img/dc/dc-aerial.jpg
  og_image: /assets/img/dc/dc-aerial.jpg
sidebar:
  - nav: 
    - events
---

![Washington DC]({{ page.header.image }})   

Events featuring guest speakers happening in the District. 

{% assign upcoming_events = site.posts | where: "tags", "speaker" | where_exp: "post", "post.draft != true" | where_exp: "post", "post.date > site.time" | sort: "date" %}
{% assign past_events = site.posts | where: "tags", "speaker" | where_exp: "post", "post.draft != true" | where_exp: "post", "post.date <= site.time" | sort: "date" | reverse%}

### Upcoming Events
{% if upcoming_events.size > 0 %}
  <div class="events-list">
    {% for post in upcoming_events %}
      <section class="event">
        {{ post.date | date: "%b %d, %Y" }} {{ site.data.ui-text[site.locale].event_date_separator }} <a href="{{ post.url }}">{{ post.title }}</a>
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
        {{ post.date | date: "%b %d, %Y" }} {{ site.data.ui-text[site.locale].event_date_separator }} <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.venue}})
      </section>
    {% endfor %}
  </div>
{% else %}
  <p>No past events found.</p>
{% endif %}
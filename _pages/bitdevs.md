---
title: DC BitDevs
layout: single
permalink: /bitdevs/
category: bitdevs
author: DC BitDevs
header:
  image: /assets/img/og/bitdevs-og.jpg
  og_image: /assets/img/og/bitdevs-og.jpg
sidebar:
  - nav: 
    - events
    - bitdevs
---

![DC BitDevs]({{ page.header.image }})   

## About BitDevs
BitDevs is a community for those interested in discussing and participating in the research and development of Bitcoin and related protocols. You can be well versed with or new to the topics, all are welcome.


{% assign upcoming_events = site.posts | where: "categories", "bitdevs" | where_exp: "post", "post.date > site.time" | sort: "date" %}
{% assign past_events = site.posts | where: "categories", "bitdevs" | where_exp: "post", "post.date <= site.time" | sort: "date" | reverse%}

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
        {{ post.date | date: "%b %d, %Y" }} {{ site.data.ui-text[site.locale].event_date_separator }} <a href="{{ post.url }}">{{ post.title }}</a>
      </section>
    {% endfor %}
  </div>
{% else %}
  <p>No past events found.</p>
{% endif %}
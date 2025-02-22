---
title: Coffee & Bitcoin
description: "Coffee & Bitcoin meetups in the greater DMV metro area."
layout: single
permalink: /coffee/
category: coffee
header:
  image: /assets/img/og/coffee-og.jpg
  og_image: /assets/img/og/coffee-og.jpg
---

![Coffee & Bitcoin]({{ page.header.image }})  

Join us for a "Coffee & Bitcoin" meetup where we'll talk about what's happening in the world of Bitcoin. We highly encourage anyone who is new to Bitcoin or just a little curious to come and ask questions... don't be shy!  

{% assign upcoming_events = site.posts | where: "tags", "coffee" | where_exp: "post", "post.date > site.time" | sort: "date" %}
{% assign past_events = site.posts | where: "tags", "coffee" | where_exp: "post", "post.date <= site.time" | sort: "date" | reverse%}

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
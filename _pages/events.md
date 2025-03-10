---
title: Events in the District
description: "Find Bitcoin-only events in the DC metro area. Meet others, learn more, and dive into Bitcoin in the nation's capital & surrounding cities."
header:
  image: /assets/img/dc/dc-aerial.jpg
  og_image: /assets/img/dc/dc-aerial.jpg
layout: single
permalink: /events/
category: events
---

![Bitcoin District Events]({{ page.header.image }})  

Below is a list of Bitcoin-focused events in the Washington, DC metro area. While most events on this list are organized by us, we do make an effort to include events organized externally (like conferences & DC BitDevs). Be sure to join our [Meetup group](https://www.meetup.com/bitcoin-district) to get notified when we post new Bitcoin District events!

{% assign upcoming_events = site.posts | where: "categories", "events" | where_exp: "post", "post.draft != true" | where_exp: "post", "post.date > site.time" | sort: "date" %}
{% assign past_events = site.posts | where: "categories", "events" | where_exp: "post", "post.draft != true" | where_exp: "post", "post.date <= site.time" | sort: "date" | reverse %}

### Upcoming Events
{% if upcoming_events.size > 0 %}
  <div class="events-list">
  {% for post in upcoming_events %}
      {% assign icon_string = "" %}
      {% for tag in post.tags %}
        {% assign tag_data = site.data.eventtags[tag] %}
        {% if tag_data %}
          {% assign icon_string = icon_string | append: tag_data.emoji | append: " " %}
        {% endif %}
  {% endfor %}
  <section class="event">
    {{ icon_string }} {{ post.date | date: "%b %d, %Y" }} {{ site.data.ui-text[site.locale].event_date_separator }} <a href="{{ post.url }}">{{ post.title }}</a>
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
      {% assign icon_string = "" %}
      {% for tag in post.tags %}
        {% assign tag_data = site.data.eventtags[tag] %}
        {% if tag_data %}
          {% assign icon_string = icon_string | append: tag_data.emoji | append: " " %}
        {% endif %}
  {% endfor %}
  <section class="event">
    {{ icon_string }} {{ post.date | date: "%b %d, %Y" }} {{ site.data.ui-text[site.locale].event_date_separator }} <a href="{{ post.url }}">{{ post.title }}</a>
  </section>
    {% endfor %}
  </div>
{% else %}
  <p>No past events found.</p>
{% endif %}
---
title: Events in the District
layout: single
permalink: /events/
category: events
---

Below are all of the Bitcoin events in the greater DMV area.

{% assign upcoming_events = site.posts | where: "categories", "events" | where_exp: "post", "post.date > site.time" | sort: "date" %}
{% assign past_events = site.posts | where: "categories", "events" | where_exp: "post", "post.date <= site.time" | sort: "date" | reverse%}

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
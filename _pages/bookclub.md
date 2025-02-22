---
title: Book Club
layout: single
permalink: /bookclub/
category: bookclub
header:
  image: /assets/img/headers/bookclub.jpg
  og_image: /assets/img/headers/bookclub.jpg
---

![Bitcoin Book Club]({{ page.header.image }})  

If you're interested in reading with us, register for one of our monthly book club events below.

{% assign upcoming_events = site.posts | where: "categories", "bookclub" | where_exp: "post", "post.date > site.time" | sort: "date" %}
{% assign past_events = site.posts | where: "categories", "bookclub" | where_exp: "post", "post.date <= site.time" | sort: "date" %}

## Upcoming Events
{% if upcoming_events.size > 0 %}
  <div class="events-list">
    {% for post in upcoming_events %}
      <section class="event">
        {{ post.date | date: "%B %d, %Y" }} >> <a href="{{ post.url }}">{{ post.title }}</a>
      </section>
    {% endfor %}
  </div>
{% else %}
  <p>No upcoming events found.</p>
{% endif %}

## Past Events
These are books recommended by members. Each book links to the author's official website or to Amazon.

{% if past_events.size > 0 %}
  <div class="events-list">
    {% for post in past_events %}
      <section class="event">
        {{ post.date | date: "%B %d, %Y" }} >> <a href="{{ post.url }}">{{ post.title }}</a>
      </section>
    {% endfor %}
  </div>
{% else %}
  <p>No past events found.</p>
{% endif %}

# Book Club List

<table id="bookTable">
  <thead>
    <tr>
      <th onclick="sortTable(0)">Title</th>
      <th onclick="sortTable(1)">Author</th>
      <th onclick="sortTable(2)">Date</th>
    </tr>
  </thead>
  <tbody>
    {% for book in site.data.bookclub %}
      <tr>
        <td><a href="{{ book.link }}" target="_blank">{{ book.title }}</a></td>
        <td>{{ book.author }}</td>
        <td>{{ book.date }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<script>
  function sortTable(columnIndex) {
    var table = document.getElementById("bookTable");
    var rows = table.rows;
    var switching = true;
    var shouldSwitch, i, x, y;

    while (switching) {
      switching = false;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[columnIndex];
        y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
        
        // Handling the Date column (index 2) and sorting by most recent first
        if (columnIndex === 2) {
          var dateX = x.innerHTML.trim() === '' ? null : new Date(x.innerHTML);
          var dateY = y.innerHTML.trim() === '' ? null : new Date(y.innerHTML);

          // If one date is null, treat it as older than any date
          if (dateX === null && dateY !== null) {
            shouldSwitch = true;
            break;
          }
          if (dateY === null && dateX !== null) {
            continue; // Do not switch if y's date is missing
          }

          // Sorting by most recent first (descending)
          if (dateX < dateY) {
            shouldSwitch = true;
            break;
          }
        } else {
          // Sorting alphabetically for Title and Author
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
</script>


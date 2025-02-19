---
title: "Categories"
layout: single
permalink: /categories/
---

{% for category in site.categories %}
  <section class="category-section">
    <h3><a href="{{ site.baseurl }}/categories/{{ category[0] }}">{{ category[0] }}</a></h3>
    <div class="category-posts">
      {% for post in category[1] %}
        <article class="category-post">
          <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
          <p>{{ post.date }} | {{ post.location }}</p>
        </article>
      {% endfor %}
    </div>
  </section>
{% endfor %}

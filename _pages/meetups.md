---
title: Bitcoin Community Meetups
permalink: /meetups/
layout: map-page
description: "Join vibrant Bitcoin meetup groups in the DC metro area. Connect with locals, share ideas, and dive into Bitcoin at events near you!"
sidebar:
  - nav: 
    - events
---

These are the Bitcoin meetups in the DC, Maryland & Virginia greater metro area. Let us know if we're missing any.

<!-- Interactive Map will be inserted here by the map-page layout -->

<table style="border: none;">
    {% for meetup in site.data.meetups %}
    <tr style="border: none;">
        <td style="border: none;">
            <div class="community">
                <div class="community-image">
                    <a href="{{ meetup.link }}" target="_blank" rel="noopener noreferrer">
                        <img src="{{ site.url }}{{ site.baseurl }}{{ meetup.image_path }}" alt="image-left" class="align-left" style="width: 100px; height: auto; vertical-align: middle;">
                    </a>
                </div>
                <div class="community-description" style="vertical-align: middle;">
                    <p>
                        <a href="{{ meetup.link }}" target="_blank" rel="noopener noreferrer"><h3>{{ meetup.title }}</h3></a>
                        {{ meetup.description }}
                    </p>
                </div>
            </div>
        </td>
    </tr>
    {% endfor %}
</table>
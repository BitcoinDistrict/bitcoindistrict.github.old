---
title: Bitcoin Community Meetups
permalink: /meetups/
layout: single
description: "Join vibrant Bitcoin meetup groups in the DC metro area. Connect with locals, share ideas, and dive into Bitcoin at events near you!"
sidebar:
  - nav: 
    - events
---

These are the Bitcoin meetups in the DC, Maryland & Virginia greater metro area. Let us know if we're missing any.

<table style="border: none;">
    {% for community in site.data.communities %}
    <tr style="border: none;">
        <td style="border: none;">
            <div class="community">
                <div class="community-image">
                    <a href="{{ community.link }}" target="_blank" rel="noopener noreferrer">
                        <img src="{{ site.url }}{{ site.baseurl }}{{ community.image_path }}" alt="image-left" class="align-left" style="width: 100px; height: auto; vertical-align: middle;">
                    </a>
                </div>
                <div class="community-description" style="vertical-align: middle;">
                    <p>
                        <a href="{{ community.link }}" target="_blank" rel="noopener noreferrer"><h3>{{ community.title }}</h3></a>
                        {{ community.description }}
                    </p>
                </div>
            </div>
        </td>
    </tr>
    {% endfor %}
</table>
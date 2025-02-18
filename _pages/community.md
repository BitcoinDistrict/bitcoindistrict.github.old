---
title: Bitcoin Only Meetups
permalink: /community/
---

These are the Bitcoin meetups in the DC, Maryland & Virginia greater metro area. Let us know if we're missing any.

<table style="border: none;">
    {% for community in site.data.communities %}
    <tr style="border: none;">
        <td style="border: none;">
            <div class="community">
                <div class="community-image">
                    <a href="{{ community.link }}" target="_blank" rel="noopener noreferrer">
                        <img src="{{ site.url }}{{ site.baseurl }}{{ community.image_path }}" alt="image-left" class="align-left" style="width: 150px; height: auto;">
                    </a>
                </div>
                <div class="community-description">
                    <p>
                        <h3>{{ community.title }}</h3>
                        {{ community.description }}
                    </p>
                </div>
            </div>
        </td>
    </tr>
    {% endfor %}
</table>
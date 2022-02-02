---
title: A Midsummer Night's Dream
layout: page
permalink: /midsummer/
---

{% for scene in site.midsummer %}
[{{ scene.title }}]({{ scene.permalink | relative_url }})
{% endfor %}
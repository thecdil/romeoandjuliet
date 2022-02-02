<div class="epigraph">
<blockquote><p>{{ include.text |}}</p>
<footer>{% if include.objectid %}{%- assign item = site.data[site.metadata] | where: "objectid", include.objectid | first -%}<a href="{{ '/item.html' | relative_url | append: '?id=' | append: item.objectid }}">{{item.title}}</a>, {% endif %}{{include.source}}</footer></blockquote>
</div>
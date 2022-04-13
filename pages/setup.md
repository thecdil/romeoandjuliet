---
title: Site Configuration
layout: page
permalink: /setup/
custom-foot: js/setup-js.html
---

# Test Your Metadata

{% capture info %}
This page will configure the metadata used on the site to test your CollectionBuilder spreadsheet. 
The configurations are stored in your browser's session storage, so will remain only until you close this window!

Please check the [Metadata Guidelines page]({{ '/metadata.html' | relative_url }}) for information about how to create and publish your metadata spreadsheet.
{% endcapture %}{% include feature/alert.html text=info color="info" %}

The currently configured metadata is:
<div id="current-metadata" class="text-center mb-3"></div>

To keep the currently configured metadata, simply navigate to another page!
To change the metadata you have two options: paste in the full link for a CSV hosted online (such as a published Google Sheet) *or* select a CSV file from your computer.

<div class="card mb-3">
    <div class="card-body">
        <h3>Use Metadata Link</h3>
        <p>
            <form id="metadataUrl" onsubmit="dd_items_setup(); return false;">
                <div class="input-group">
                    <input type="url" id="csvUrl" class="form-control" placeholder="Paste in the full URL to CSV hosted online">
                    <div class="input-group-append">
                        <button class="btn btn-dark" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </p>
    </div>
</div>

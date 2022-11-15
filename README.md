<p align="center">
<a href=""><img src="https://img.shields.io/badge/Javascipt-%23DD0031.svg?style=for-the-badge&logo=javascript&logoColor=white" /></a>
<a href=""><img src="https://img.shields.io/badge/jQuery-%23DD0031.svg?style=for-the-badge&logo=jQuery&logoColor=white" /></a>
<a href=""><img src="https://img.shields.io/github/v/release/hegdehog/QlikviewExtension_HTMLTextBox?style=for-the-badge" /></a>
<a href=""><img src="https://img.shields.io/github/repo-size/hegdehog/QlikviewExtension_HTMLTextBox?style=for-the-badge" /></a>
</p>

# PolylineGenerator
This script generates a polyline code using a shapefile as source. The shapefile format is a geospatial vector data format for geographic information system (GIS) software, in our case, we use it to get the polygon's coordinates of a region or country. For example, we can use the polylines with *QlikMaps* (tool for *Qlik Sense*), which it's a reporting software for Data Vistualization.


## Qlikview Exntesion files
Each Qlikview extension should to have two mandatory files and two optionals:
1. **Definition.xml (mandatory):** XML file to configure the extension (name, description, custom parameteres, etc). 
2. **Script.js (mandatory):** main file, the source code of the extension is wrote here. Using jQuery (javascript) and DOM functionalities we get the items to use them and custom their characteristics.
3. P**roperties.qvpp (optional):** XHTML file to configigurate options and secondary properties. We should follow the Qlikview's guideline of QVPP. It's not mandatory, if the extension hasn't it, it will use the default properties (layout, caption,expressions, etc).
4. **Icon.PNG (optional):** picture shoewd on the Extension Objects in WebView.


More info and comments on: https://www.n4gash.com/2012/extension-textbox-codigo-html-qlikview-10
 
## How to install
Follow the next steps:
1. Zip all files (xml, js, qvpp and/or icon)
2. Rename the zipped file to .QAR
3. Double clik on the .QAR file and it will run a Qlikview installer. Other way to install it manually is copying the files into Local *Settings/Application Data/QlikTech/QlikView/ExtensionsObjects*

## How to uninstall 
Remove the files from *Settings/Application Data/QlikTech/QlikView/ExtensionsObjects*

## Example
![Qlikview Extension](https://i0.wp.com/www.n4gash.com/wp-content/2012/qlikview_extension_html_textbox_01.png)
![Qlikview Extension](https://i0.wp.com/www.n4gash.com/wp-content/2012/qlikview_extension_html_textbox_02.png)
![Qlikview Extension](https://i0.wp.com/www.n4gash.com/wp-content/2012/qlikview_extension_html_textbox_03.png)


 
## Run Locally

Clone the project

```bash
  git clone git@github.com:hegdehog/QlikviewExtension_HTMLTextBox.git
```

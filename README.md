Extracts geographical coordinates of languages from the [Glottolog repository](https://github.com/glottolog/glottolog) (tested on version 4.1).

Installation: `npm install -g glottolog-geo-extractor`.

Usage:

1) `glottolog-geo-extractor --path {path} --families {families}`

    - `{path}` is the path to the Glottolog repo (use quotes);
    - `{families}` is a list of top-level languoid codes separated with spaces (or just one code).
    
    Such a query will return an array of coordinates (latitude/longitude) of all languages that belong to either of the families.

2) `glottolog-geo-extractor --path {path} --families {families} --languages {languages}`

    - `{path}` is the path to the Glottolog repo (use quotes);
    - `{families}` is a list of top-level languoid codes separated with spaces (or just one code);
    - `{languages}` is a list of bottom-level languoid codes separated with spaces (or just one code).
    
    Such a query will return an array of coordinates (latitude/longitude) of just the provided languages, searching them within the indicated families.

For finding out the languoid code of the language or family you are interested in, use [Glottolog] search and examine the last part of the generated URL.
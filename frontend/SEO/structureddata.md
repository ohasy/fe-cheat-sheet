https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data

https://json-ld.org/

https://www.youtube.com/watch?v=hBKZnaIMm4M

<script type="application/ld+json">
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "{{recipe_name}}",
    "image": [ "{{recipe_image}}" ],
    "author": {
      "@type": "Person",
      "name": "{{recipe_author}}"
    }
  }
</script>

fetch('https://api.example.com/recipes/123')
.then(response => response.text())
.then(structuredDataText => {
const script = document.createElement('script');
script.setAttribute('type', 'application/ld+json');
script.textContent = structuredDataText;
document.head.appendChild(script);
});

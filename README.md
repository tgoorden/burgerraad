# Forms

## site.json

``` json
{
  "_id": "Burgerraad-Site",
  "configId": "burgerraad",
  "type": "site",
  "multiple": false,
  "elements": [
    {
      "name": "doc.title",
      "label": "Website Title",
      "type": "text",
      "layout": {
        "col": {
          "sm": 12
        }
      }
    },
    {
      "name": "doc.url",
      "label": "url",
      "type": "text",
      "layout": {
        "col": {
          "sm": 12
        }
      }
    },
    {
      "name": "doc.description",
      "label": "Description",
      "type": "text",
      "layout": {
        "col": {
          "sm": 12
        }
      }
    },
    {
      "name": "doc.footer_contact",
      "label": "Footer inhoud: Contact",
      "type": "textarea",
      "md": true,
      "layout": {
        "col": {
          "sm": 12
        }
      }
    },
    {
      "name": "doc.footer_about",
      "label": "Footer inhoud: Over Burgerraad",
      "type": "textarea",
      "md": true,
      "layout": {
        "col": {
          "sm": 12
        }
      }
    }
  ]
}
```

## page.json

``` json
{
  "_id": "Burgerraad-Page",
  "configId": "burgerraad",
  "type": "page",
  "multiple": true,
  "elements": [
    {
      "name": "doc.menu_included",
      "label": "Tonen in navigatie?",
      "type": "checkbox",
      "layout": {
        "col": {
          "md": 6
        }
      }
    },
    {
      "name": "doc.menu",
      "label": "Naam link in navigatie",
      "type": "text",
      "layout": {
        "col": {
          "md": 6
        }
      }
    },
    {
      "name": "doc.content",
      "label": "Inhoud pagina (in Markdown)",
      "type": "textarea",
      "md": true,
      "layout": {
        "col": {
          "md": 6
        }
      },
      "attributes": {
        "rows": 20
      }
    }
  ]
}
```

## blogposts.json

``` json
{
  "_id": "Burgerraad-Blogpost",
  "configId": "burgerraad",
  "type": "blogpost",
  "multiple": true,
  "elements": [
    {
      "name": "doc.title",
      "label": "Titel blogpost",
      "type": "text",
      "layout": {
        "col": {
          "md": 12
        }
      }
    },
    {
      "name": "doc.date",
      "label": "Datum publicatie",
      "type": "datetime-local",
      "layout": {
        "col": {
          "md": 6
        }
      }
    },
    {
      "name": "doc.draft",
      "label": "Publiceren?",
      "type": "checkbox",
      "layout": {
        "col": {
          "md": 6
        }
      }
    },
    {
      "name": "doc.content",
      "label": "Inhoud Blogpost (in Markdown)",
      "type": "textarea",
      "md": true,
      "layout": {
        "col": {
          "md": 6
        }
      },
      "attributes": {
        "rows": 20
      }
    }
  ]
}
```


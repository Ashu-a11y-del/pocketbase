/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1736455494")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "file2816704765",
    "maxSelect": 1,
    "maxSize": 1,
    "mimeTypes": [],
    "name": "company_logo",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1736455494")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "file2816704765",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "company_logo",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})

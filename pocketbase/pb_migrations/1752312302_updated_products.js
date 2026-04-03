/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4092854851")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file3309110367",
    "maxSelect": 99,
    "maxSize": 5000000,
    "mimeTypes": [
      "image/png",
      "image/jpeg"
    ],
    "name": "image",
    "presentable": false,
    "protected": false,
    "required": true,
    "system": false,
    "thumbs": [
      "100x100"
    ],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4092854851")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file3309110367",
    "maxSelect": 99,
    "maxSize": 30000,
    "mimeTypes": [
      "image/png",
      "image/jpeg",
      "image/gif"
    ],
    "name": "image",
    "presentable": false,
    "protected": false,
    "required": true,
    "system": false,
    "thumbs": [
      "100x100"
    ],
    "type": "file"
  }))

  return app.save(collection)
})

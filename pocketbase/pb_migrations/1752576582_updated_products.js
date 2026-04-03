/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4092854851")

  // remove field
  collection.fields.removeById("autodate2990389176")

  // remove field
  collection.fields.removeById("autodate3332085495")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation3725765462",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "created_by",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1843675174",
    "max": 0,
    "min": 0,
    "name": "description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file3309110367",
    "maxSelect": 5,
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

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "autodate2990389176",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "autodate3332085495",
    "name": "updated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // remove field
  collection.fields.removeById("relation3725765462")

  // update field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1843675174",
    "max": 0,
    "min": 0,
    "name": "description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(5, new Field({
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
})

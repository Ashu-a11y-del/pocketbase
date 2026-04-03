/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1736455494")

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_320010944",
    "hidden": false,
    "id": "relation1443201533",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "firm",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1736455494")

  // remove field
  collection.fields.removeById("relation1443201533")

  return app.save(collection)
})

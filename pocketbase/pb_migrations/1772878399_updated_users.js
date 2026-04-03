/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1736455494")

  // update collection data
  unmarshal({
    "oauth2": {
      "enabled": true
    }
  }, collection)

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3276419244",
    "max": 15,
    "min": 15,
    "name": "gst_number",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1736455494")

  // update collection data
  unmarshal({
    "oauth2": {
      "enabled": false
    }
  }, collection)

  // remove field
  collection.fields.removeById("text3276419244")

  return app.save(collection)
})

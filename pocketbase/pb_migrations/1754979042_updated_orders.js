/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "deleteRule": "user = @request.auth.id",
    "listRule": "user = @request.auth.id",
    "updateRule": "user = @request.auth.id",
    "viewRule": "user = @request.auth.id"
  }, collection)

  // remove field
  collection.fields.removeById("select2223302008")

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3058290911",
    "max": 0,
    "min": 0,
    "name": "payment_mode",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation2375276105",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select2063623452",
    "maxSelect": 1,
    "name": "status",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "pending",
      "completed"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "deleteRule": "user_id = @request.auth.id",
    "listRule": "user_id = @request.auth.id",
    "updateRule": "user_id = @request.auth.id",
    "viewRule": "user_id = @request.auth.id"
  }, collection)

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select2223302008",
    "maxSelect": 1,
    "name": "paymentMethod",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "upi",
      "bank_transfer",
      "whatsapp"
    ]
  }))

  // remove field
  collection.fields.removeById("text3058290911")

  // update field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation2375276105",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user_id",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select2063623452",
    "maxSelect": 1,
    "name": "status",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "pending",
      "cancelled",
      "completed"
    ]
  }))

  return app.save(collection)
})

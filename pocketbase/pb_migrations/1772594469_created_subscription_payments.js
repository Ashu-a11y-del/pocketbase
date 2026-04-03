/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": "",
    "deleteRule": "",
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_1736455494",
        "hidden": false,
        "id": "relation2809058197",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "user_id",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "select2567478235",
        "maxSelect": 1,
        "name": "plan_type",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "monthly_first",
          "yearly_first",
          "twoyear_first",
          "monthly",
          "yearly",
          "twoyear"
        ]
      },
      {
        "hidden": false,
        "id": "select2069996022",
        "maxSelect": 1,
        "name": "payment_method",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "bank",
          "gpay",
          "other"
        ]
      },
      {
        "hidden": false,
        "id": "select2063623452",
        "maxSelect": 1,
        "name": "status",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "pending",
          "verified",
          "rejected"
        ]
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text4012608362",
        "max": 0,
        "min": 0,
        "name": "transaction_ref",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "date4141751240",
        "max": "",
        "min": "",
        "name": "expiry_date",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_287142295",
    "indexes": [],
    "listRule": "",
    "name": "subscription_payments",
    "system": false,
    "type": "base",
    "updateRule": "",
    "viewRule": ""
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_287142295");

  return app.delete(collection);
})

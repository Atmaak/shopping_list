const { client } = require('../service/mongodb.service')
const { ObjectId } = require('mongodb');

const get_all_items = async (req, res) => {
    try {
        const { state, startDate, endDate, content } = req.query;
    
        const query = {};
        if (state) query.state = state;
        if (content) query.content = content;
        let startDateObject, endDateObject;
        if (startDate) startDateObject = parseDateString(startDate);
        if (endDate) endDateObject = parseDateString(endDate);

        if (startDateObject && endDateObject) {
            query.createdAt = {
                $gte: startDateObject,
                $lte: endDateObject
            };
        }

        console.log(query)

        const items = await client.collection('items').find(query).toArray();

        res.send(items);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching items");
    }
}

const create_item = async (req, res) => {
    try {
        const data = req.body;

        data.createdAt = new Date()

        const item = await client.collection('items').insertOne(data);
        
        const insertedItem = await client.collection('items').findOne({_id: item.insertedId});

        res.send(insertedItem);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating item");
    }
}

const update_item = async (req, res) => {
    try {
        const data = req.body;
        data.updatedAt = new Date();

        delete data["_id"];

        const item = await client.collection('items').findOneAndUpdate(
            { _id: new ObjectId(req.params._id) },
            { $set: data },
            { returnDocument: "after" }
        );

        res.send(item)
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating item");
    }
}

const delete_item = async (req, res) => {
    try {
        const itemId = req.params._id
        const result = await client.collection('items').findOneAndDelete({ _id: new ObjectId(itemId) })

        if (result) {
            res.status(200).send("Item deleted")
        } else {
            res.status(404).send("Item not found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting item")
    }
}

function parseDateString(dateString) {
    const parts = dateString.split('/');
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const year = parseInt(parts[2]);
    return new Date(year, month, day);
}

module.exports = {
    get_all_items,
    create_item,
    update_item,
    delete_item
}
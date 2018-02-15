({

    createItem: function(component, newItem) {
        var addEvent = component.getEvent("addItem");
        addEvent.setParams({ "item": newItem });
        addEvent.fire();
        component.set("v.newItem", { 'sobjectType': 'Camping_Item__c', 'Name': '', 'Quantity__c': 0, 'Price__c': 0, 'Packed__c': false })
    }

})
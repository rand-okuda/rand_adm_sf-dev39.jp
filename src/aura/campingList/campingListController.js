({

    handleAddItem: function(component, event, helper) {
        var newItem = event.getParam("item");
        helper.createItem(component, newItem);
    }

    ,

    handleChangeItem: function(component, event, helper) {
        var updatedItem = event.getParam("item");
        helper.updateItem(component, updatedItem);
    }

    ,

    doInit: function(component, event) {

        var action = component.get("c.getItems");

        action.setCallback(this, function(response) {

            var state = response.getState();

            if (state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }

        });

        $A.enqueueAction(action);

    }

})
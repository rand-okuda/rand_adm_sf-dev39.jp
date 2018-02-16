({

    handleAddItem: function(component, event, helper) {
        var newItem = event.getParam("item");
        createItem(component, newItem);
    }

    ,

    handleChangeItem: function(component, event, helper) {
        var updatedItem = event.getParam("item");
        updateItem(component, updatedItem);
    }

    ,

    createItem: function(component, item) {
        
        this.saveItem(component, item, function(response){
            
            var state = response.getState();
            
            if (state === "SUCCESS") {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
            }
            
        });
        
    }
    
    ,
    
    updateItem: function(component, item) {
        
        this.saveItem(component, item);
        
    }
    
    ,
    
    saveItem: function(component, item, callback) {
        
        var action = component.get("c.saveItem");
        
        action.setParams(
            { "item": item }
        );
        
        if (callback) {
            action.setCallback(this, callback);
        }
        
        $A.enqueueAction(action);
        
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
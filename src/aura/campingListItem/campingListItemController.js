({

    clickPacked: function(component, event, helper) {
        var item = component.get("v.item");
        var changeEvent = component.getEvent("changeItem");
        changeEvent.setParams({ "item": item });
        changeEvent.fire();
    }

})
({

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

    ,

    clickCreateItem : function(component, event, helper) {

        var validItem = 
            component.find('newitemeform').reduce(function (validSoFar, inputCmp) {
                inputCmp.showHelpMessageIfInvalid();
                return validSoFar && inputCmp.get('v.validity').valid;
            }, true);
        
        if(validItem){
            var newItem = component.get("v.newItem");
            helper.createItem(component, newItem);
        }
        	
    }

})
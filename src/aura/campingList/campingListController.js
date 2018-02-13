({

    clickCreateItem : function(component, event) {

        var validItem = 
            component.find('newitemeform').reduce(function (validSoFar, inputCmp) {
                inputCmp.showHelpMessageIfInvalid();
                return validSoFar && inputCmp.get('v.validity').valid;
            }, true);
        
        if(validItem){

            var newItem = component.get("v.newItem");
            var theItems = component.get("v.items"); 

            theItems.push(newItem);

            component.set("v.items", theItems);
            component.set("v.newItem", { 'sobjectType': 'Camping_Item__c', 'Name': '', 'Quantity__c': 0, 'Price__c': 0, 'Packed__c': false })

        }
        	
    }

})
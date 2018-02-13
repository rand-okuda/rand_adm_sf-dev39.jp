({
    doInit : function(component, event, helper) {
        var mydate = component.get("v.items.LastModifiedDate");
        if(mydate){
            component.set("v.formatdate", new Date(mydate));
        }
    },
})
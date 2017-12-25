({
    handleClick1 : function(component, event, helper) {
        var btnClicked = event.getSource();
        var btnMessage = btnClicked.get("v.label");
        component.set("v.message", btnMessage);
        console.log("***handleClick1");
    },
    handleClick2: function(component, event, helper) {
        var newMessage = event.getSource().get("v.label");
        component.set("v.message", newMessage);
        console.log("***handleClick2");
    },
    handleClick3: function(component, event, helper) {
        component.set("v.message", event.getSource().get("v.label"));
        console.log("***handleClick3");
    }
})
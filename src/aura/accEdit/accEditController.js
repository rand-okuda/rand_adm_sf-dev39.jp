({

    handleSaveRecord: function(component, event, helper) {

        var recordSaver = component.find("recordEditor");
        recordSaver.saveRecord($A.getCallback(function(saveResult) {

            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                console.log("Save completed successfully.");

            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");

            } else if (saveResult.state === "ERROR") {
                var errMsg = "";
                for (var i = 0; i < saveResult.error.length; i++) {
                    errMsg += saveResult.error[i].message + "\n";
                }
                component.set("v.recordSaveError", errMsg);
                console.log('Problem saving record, error: ' +  JSON.stringify(saveResult.error));

            } else {
                component.set("v.recordSaveError", "");
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));

            }

        }));

    }

    ,

    handleRecordUpdated: function(component, event, helper) {

        var eventParams = event.getParams();

        if(eventParams.changeType === "CHANGED") {

            var changedFields = eventParams.changedFields;
            console.log('Fields that are changed: ' + JSON.stringify(changedFields));

            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
                "title": "Saved",
                "message": "The record was updated."
            });

            resultsToast.fire();

        } else if(eventParams.changeType === "LOADED") {

        } else if(eventParams.changeType === "REMOVED") {

        } else if(eventParams.changeType === "ERROR") {
            console.log('Error: ' + component.get("v.recordSaveError"));

        }

    }

})
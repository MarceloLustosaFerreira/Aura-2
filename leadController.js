({
        handleSubmit: function(component, event, helper) {
            
            component.set('v.spinner', true);
            event.preventDefault();      
            var fields = event.getParam('fields');
            component.find('recordEditForm').submit(fields);
        },
        handleSuccess: function(component, event, helper) {
            
            component.set('v.spinner', false);
           
            helper.showToast(component, event, helper, 'Sucesso', 'success', 'Registro de Entrega Feito!');
        }
    })

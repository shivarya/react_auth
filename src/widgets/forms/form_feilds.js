import React from "react";

const FormFields = (props) =>{

    const renderFields = () => {
        const formArray = [];
        for(let elementName in props.formData){
            formArray.push({
                id:elementName,
                settings:props.formData[elementName]
            })
        }
        return formArray.map( (item,i) => {
            return (
                <div key={i} className="form_element">
                    {renderTemplates(item)}
                </div>
            )
        })
    }

    const renderTemplates = (data) => {
        let attributes = data.settings;
        let formTemplate = null;       
        
        switch(attributes.element){
            case('input'):
                formTemplate = (
                    <div>
                        {showLabel(attributes.label,attributes.labelText)}
                        <input 
                            {...attributes.config}
                            value={attributes.value}
                            onChange={
                                (e) => changeHandler(e,data.id)
                            }
                            onBlur={
                                (e) => changeHandler(e,data.id,true)
                            }
                        />
                        {showValidation(attributes)}
                    </div>
                )
                break;
            case('textarea'):
                formTemplate = (
                    <div>
                        {showLabel(attributes.label,attributes.labelText)}
                        <textarea 
                            {...attributes.config}
                            value={attributes.value}
                            onChange={
                                (e) => changeHandler(e,data.id)
                            }
                            onBlur={
                                (e) => changeHandler(e,data.id,true)
                            }
                        ></textarea>
                        {showValidation(attributes)}
                    </div>
                )
                break;
            case('select'):
                formTemplate = (
                    <div>
                        {showLabel(attributes.label,attributes.labelText)}
                        <select
                            value={attributes.value}
                            name={attributes.config.name}
                            onChange={
                                (e) => changeHandler(e,data.id)
                            }
                            onBlur={
                                (e) => changeHandler(e,data.id,true)
                            }
                        >
                        {
                            attributes.config.options.map((item,i) => (
                                <option key={i} value={item.val}>{item.text}</option>
                            ))
                        }
                        </select>
                        {showValidation(attributes)}
                    </div>
                )
                break;
            default:
                formTemplate = null;
        }

        return formTemplate;
    }

    const showLabel = (show,txt) => {
        return show ?
            <label>{txt}</label>
            : null;
    }

    const validate = (ele) => {
        let error = [true,''];

        if(ele.validation.required){ //if required
            const valid = ele.value.trim() !== "";
            const msg = `${ele.labelText} is required`;
            error = !valid ? [valid,msg] : error;
        }
        if(ele.validation.minLen){ 
            const valid = ele.value.length >= ele.validation.minLen;
            const msg = `${ele.labelText} must be greater than ${ele.validation.minLen}`;
            error = !valid ? [valid,msg] : error;
        }

        return error;
    }

    const changeHandler = (e,id, blur=false) => {
        let newState = props.formData;
        newState[id].value = e.target.value;
        if(blur){
            let validData = validate(newState[id]);
            newState[id].valid = validData[0];
            newState[id].valid_msg = validData[1];
        }
        newState[id].touched = blur;
        props.change(newState);
    }

    const showValidation = (ele) => {
        let errorMsg = null;
        if(!ele.valid && ele.validation){
            errorMsg = (<div className="label_error">
                {ele.valid_msg}
            </div>);
        }
        return errorMsg;
    }

    return (
        <div>
            {renderFields()}
        </div>
    )
}

export default FormFields;
import { Validator } from "../../../validation/contracts/validator"
import { RequiredFieldValidator } from "../../../validation/validators/required-field"
import { ValidatorComposite } from "../../../validation/validators/validator-composite"

export const makeSendMailValidator = (): ValidatorComposite => {
    const validations: Validator[] = []
    const requiredFields = ['to', 'subject', 'body']
    for (const field of requiredFields) {
        validations.push(new RequiredFieldValidator(field))
    }
    return new ValidatorComposite(validations)
}
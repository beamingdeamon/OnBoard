<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class CompanyUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'addresses.*.city_id' => [
                'required',
            ],
            'addresses.*.address' => [
                'string',
                'required',
            ],
            'contacts.*.contact_type_id' => [
                'required',
            ],
            'contacts.*.contact' => [
                'string',
                'required',
            ],
            'description' => [
                'required'
            ],
            'sphere' => [
                'required'
            ],
            'company_name'  =>  [
                'required'
            ],
            'logo' => [
                'required'
            ]
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errors' => $validator->errors()], \Symfony\Component\HttpFoundation\Response::HTTP_BAD_REQUEST));
    }
}
